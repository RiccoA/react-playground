import { DigimonBox } from "./digimonBox"
import { MultiCreatureBox } from "./multiCreatureBox"
import { PokemonBox } from "./pokemonBox"
import { InjectRepositories } from "./WithData"

export default function CreatureContainer() {
  const DigimonBoxEnhancedTwo = InjectRepositories(DigimonBox)
  const PokemonBoxEnhancedTwo = InjectRepositories(PokemonBox)
  const MutltiCreatureEnchancedTwo = InjectRepositories(MultiCreatureBox)
  return (
    <>
      <DigimonBoxEnhancedTwo />
      <br />
      <PokemonBoxEnhancedTwo />
      <br />
      <MutltiCreatureEnchancedTwo extraStuff="Hey" />
    </>
  )
}
