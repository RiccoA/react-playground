import { useEffect, useState } from "react"
import { useFetchPokemon } from "./fetchPokemon.hook"

export const usePokemonNamePlate = () => {
  const [name, setName] = useState("")
  const {isLoading, api } = useFetchPokemon()

  const favoriteBerries = "Lon Berries"

  useEffect(() => {
    async function fetch() {
      const name = await api.get()
      setName(name)
    }
    fetch()
  }, [])

  return {isLoading, name, favoriteBerries}
}