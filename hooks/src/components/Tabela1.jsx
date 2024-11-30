import React, { useState, useEffect } from "react";

export function Tabela1() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch("https://gsi.fly.dev/characters");
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
            <th>RARITY</th>
            <th>WEAPON</th>
          </tr>
        </thead>
        <tbody>
            
          {characters.map((characters) => (
            <tr key={characters.id}>
              <td>{characters.id}</td>
              <td>{characters.name}</td>
              <td>{characters.rarity}</td>
              <td>{characters.weapon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
