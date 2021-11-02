import { useState } from "react"

export const useFetchPokemon = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")

  const get = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 3000));
    setName('Raichu')
    setIsLoading(false)
  }

  const api = { get }

  return {isLoading, name, api}
}