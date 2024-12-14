'use client'

import { Pokemon } from "@/app/@types/pokemon/pokemon"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface PokemonContextValue {
  pokemon: Pokemon[]
}

export const PokemonContext = createContext({} as PokemonContextValue)

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  

  async function getPokemonById(id: number){
    try {
const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}/`
const response = await fetch(url)
     return await response.json() as Pokemon
    } catch (error) {
      console.log(error)
    }
  }

  async function getPokemonList(){
    for(let i = 1; i <= 20; i++){
      const pokemon = await getPokemonById(i)
    if (pokemon){
      setPokemon((prevState) => [...prevState, pokemon])
    }
    }
  }

  useEffect(() => {
    getPokemonList()
  }, [])

  return (
    <PokemonContext.Provider value={{ pokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon(){
  const context = useContext(PokemonContext)

  if(!context){
    throw new Error('usePokemon deve ser ultilizado com PokemonProvider')
  }

  return context
}



