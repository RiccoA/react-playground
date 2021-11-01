export interface IDigimonRepository {
    get: () => { name: string}
}

export const DigimonRepositoryCreator  = () : IDigimonRepository => {
  function get() {
    return { name: "Agumon" }
  }

  return {
    get
  }
}