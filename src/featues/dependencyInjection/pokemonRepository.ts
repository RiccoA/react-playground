export interface IPokemonRepository {
  get: () => { name: string}
}

export const PokemonRepositoryCreator = () :IPokemonRepository => {

  function get() {
    return { name: "pikachu" }
  }

  return {
    get
  }
}