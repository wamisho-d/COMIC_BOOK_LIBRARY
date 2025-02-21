import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=YOUR_MARVEL_API_KEY`)
      .then(response => response.json())
      .then(data => setCharacter(data.data.results[0]))
      .catch(error => console.error('Error fetching character details:', error));
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
    </div>
  );
};

export default CharacterDetails;
