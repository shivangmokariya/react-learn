import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OMDB_API_KEY = 'ca1e0202';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
console.log(movies);
  const fetchMovies = async (searchQuery) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchQuery}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      fetchMovies(query);
    } else {
      setMovies([]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Movie List</h1>
      <form onSubmit={handleSearch} style={{ textAlign: 'right', marginBottom: '20px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {movies.map(movie => (
          <div key={movie.imdbID} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} poster`} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;