import React from 'react';

function InfoTooltip(props) {
  const classOpen = props.tooltipStatus ? 'popup_opened' : '';
  
  return (
    <div className={`popup popup_type_${props.name} ${classOpen}`}>
      <div className="popup__container">
        <button onClick={props.onClose} className="popup__close-button" type="button" title="Закрыть" aria-label="Кнопка Закрыть" />
        {props.tooltipStatus === 'success' &&
          <>
            <div className='popup__tooltip-image-sucсess'></div>
            <h3 className={`popup__title popup__title_type_${props.name}`}>Вы успешно зарегистрировались!</h3>
          </>
        }
        {props.tooltipStatus === 'fail' &&
          <>
            <div className='popup__tooltip-image-fail'></div>
            <h3 className={`popup__title popup__title_type_${props.name}`}>Что-то пошло не так! Попробуйте ещё раз.</h3>
          </> 
        }
      </div>
    </div>
  );
}

export default InfoTooltip;