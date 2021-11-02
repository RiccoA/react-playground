import "./App.css"
import CreatureContainer from "./featues/dependencyInjection/CreatureContainer"
import { RepositoryContainerContext } from "./featues/dependencyInjection/RepositoryContext"

function App() {
  return (
    <div className="App">
      {/* <DataFetching /> */}
      {/* <FormikPlay /> */}
      {/* <FormikComponentsPlay /> */}
      <RepositoryContainerContext>
        <CreatureContainer />
      </RepositoryContainerContext>
    </div>
  )
}

export default App
