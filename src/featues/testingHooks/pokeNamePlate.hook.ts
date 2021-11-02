import { useEffect } from "react"
import { useFetchPokemon } from "./fetchPokemon.hook"

export const usePokemonNamePlate = () => {
  const {isLoading, name, api } = useFetchPokemon()

  const favoriteBerries = "Lon Berries"

  useEffect(() => {
    api.get()
  }, [])

  return {isLoading, name, favoriteBerries}
}