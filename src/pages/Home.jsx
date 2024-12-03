import React, { useEffect, useState } from 'react'
import { fetchMoviesByCategory } from '../api/tmdb'
import { Carousel } from '../components/Carousel'

export const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setPopularMovies(await fetchMoviesByCategory('popular'))
            setTopRatedMovies(await fetchMoviesByCategory('top_rated'))
            setUpcomingMovies(await fetchMoviesByCategory('upcoming'))     
        }
        fetchData()
    }, [])

    return (
        <div>
            <Carousel items={popularMovies} category="Popular Movies" />
            <Carousel items={topRatedMovies} category="Top Rated Movies" />
            <Carousel items={upcomingMovies} category="Upcoming Movies" />
        </div>
    )
}
