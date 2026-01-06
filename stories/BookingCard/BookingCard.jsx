import React from 'react';
import PropTypes from 'prop-types';
import './booking-card.css';
import messageCircleUrl from '../assets/message-circle-more.svg';

export const BookingCard = ({
    bookingId,
    avatar,
    name,
    location,
    gender,
    bookingDate,
    bookingTime,
    serviceLabel,
    status,      // 'pending' | 'canceled' | 'completed'
    price,
    currency,
}) => {
    const statusMap = {
        pending: {
            label: 'Refund Pending',
            className: 'booking-card__status--pending',
        },
        canceled: {
            label: 'Canceled',
            className: 'booking-card__status--canceled',
        },
        completed: {
            label: 'Completed',
            className: 'booking-card__status--completed',
        },
    };

    const statusConfig = statusMap[status] || statusMap.pending;

    return (
        <article className="booking-card">
            {/* top row: booking id */}
            <div className="booking-card__top">
                <span className="booking-card__booking-id">
                    Booking ID: {bookingId}
                </span>
            </div>

            {/* main content row */}
            <div className="booking-card__main">
                {/* left: avatar + customer info */}
                <div className="booking-card__left">
                    <div className="booking-card__avatar">
                        <img src={avatar} alt={name} className="booking-card__avatar-img" />
                    </div>
                    <div className="booking-card__info">
                        <div className="booking-card__name-row">
                            <span className="booking-card__name">{name}</span>
                        </div>
                        <div className="booking-card__meta">
                            {location} · {gender}
                        </div>
                        <div className="booking-card__date">
                            Booking Date: {bookingDate} | {bookingTime}
                        </div>
                        {/* <button className="booking-card__tag" type="button">
                            {serviceLabel}
                        </button> */}
                    </div>
                </div>

                {/* right: status + amount */}
                <div className="booking-card__right">
                    <div className="booking-card__status-row">
                        <span className={`booking-card__status-dot status-dot-${status}`} />
                        <span
                            className={`booking-card__status-label ${statusConfig.className}`}
                        >
                            {statusConfig.label}
                        </span>
                    </div>
                    <div className="booking-card__price">
                        <span className="booking-card__currency">{currency}</span>
                        <span className="booking-card__amount">{price}</span>
                    </div>
                </div>
            </div>

            {/* bottom chat icon */}
            <div className="booking-card__footer">
                <button className="booking-card__tag" type="button">
                    {serviceLabel}
                </button>
                <button className="booking-card__chat-btn" type="button" aria-label="Chat">
                    <img src={messageCircleUrl} alt="" className="" />
                </button>
            </div>
        </article>
    );
};

BookingCard.propTypes = {
    bookingId: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    bookingDate: PropTypes.string.isRequired,
    bookingTime: PropTypes.string.isRequired,
    serviceLabel: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['pending', 'canceled', 'completed']).isRequired,
    price: PropTypes.string.isRequired,   // formatted "3,520"
    currency: PropTypes.string.isRequired, // "$"
};
