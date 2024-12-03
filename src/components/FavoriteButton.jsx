// components/FavoriteButton.jsx

import React from 'react';
import useStore from '../store/useStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'

export const FavoriteButton = ({ movie }) => {

    const { favorites, addToFavorites,removeFromFavorites } = useStore();

    const isFavorite = favorites.some((item) => item.id === movie.id)

    const handleClick = () => {
        if (isFavorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <button
            className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
            onClick={handleClick}
            aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        >
            <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
        </button>
    );
};