import React, { useState, useEffect, createContext } from "react";

const initialContext = {
  favorites: [],
  total: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavoriteCharacter: () => {},
};
const CharacterContext = createContext(initialContext);

export const CharacterContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  let value;

  useEffect(() => {
    const cachedData = localStorage.getItem("favoriteCharacters");
    if (cachedData) setFavorites(JSON.parse(cachedData));
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteCharacters", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (id, name, description, image, details) => {
    const character = {
      id,
      name,
      description,
      image,
      details,
    };
    setFavorites([...favorites, character]);
  };

  const removeFavorite = (characterId) => {
    setFavorites(favorites.filter((character) => character.id !== characterId));
  };

  const isFavoriteCharacter = (characterId) => {
    return favorites.some((character) => character.id === characterId);
  };

  value = {
    favorites,
    total: favorites.length,
    addFavorite,
    removeFavorite,
    isFavoriteCharacter,
  };

  return (
    <CharacterContext.Provider value={value}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
