import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './user-review-card.css';
import SendIcon from '../assets/send.svg'

export const UserReviewCard = ({
    reviewerName,
    reviewerAvatar,
    reviewDate,
    reviewTime,
    reviewText,
    slides = [],
    rating = 5,
    likes = 0,
    comments = 0,
    isTattooArtist = false,
    address,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const stars = Array.from({ length: 5 });

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <article className="ur-card">
            {/* header with avatar + name + meta */}
            <header className="ur-card__header">
                <div className="ur-card__header-left">
                    <div className="ur-card__avatar">
                        <img
                            src={reviewerAvatar}
                            alt={reviewerName}
                            className="ur-card__avatar-img"
                        />
                    </div>
                    <div className="ur-card__header-text">
                        <div className="ur-card__reviewer">{reviewerName}
                            {isTattooArtist && <span className="material-symbols-outlined" style={{ color: '#84CC16', fontSize: 10, marginLeft: '3px' }}>check_circle</span>}
                        </div>

                        <div className="ur-card__meta">
                            {address && `${address} `}  {reviewDate}, {reviewTime}
                        </div>
                    </div>
                </div>
            </header>

            {/* review text bubble */}
            <div className="ur-card__bubble">
                <p className="ur-card__text">{reviewText}</p>
            </div>

            {/* hero image slider with rating overlay */}
            <div className="ur-card__image">
                <img
                    src={currentSlideData.image}
                    alt={currentSlideData.artistName}
                    className="ur-card__hero-img"
                    style={isTattooArtist ? {marginBottom: '-10px'} : {}}
                />

                {/* rating stars overlay on top-right */}
                {!isTattooArtist && <div className="ur-card__image-rating">
                    <div className="ur-card__rating-pill">
                        {stars.map((_, i) => (
                            <span
                                key={i}
                                className={
                                    i < rating ? 'ur-card__star ur-card__star--active' : 'ur-card__star'
                                }
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>}
            </div>

            {/* artist row over image bottom */}
            {!isTattooArtist && <div className="ur-card__artist-row">
                <div className="ur-card__artist-left">
                    <div className="ur-card__avatar ur-card__avatar--small">
                        <img
                            src={reviewerAvatar}
                            alt={currentSlideData.artistName}
                            className="ur-card__avatar-img"
                        />
                    </div>
                    <div>
                        <div className="ur-card__artist-name">{currentSlideData.artistName}</div>
                        <div className="ur-card__artist-location">{currentSlideData.artistLocation}</div>
                    </div>
                </div>

                <button className="ur-card__share" type="button" aria-label="Share">
                    <svg style={{ rotate: '90deg' }} xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-120v-240H120l360-440 360 440H640v240H320Zm80-80h160v-240h111L480-674 289-440h111v240Zm80-240Z" /></svg>
                </button>
            </div>}

            {/* pagination dots */}
            <div className="ur-card__dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`ur-card__dot ${currentSlide === index ? 'ur-card__dot--active' : ''}`}
                        onClick={() => goToSlide(index)}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* footer actions */}
            <footer className="ur-card__footer" style={{ justifyContent: isTattooArtist ? 'flex-start' : 'space-between' }}>
                <button className="ur-card__footer-btn" type="button">
                    <span className="ur-card__footer-icon material-symbols-outlined" style={{ color: '#F43F5E' }}>favorite</span>
                    <span className="ur-card__footer-count">{likes}</span>
                </button>

                <button className="ur-card__footer-btn" type="button">
                    <span className="ur-card__footer-icon material-symbols-outlined">sms</span>
                    <span className="ur-card__footer-count">{comments}</span>
                </button>

                <button className="ur-card__footer-btn ur-card__footer-btn--ghost" type="button">
                    <img src={SendIcon} alt="Send" height={'16px'} width='16px' />
                </button>
            </footer>
        </article>
    );
};

UserReviewCard.propTypes = {
    reviewerName: PropTypes.string.isRequired,
    reviewerAvatar: PropTypes.string.isRequired,
    reviewDate: PropTypes.string.isRequired,
    reviewTime: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            artistName: PropTypes.string.isRequired,
            artistLocation: PropTypes.string.isRequired,
        })
    ).isRequired,
    rating: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
};
