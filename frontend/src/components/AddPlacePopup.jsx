import React, {useRef, useEffect} from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace, isLoading}) {
  const captionRef = useRef('');
  const linkRef = useRef('');
  const buttonText = isLoading ? 'Сохранение...' : 'Создать'
  
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      caption: captionRef.current.value,
      link: linkRef.current.value
    });
  }
  useEffect(() =>{
    if(isOpen) {
      captionRef.current.value='';
      linkRef.current.value='';
    }
  })
  return(
    <PopupWithForm 
      onSubmit={handleSubmit}
      isOpen={isOpen} 
      onClose={onClose}
      name="add" 
      title="Новое место"
      buttonText={buttonText}>
      <input 
        ref={captionRef} 
        id="caption-title-input" 
        className="popup__input popup__input_type_caption-title" 
        type="text" 
        name="caption" 
        minLength={2} 
        maxLength={30} 
        placeholder="Название" 
        required 
      />
      <span className="caption-title-input-error popup__error popup__error_visible" />
      <input 
        ref={linkRef} 
        id="url-input" 
        className="popup__input popup__input_type_url" 
        type="url" 
        name="link" 
        placeholder="Ссылка на картинку" 
        required 
      />
      <span className="url-input-error popup__error popup__error_visible" />          
    </PopupWithForm>
  )
}
export default AddPlacePopup;