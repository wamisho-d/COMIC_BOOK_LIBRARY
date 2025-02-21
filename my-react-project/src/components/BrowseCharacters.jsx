import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://gateway.marvel.com/v1/public/characters?apikey=YOUR_MARVEL_API_KEY')
      .then(response => response.json())
      .then(data => setCharacters(data.data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <div>
      <h2>Browse Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character-details/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCharacters;
