import { createContext } from "react"
import "./App.css"
import CreatureContainer from "./featues/dependencyInjection/CreatureContainer"
import { DigimonRepositoryCreator } from "./featues/dependencyInjection/digimonRepository"
import { PokemonRepositoryCreator } from "./featues/dependencyInjection/pokemonRepository"

const digimonRepository = DigimonRepositoryCreator()
const pokemonRepository = PokemonRepositoryCreator()
const container = { digimonRepository, pokemonRepository }
export const DataContext = createContext(container)

function App() {
  return (
    <div className="App">
      {/* <DataFetching /> */}
      {/* <FormikPlay /> */}
      {/* <FormikComponentsPlay /> */}
      <DataContext.Provider value={container}>
        <CreatureContainer />
      </DataContext.Provider>
    </div>
  )
}

export default App
