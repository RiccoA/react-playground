export interface IYugiohRepository {
  get: () => { name: string}
}

export interface YugiohRepositoryConsumer {
  yugiohRepository: IYugiohRepository 
}

export const YugiohRepositoryCreator = () : IYugiohRepository => {

  function get() {
    return { name: "Blue Eyes White Dragon" }
  }

  return {
    get
  }
}