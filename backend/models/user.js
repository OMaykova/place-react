const mongoose = require('mongoose');
// eslint-disable-next-line import/no-unresolved
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Имя Фамилия',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Профессия',
  },
  avatar: {
    type: String,
    default: 'https://www.yandex.ru/images/search?pos=7&from=tabbar&img_url=http%3A%2F%2Fsteamuserimages-a.akamaihd.net%2Fugc%2F1689373922258799610%2F2F1C93A051C73C080D34F041F52A0A4231A3D371%2F%3Fimw%3D512%26amp%3Bimh%3D288%26amp%3Bima%3Dfit%26amp%3Bimpolicy%3DLetterbox%26amp%3Bimcolor%3D%2523000000%26amp%3Bletterbox%3Dtrue&text=unknown&rpt=simage&lr=213',
    match: [/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/, 'Некорректно введен URL'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Введите пароль'],
    select: false,
  },
});
userSchema.statics.findUserByCredentials = function (email, password) {
  // попытаемся найти пользователя по почте
  return this.findOne({ email }).select('+password') // this — это модель User
    .then((user) => {
      // не нашёлся — отклоняем промис
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }

      // нашёлся — сравниваем хеши
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }

          return user; // теперь user доступен
        });
    });
};
module.exports = mongoose.model('user', userSchema);
