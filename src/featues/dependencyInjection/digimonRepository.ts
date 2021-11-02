export interface IDigimonRepository {
    get: () => { name: string}
}

export interface DigimonRepositoryConsumer {
  digimonRepository: IDigimonRepository
}

export const DigimonRepositoryCreator = () : IDigimonRepository => {
  function get() {
    return { name: "Agumon" }
  }

  return {
    get
  }
}