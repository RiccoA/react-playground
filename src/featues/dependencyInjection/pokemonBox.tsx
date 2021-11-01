import { IPokemonRepository } from "./pokemonRepository"

export interface PokemonBoxProps {
  pokemonRepository: IPokemonRepository
}

export function PokemonBox({ pokemonRepository }: PokemonBoxProps) {
  const data = pokemonRepository.get()

  return <>{data.name}</>
}
