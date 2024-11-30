import React, { useState, useEffect } from "react";

export function Tabela() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacter(data.results);
    }

    fetchCharacter();
  }, []);

  console.log(characters);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th>SPECIES</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <td>{character.id}</td>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.species}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
