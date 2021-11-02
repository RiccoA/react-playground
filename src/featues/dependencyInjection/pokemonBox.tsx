import { PokemonRepositoryConsumer } from "./pokemonRepository"

export interface PokemonBoxProps extends PokemonRepositoryConsumer {}

export function PokemonBox({ pokemonRepository }: PokemonBoxProps) {
  const data = pokemonRepository.get()

  return <>{data.name}</>
}
