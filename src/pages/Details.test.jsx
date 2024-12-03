import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Details } from './Details';
import { fetchMovieDetails } from '../api/tmdb';

// Mock de la función fetchMovieDetails
jest.mock('../api/tmdb', () => ({
  fetchMovieDetails: jest.fn(),
}));

// Mock de react-router-dom para manejar hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '123' }),
  useLocation: () => ({ search: '?category=Popular%20Movies' }),
}));

describe('Details Component', () => {
  const mockMovieData = {
    id: 123,
    title: 'Mock Movie',
    overview: 'This is a mock overview of the movie.',
    release_date: '2023-12-01',
    genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }],
    poster_path: '/mock-poster.jpg',
  };

  beforeEach(() => {
    fetchMovieDetails.mockResolvedValue(mockMovieData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the loading state initially', () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('fetches and displays movie details correctly', async () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );

    // Espera a que los datos sean cargados
    await waitFor(() => expect(fetchMovieDetails).toHaveBeenCalledWith('123'));

    // Comprueba que los detalles del movie se renderizan
    expect(screen.getByRole('heading', { name: /mock movie/i })).toBeInTheDocument();
    expect(screen.getByText(/this is a mock overview of the movie./i)).toBeInTheDocument();
    expect(screen.getByText(/release date:/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-12-01/i)).toBeInTheDocument();
    expect(screen.getByText(/action, adventure/i)).toBeInTheDocument();

    // Comprueba que la imagen se renderiza con el src correcto
    const image = screen.getByAltText(/mock movie/i);
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('/mock-poster.jpg');
  });

  it('applies the correct class based on the category', async () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );

    await waitFor(() => screen.getByRole('heading', { name: /mock movie/i }));

    const section = screen.getByRole('region');
    expect(section).toHaveClass('details--popular-movies');
  });
});
