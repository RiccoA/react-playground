import { IDigimonRepository } from "./digimonRepository"
import { IPokemonRepository } from "./pokemonRepository"

export interface MultiCreatureBoxProps {
  pokemonRepository: IPokemonRepository
  digimonRepository: IDigimonRepository
}

export function MultiCreatureBox({
  pokemonRepository,
  digimonRepository,
}: MultiCreatureBoxProps) {
  const data = pokemonRepository.get()
  const data2 = digimonRepository.get()

  return (
    <>
      {data.name}/{data2.name}
    </>
  )
}
