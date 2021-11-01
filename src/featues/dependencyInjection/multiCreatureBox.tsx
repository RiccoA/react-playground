import { IDigimonRepository } from "./digimonRepository"
import { IPokemonRepository } from "./pokemonRepository"

export interface MultiCreatureBoxProps {
  pokemonRepository: IPokemonRepository
  digimonRepository: IDigimonRepository
  extraStuff: string
}

export function MultiCreatureBox({
  pokemonRepository,
  digimonRepository,
  extraStuff,
}: MultiCreatureBoxProps) {
  const data = pokemonRepository.get()
  const data2 = digimonRepository.get()

  return (
    <>
      {data.name}/{data2.name}/{extraStuff}
    </>
  )
}
