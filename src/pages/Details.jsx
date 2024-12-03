import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
import { FavoriteButton } from '../components/FavoriteButton';

export const Details = () => {
    const { id } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState(null);

    // Obtener la categoría de la query string
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMovieDetails(id);
            setMovie(data);
        };

        fetchData();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <section className={`details details--${category.replace(/\s+/g, '-').toLowerCase()}`} role="region">
            <div className='details-container'>
                <div>
                    <img
                        src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        style={{ width: '300px' }}
                    />
                </div>
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p><strong>Release date:</strong> {movie.release_date}</p>
                    <p>Generes: {movie.genres.map((genre) => genre.name).join(', ')}</p> 
                    <FavoriteButton movie={movie} />
                </div>
            </div>
        </section>
    );
};
