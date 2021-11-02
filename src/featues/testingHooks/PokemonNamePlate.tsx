import { usePokemonNamePlate } from "./pokeNamePlate.hook"

export const PokemonNamePlate = () => {
  const { isLoading, name, favoriteBerries } = usePokemonNamePlate()
  return (
    <PokemonNamePlateUI
      isLoading={isLoading}
      name={name}
      favoriteBerries={favoriteBerries}
    />
  )
}
interface UIProps {
  isLoading: boolean
  name: string
  favoriteBerries: string
}

export const PokemonNamePlateUI = ({
  isLoading,
  name,
  favoriteBerries,
}: UIProps) => {
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div>{name}</div>
      <div>{favoriteBerries}</div>
    </div>
  )
}
