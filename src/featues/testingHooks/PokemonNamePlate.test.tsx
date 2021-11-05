import { render } from "@testing-library/react"
import { PokemonNamePlate } from "./PokemonNamePlate"
import { usePokemonNamePlate } from "./pokeNamePlate.hook"

jest.mock("./pokeNamePlate.hook")

const usePokemonNamePlateMock = usePokemonNamePlate as jest.MockedFunction<
  typeof usePokemonNamePlate
>

// this test mocks a useEffects return values
it("Can show name", () => {
  usePokemonNamePlateMock.mockReturnValue({
    isLoading: true,
    name: "pikachu",
    favoriteBerries: "Loom",
  })
  const { container } = render(<PokemonNamePlate />)
  expect(container).toHaveTextContent("pikachu")
  expect(container).toHaveTextContent("Loom")
})
