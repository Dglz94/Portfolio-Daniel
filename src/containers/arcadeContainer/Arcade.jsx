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

  useEffect(() => {
    switch (theme) {
      case "marvel":
        // getMarvelCharacters();
        break;
      case "disney":
        // getDisneyCharacters();
        break;
      case "got":
        // getGOTCharacters();
        break;
      case "rickMorty":
        // getRickMortyCharacters();
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
        {/* <div className="game-screen">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            characters.map((character) => {
              return <Character theme={theme} character={character} />;
            })
          )}
        </div> */}
      </div>
    </div>
  );
}
