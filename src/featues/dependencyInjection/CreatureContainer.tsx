import { DigimonBox } from "./digimonBox"
import { MultiCreatureBox } from "./multiCreatureBox"
import { PokemonBox } from "./pokemonBox"
import { withAllData } from "./WithData"

export default function CreatureContainer() {
  const DigimonBoxEnhancedTwo = withAllData(DigimonBox)
  const PokemonBoxEnhancedTwo = withAllData(PokemonBox)
  const MutltiCreatureEnchancedTwo = withAllData(MultiCreatureBox)
  return (
    <>
      <DigimonBoxEnhancedTwo />
      <PokemonBoxEnhancedTwo />
      <MutltiCreatureEnchancedTwo />
    </>
  )
}
