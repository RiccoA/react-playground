import { DigimonBox } from "./digimonBox"
import { PokemonBox } from "./pokemonBox"
import { withAllData } from "./WithData"

export default function CreatureContainer() {
  const DigimonBoxEnhancedTwo = withAllData(DigimonBox)
  const PokemonBoxEnhancedTwo = withAllData(PokemonBox)
  return (
    <>
      <DigimonBoxEnhancedTwo />
      <PokemonBoxEnhancedTwo />
    </>
  )
}
