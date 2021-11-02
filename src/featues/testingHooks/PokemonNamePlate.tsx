import { usePokemonNamePlate } from "./pokeNamePlate.hook"

export const PokemonNamePlate = () => {
  const { isLoading, name, favoriteBerries } = usePokemonNamePlate()
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div>{name}</div>
      <div>{favoriteBerries}</div>
    </div>
  )
}
