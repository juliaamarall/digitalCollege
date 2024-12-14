import { Pokemon } from "@/@types/pokemon"

type PokemonCardProps = {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={pokemon.sprites.front_default || "/path/to/default-image.png"} // Imagem padrão
        alt={pokemon.types[0]?.type.name || "Pokemon"}
        className="w-24 h-24 mx-auto"
      />
      <h3 className="text-lg font-bold text-center mt-2 capitalize">
        {pokemon.types[0]?.type.name || "Unknown Type"}
      </h3>
      <div className="mt-4 flex justify-center gap-2">
        {pokemon.types.length > 0 ? (
          pokemon.types.map((type) => (
            <span
              key={type.slot}
              className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs capitalize"
            >
              {type.type.name}
            </span>
          ))
        ) : (
          <span className="bg-gray-500 text-white rounded-full px-2 py-1 text-xs capitalize">
            No Types Available
          </span>
        )}
      </div>
    </div>
  )
}
