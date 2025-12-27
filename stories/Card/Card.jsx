import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import messageCircleUrl from '../assets/message-circle.svg';

export const Card = ({
  image,
  rating = 5,
  isFavorite = false,
  onToggleFavorite,
  userAvatar,
  userName,
  onCommentClick,
}) => {
  const stars = Array.from({ length: 5 });

  return (
    <div className="sb-card">
      <img src={image} alt={userName} className="sb-card__image" />

      {/* top overlay: rating + favorite */}
      <div className="sb-card__top">
        <div className="sb-card__rating">
          {stars.map((_, i) => (
            <span
              key={i}
              className={
                i < rating ? 'sb-card__star sb-card__star--active' : 'sb-card__star'
              }
            >
              ★
            </span>
          ))}
        </div>

        <button
          type="button"
          className={`sb-card__favorite ${isFavorite ? 'sb-card__favorite--active' : ''}`}
          onClick={onToggleFavorite}
        >
          {isFavorite ? '❤' :<span className="material-symbols-outlined sb-card__not__favorite">favorite</span>}
        </button>
      </div>

      {/* bottom overlay: avatar + name + comment icon */}
      <div className="sb-card__bottom">
        <div className="sb-card__user">
          <img src={userAvatar} alt={userName} className="sb-card__avatar" />
          <span className="sb-card__name">{userName}</span>
        </div>

        <button type="button" className="sb-card__comment" onClick={onCommentClick}>
           <img src={messageCircleUrl} alt="favorite" className="favorite-icon" />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
  isFavorite: PropTypes.bool,
  onToggleFavorite: PropTypes.func,
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onCommentClick: PropTypes.func,
};
