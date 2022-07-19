import React, {useEffect, useRef} from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({currentUser, onUpdateAvatar, isOpen, onClose, isLoading}) {
  const inputRef = useRef(currentUser.avatar);
  const buttonText = isLoading ? 'Сохранение...' : 'Сохранить'
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
  }

  useEffect(() =>{
    if(isOpen) {
      inputRef.current.value = ''
    }
  })
  return(
    <PopupWithForm 
      onSubmit={handleSubmit}
      isOpen={isOpen} 
      onClose={onClose} 
      name="change-avatar" 
      title="Обновить аватар"
      buttonText={buttonText}>
      <input ref={inputRef} id="new-url" className="popup__input popup__input_type_url" type="url" name="link" placeholder="Ссылка на новый аватар" required />
      <span className="new-url-error popup__error popup__error_visible" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;