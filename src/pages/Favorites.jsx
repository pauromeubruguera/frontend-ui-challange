import React from 'react';
import useStore from '../store/useStore';
import { FavoriteButton } from '../components/FavoriteButton';

export const Favorites = () => {
  const { favorites } = useStore();

  return (
    <div className="favorites">
      <h2 className="favorites__title">My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="favorites__empty">You have no favorite items yet!</p>
      ) : (
        <ul className="favorites__list">
          {favorites.map((item) => (
            <li key={item.id} className="favorites__item">
              
              <img
                src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item.poster_path}`}
                alt={item.title}
                className="favorites__image"
              />
              <div className="favorites__details">
                <h3 className="favorites__item-title">{item.title}</h3>
                <FavoriteButton
                  movie={item}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
