import React from 'react';

function Card({card, onClick, currentUserId, onCardLike, onCardDelete}) {
  // Определяем, являемся ли мы владельцем текущей карточки (boolean)
  const isOwn = card.owner._id === currentUserId;
  // console.log(card.owner._id, currentUserId)

  const displayDeleteButton = {
    display: `${isOwn ? 'block' : 'none'}`
  }
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUserId);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}` 

  function handleClick() {
    onClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <div className="element_template">
      <article className="element">
        <button className="element__delete" style={displayDeleteButton} type="button" title="Удалить" aria-label="Кнопка удаления" onClick={handleDeleteClick}/>
        <img className="element__image" src={card.link} alt={`Фотография ${card.name}`} onClick={handleClick}/>
        <div className="element__caption">
          <h3 className="element__caption-title">{card.name}</h3>
          <div className="element__heartImage">
            <button className={cardLikeButtonClassName} type="button" title="Нравится" aria-label="Кнопка нравится" onClick={handleLikeClick} />
            <div className="element__like-count">{card.likes.length}</div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card;