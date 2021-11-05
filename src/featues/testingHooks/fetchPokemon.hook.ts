import { useState } from "react"

export const useFetchPokemon = () => {
  const [isLoading, setIsLoading] = useState(false)

  const get = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsLoading(false)
    return "Raichu"
  }

  const api = { get }

  return {isLoading, api}
}