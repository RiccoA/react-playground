import { render } from "@testing-library/react"
import { PokemonNamePlate } from "./PokemonNamePlate"
// import { usePokemonNamePlate } from "./pokeNamePlate.hook"

// const mockMyHook = jest.fn()

jest.mock("./pokeNamePlate.hook", () => ({
  usePokemonNamePlate: () => ({
    isLoading: false,
    name: "pikachu",
    favoriteBerries: "Loom",
  }),
}))

// const mockUseFetchPokemon = jest.fn()
// jest.mock("./pokeNamePlate.hook", () => {
//   return jest.fn(() => ({
//     usePokemonNamePlate: () => {
//       return { isLoading: false, name: "pikachu", favoriteBerries: "Loom" }
//     },
//   }))
// })

it("Can show name", () => {
  // usePokemonNamePlate.mockReturnValues(() => ({
  //   isLoading: true,
  //   name: "Pikachu",
  //   favoriteBerries: "Loom",
  // }))
  const { container } = render(<PokemonNamePlate />)
  expect(container).toHaveTextContent("pikachu")
  expect(container).toHaveTextContent("Loom")
})
