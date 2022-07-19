import React from 'react';
import PopupWithForm from './PopupWithForm';

function ImageDeleteConfirmPopup({isOpen, onClose, onConfirm, isLoading, card}) {
  const buttonText = isLoading ? 'Удаление...' : 'Да'
  
  function handleSubmit(e) {
    e.preventDefault();
    onConfirm(card)
  }
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen} 
      onClose={onClose} 
      name="deleteConfirm" 
      title="Вы уверены?"
      buttonText={buttonText}>
    </PopupWithForm>
  );
}

export default ImageDeleteConfirmPopup;