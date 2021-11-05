import { renderHook } from '@testing-library/react-hooks'
import { useFetchPokemon } from './fetchPokemon.hook'
import { usePokemonNamePlate } from "./pokeNamePlate.hook"
// jest.mock("./fetchPokemon.hook")


// need to mock date layer
const useFetchPokemonMock = useFetchPokemon as jest.MockedFunction<typeof useFetchPokemon>

it("Hook should render name", async () => {

  // useFetchPokemonMock.mockReturnValue({
  //   isLoading: false,
  //   api: { get: jest.fn(() => "Raichu")}
  // })

  const { result, waitForValueToChange } = renderHook(() => usePokemonNamePlate())

  await waitForValueToChange(() => result.current.name) 
  expect(result.current.name).toBe("Raichu")
})