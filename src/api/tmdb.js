import axios from 'axios'

const tmdb = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'es',
  },
})

export const fetchMoviesByCategory = async (category) => {
  try {
    const response = await tmdb.get(`/movie/${category}`)
    return response.data.results
  } catch (error) {
    console.error('Error fetching movies by category:', error)
    return []
  }
}

export const fetchMovieDetails = async (id) => {
  try {
    const response = await tmdb.get(`/movie/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching movie details:', error)
    return null
  }
}

export default tmdb
