export const getDisneyCharacters = async () => {
  let characters = [];
  const response = await fetch(`https://api.disneyapi.dev/characters`);
  const data = await response.json();

};

const getRickMortyCharacters = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
};

const getGOTCharacters = async () => {
  const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
  const data = await response.json();
};

const getMarvelCharacters = async () => {
  const apiKey = "311a1f3df162db5cfab547c7540acae3";
  const userkey = "699a4e89542f89577d25b674d684cfe131ed8b78";
  const ts = "hulk";
  const hash = "a0d9188a42273be96e6a69ee68d05701";

  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}&hash=${hash}&ts=${ts}`
  );
  const data = await response.json();
};

const getHarryPotterCharacters = async () => {
  const response = await fetch(`https://api.disneyapi.dev/characters`);
  const data = await response.json();
};

const getPokemonCharacters = async () => {
  const response = await fetch(` https://pokeapi.co/api/v2/pokemon/`);
  const data = await response.json();
};
