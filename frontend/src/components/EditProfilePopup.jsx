import React, {useState, useEffect} from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({currentUser, onUpdateUser, isOpen, onClose, isLoading}) {
  const [formValues, setFormValues] = useState({name: '', description: ''})
  const buttonText = isLoading ? 'Сохранение...' : 'Сохранить'

  useEffect(() => {
    setFormValues({name: currentUser.name, description: currentUser.about})
  }, [currentUser, isOpen]);

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValues((prevState) => ({...prevState, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: formValues.name,
      about: formValues.description,
    });
  }

  return(
    <PopupWithForm 
      onSubmit={handleSubmit}
      isOpen={isOpen} 
      onClose={onClose} 
      name="edit" 
      title="Редактировать профиль"
      buttonText={buttonText}>
      <input value={formValues.name} onChange={handleChange} id="name-input" className="popup__input popup__input_type_name" type="text" name="name" minLength={2} maxLength={40} placeholder="Имя фамилия" required />
      <span className="name-input-error popup__error popup__error_visible" />
      <input value={formValues.description} onChange={handleChange} id="description-input" className="popup__input popup__input_type_description" type="text" name="description" minLength={2} maxLength={200} placeholder="Профессия" required />
      <span className="description-input-error popup__error popup__error_visible" />
    </PopupWithForm>
  )

}
export default EditProfilePopup;