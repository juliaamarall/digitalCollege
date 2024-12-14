'use client'

import { useEffect, useState } from "react"
import { PokemonCard } from "@/components/Pokemon-card"

export default function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState<any[]>([]);  // Tipo do estado pode ser ajustado

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');  // URL da API para pegar Pokémons
        const data = await response.json();
        setPokemonList(data.results);  // A resposta pode ter a lista de Pokémons no campo 'results'
      } catch (error) {
        console.log("Erro ao buscar os Pokémons:", error);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Pokémon List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonList.length > 0 ? (
          pokemonList.map((item, index) => (
            <PokemonCard key={index} pokemon={item} />
          ))
        ) : (
          <p className="text-center">Carregando Pokémons...</p>
        )}
      </div>
    </div>
  )
}
