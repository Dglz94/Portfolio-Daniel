import React, { useEffect, useState } from "react";
import "./arcade.css";

import Character from "../../components/characters/Character";
import icons from "../../utils/icons";
import ThemesBar from "../../components/themesBar/ThemesBar";
import { getDisneyCharacters } from "../../utils/characters";

export default function Arcade() {
  const [characters, setCharacters] = useState([]);
  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(false);

  const getDisneyCharacters = async () => {
    setLoading(true);
    const response = await fetch(`https://api.disneyapi.dev/characters`);
    const data = await response.json();
    setCharacters(data.data);
    setLoading(false);

  };

  const getRickMortyCharacters = async () => {
    setLoading(true);

    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    setCharacters(data.results);
    setLoading(false);

  };

  const getGOTCharacters = async () => {
    setLoading(true);

    const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
    const data = await response.json();
    setCharacters(data);
    setLoading(false);

  };

  const getMarvelCharacters = async () => {
    setLoading(true);
    const apiKey = "311a1f3df162db5cfab547c7540acae3";
    const userkey = "699a4e89542f89577d25b674d684cfe131ed8b78";
    const ts = "hulk";
    const hash = "a0d9188a42273be96e6a69ee68d05701";

    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}&hash=${hash}&ts=${ts}`
    );
    const data = await response.json();
    setCharacters(data.data.results);
    setLoading(false);

  };

  const getHarryPotterCharacters = async () => {
    setLoading(true);
    const response = await fetch(`http://hp-api.herokuapp.com/api/characters`);
    const data = await response.json();
    setCharacters(data);
    setLoading(false);
  };

  const getPokemonCharacters = async () => {
    setLoading(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await response.json();
    setCharacters(data.results);
    setLoading(false);
  };

  useEffect(() => {
    switch (theme) {
      case "marvel":
        getMarvelCharacters();
        break;
      case "disney":
        getDisneyCharacters();
        break;
      case "got":
        getGOTCharacters();
        break;
      case "rickMorty":
        getRickMortyCharacters();
        break;
      case "harryPotter":
        getHarryPotterCharacters();
        break;
      case "pokemon":
        getPokemonCharacters();
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <div className="arcade-container">
      <ThemesBar setTheme={setTheme} />
      <div className="arcade-games ">
        <div className="game-btn flat">{icons.arcade.list}</div>
        <div className="game-btn flat">{icons.arcade.card}</div>
        <div className="game-btn flat">{icons.arcade.list}</div>
        <div className="game-btn flat">{icons.arcade.list}</div>
      </div>
      <div className="arcade-panel flat">
        <div className="game-screen">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            characters.map((character) => {
              return <Character theme={theme} character={character} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
