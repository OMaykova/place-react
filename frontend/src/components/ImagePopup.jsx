import React from 'react';


function ImagePopup({onClose, isOpen, link, name}) {
  const classOpen = isOpen ? 'popup_opened' : '';
  return (
    <div className={`popup popup_type_card ${classOpen}`}>
      <div className="popup__container-card">
        <button onClick={onClose} className="popup__close-button" type="button" title="Закрыть" aria-label="Кнопка Закрыть" />
        <figure className="popup__card">
          <img className="popup__card-image" src={link} alt={`Фотография ${name}`} />
          <figcaption className="popup__card-title">{name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;