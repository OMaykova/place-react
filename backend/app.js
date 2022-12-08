const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const routerUser = require('./routes/user');
const routerCard = require('./routes/card');
const signin = require('./routes/signin');
const signup = require('./routes/signup');
const NotFoundError = require('./errors/not-found-err');
const { signout } = require('./controllers/user');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const centralizedErrorHandler = require('./middlewares/centralizedErrorHandler');
require('dotenv').config();

const { PORT = 3002 } = process.env;
const app = express();
const allowedCors = {
  origin: [
    'https://api.omaykova.nomoredomains.xyz',
    'http://api.omaykova.nomoredomains.xyz',
    'https://omaykova.nomoredomains.xyz',
    'http://omaykova.nomoredomains.xyz',
    'http://localhost:3000',
    'http://localhost:3001',
    'https://omaykova.github.io',
  ],
  credentials: true, // эта опция позволяет устанавливать куки
};
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use('*', cors(allowedCors));
app.use(cookieParser()); // подключаем парсер кук как мидлвэр
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB!!!');
});
app.use(requestLogger); // подключаем логгер запросов
app.use(limiter); // ограничение запросов к сервер для защиты от DDOS
app.use(helmet()); // настройка заголовкой HTTP от известных уязвимостей
// краш-тест, отключить после ревью
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use('/', signin);
app.use('/', signup);
app.get('/signout', signout);
// авторизация
app.use(auth);
app.use('/', routerUser);
app.use('/', routerCard);
app.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});
app.use(errorLogger); // подключаем логгер ошибок
app.use(errors()); // обработчик ошибок celebrate
app.use(centralizedErrorHandler); // централизованный обработчик ошибок
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
