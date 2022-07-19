import React, {useContext} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.jsx';
import Card from './Card.jsx'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <img className="profile__avatar" src={currentUser.avatar} alt="Фотография профиля" />
          <div onClick={onEditAvatar} className="profile__avatar profile__avatar_change" />
          <div className="profile__info">
            <h1 className="profile__info-name">{currentUser.name}</h1>
            <button onClick={onEditProfile} className="profile__edit-button" type="button" title="Редактировать" aria-label="Кнопка Редактировать" />
            <p className="profile__info-description">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={onAddPlace} className="profile__add-button" type="button" title="Добавить" aria-label="Кнопка Добавить" />
      </section>
      <section className="elements">
        {
          cards.map(card => 
            <Card 
              key={card._id} 
              card={card} 
              currentUserId={currentUser._id} 
              onClick={onCardClick} 
              onCardLike={onCardLike} 
              onCardDelete={onCardDelete} 
            />
          )
        }
      </section>
    </main>
  );
}

export default Main;