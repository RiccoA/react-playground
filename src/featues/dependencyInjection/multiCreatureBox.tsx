import { DigimonRepositoryConsumer } from "./digimonRepository"
import { PokemonRepositoryConsumer } from "./pokemonRepository"
import { YugiohRepositoryConsumer } from "./yugiohRepository"

export interface MultiCreatureBoxProps
  extends PokemonRepositoryConsumer,
    DigimonRepositoryConsumer,
    YugiohRepositoryConsumer {
  extraStuff: string
}

export function MultiCreatureBox({
  pokemonRepository,
  digimonRepository,
  yugiohRepository,
  extraStuff,
}: MultiCreatureBoxProps) {
  const data = pokemonRepository.get()
  const data2 = digimonRepository.get()
  const data3 = yugiohRepository.get()

  return (
    <>
      {data.name}/{data2.name}/{data3.name}/{extraStuff}
    </>
  )
}
