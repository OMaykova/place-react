import React from 'react';

function PopupWithForm(props) {
  const classOpen = props.isOpen ? 'popup_opened' : '';

  return (
    <div className={`popup popup_type_${props.name} ${classOpen}`}>
      <div className="popup__container">
        <button onClick={props.onClose} className="popup__close-button" type="button" title="Закрыть" aria-label="Кнопка Закрыть" />
        <h3 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h3>
        <form onSubmit={props.onSubmit} className={`popup__form popup__form_type_${props.name}`} name={props.name} noValidate>
          {props.children}
          <button className="popup__save-button" type="submit" title={props.buttonText} aria-label={`Кнопка ${props.buttonText}`}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;