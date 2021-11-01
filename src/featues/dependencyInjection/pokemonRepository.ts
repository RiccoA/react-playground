export interface IPokemonRepository {
  (): { 
    get: () => { name: string}
  } 
}

export const PokemonRepository : IPokemonRepository  = () => {

  function get() {
    return { name: "Agumon" }
  }

  return {
    get
  }
}