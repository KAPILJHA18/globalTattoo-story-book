import React from 'react';
import check from '../assets/badge-check.svg'
import './profile-header.css';

type ProfileStats = {
    followers: number | string;
    following: number | string;
    reviews: number | string;
    likes: number | string;
};

type ProfileHeaderProps = {
    coverImage: string;
    avatarImage: string;
    name: string;
    location: string;
    gender: string;
    isVerified?: boolean;
    stats: ProfileStats;
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
    coverImage,
    avatarImage,
    name,
    location,
    gender,
    isVerified = false,
    stats,
}) => {
    return (
        <section className="ph-card">
            {/* Cover image */}
            <div className="ph-cover">
                <img src={coverImage} alt="cover" className="ph-cover__img" />
                <div className="ph-cover__gradient" />
            </div>

            {/* Black strip with avatar + name */}
            <div className="ph-main">
                <div className="ph-main__inner">
                    {/* Avatar overlapping cover */}
                    <div className="ph-avatar">
                        <img src={avatarImage} alt={name} className="ph-avatar__img" />
                    </div>

                    <div className="ph-main__text">
                        <div className="ph-name-row">
                            <span className="ph-name">{name}</span>
                            {isVerified && <span className="ph-verified">
                                <img src={check} alt="verified badge" />
                            </span>}
                        </div>
                        <div className="ph-meta">
                            {location}
                            <span className="ph-dot">•</span>
                            {gender}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats row */}
            <div className="ph-stats">
                <div className="ph-stat">
                    <div className="ph-stat__value">{stats.followers}</div>
                    <div className="ph-stat__label">Followers</div>
                </div>
                <div className="ph-divider" />
                <div className="ph-stat">
                    <div className="ph-stat__value">{stats.following}</div>
                    <div className="ph-stat__label">Following</div>
                </div>
                <div className="ph-divider" />
                <div className="ph-stat">
                    <div className="ph-stat__value">{stats.reviews}</div>
                    <div className="ph-stat__label">Reviews</div>
                </div>
                <div className="ph-divider" />
                <div className="ph-stat">
                    <div className="ph-stat__value">{stats.likes}</div>
                    <div className="ph-stat__label">Likes</div>
                </div>
            </div>
        </section>
    );
};
