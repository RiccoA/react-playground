export interface IPokemonRepository {
  get: () => { name: string}
}

export interface PokemonRepositoryConsumer {
  pokemonRepository: IPokemonRepository
}

export const PokemonRepositoryCreator = () :IPokemonRepository => {

  function get() {
    return { name: "pikachu" }
  }

  return {
    get
  }
}