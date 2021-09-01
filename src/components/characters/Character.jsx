import React from "react";

export default function Character({ character, theme }) {
  const getUrl = (theme) => {
    if (theme === "marvel") {
      return (character.thumbnail.path + "." + character.thumbnail.extension);
    } else if (theme === "got") {
      return character.imageUrl;
    } else if (theme === "disney") {
      return character.imageUrl;
    } else if( theme === "rickMorty"){
      return character.image;
    }
  };
  console.log(character)
  return (
      
    <div className="character flat">
      <div className="character-name">
        <h2>{character.name || character.fullName}</h2>
      </div>
      <div className="character-img">
        <img
          src={
            theme === "marvel"
              ? character.thumbnail.path + "." + character.thumbnail.extension
              : getUrl(theme)
          }
          alt={character.name || character.fullName}
          style={{ width: "auto" }}
        />
      </div>
    </div>
  );
}
