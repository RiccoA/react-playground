import { createContext, useContext } from "react"
import { DigimonRepositoryCreator } from "./digimonRepository"
import { PokemonRepositoryCreator } from "./pokemonRepository"
import { YugiohRepositoryCreator } from "./yugiohRepository"

interface RepositoryContextProps {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}

const DataContext = createContext({})

export const RepositoryContainerContext = ({
  children,
}: RepositoryContextProps) => {
  const digimonRepository = DigimonRepositoryCreator()
  const pokemonRepository = PokemonRepositoryCreator()
  const yugiohRepository = YugiohRepositoryCreator()
  const container = { digimonRepository, pokemonRepository, yugiohRepository }
  return (
    <DataContext.Provider value={container}>{children}</DataContext.Provider>
  )
}

export const UseRepositoryContainer = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("Must be called from my context")
  }

  return context
}
