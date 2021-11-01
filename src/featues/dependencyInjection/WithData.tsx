import { ComponentType } from "react"
import { DigimonBoxProps } from "./digimonBox"
import {
  DigimonRepositoryCreator,
  IDigimonRepository,
} from "./digimonRepository"
import {
  IPokemonRepository,
  PokemonRepositoryCreator,
} from "./pokemonRepository"

// interface IData {
//   digimonRepository: IDigimonRepository
// }

// WithDataTwo(DigimonBox)
export function WithDataTwo<T extends DigimonBoxProps>(
  WrappedComponent: ComponentType<T>
) {
  const digimonRepository = DigimonRepositoryCreator()

  const componentWithData = (props: Omit<T, keyof DigimonBoxProps>) => {
    const newProps = { ...props, digimonRepository } as T
    return <WrappedComponent {...newProps} />
  }
  return componentWithData
}

// WithData()(DigimonBox)
export function WithData() {
  return function <T extends DigimonBoxProps>(Component: ComponentType<T>) {
    return function (
      props: Omit<T, keyof DigimonBoxProps>
      // eslint-disable-next-line no-undef
    ): JSX.Element {
      const digimonRepository = DigimonRepositoryCreator()
      const newProps = { ...props, digimonRepository } as T
      return <Component {...newProps} />
    }
  }
}

export function withInjectedProps<U extends Record<string, unknown>>(
  injectedProps: U
) {
  return function <T extends U>(Component: ComponentType<T>) {
    // eslint-disable-next-line no-undef
    return function (props: Omit<T, keyof U>): JSX.Element {
      // A type coercion is neccessary because TypeScript doesn't know that the Omit<T, "owner"> + {owner: ...} = T
      const newProps = { ...props, ...injectedProps } as T
      return <Component {...newProps} />
    }
  }
}

type DataComponent = {
  pokemonRepository: IPokemonRepository
  digimonRepository: IDigimonRepository
}

export function withAllData(Component: ComponentType<DataComponent>) {
  const digimonRepository = DigimonRepositoryCreator()
  const pokemonRepository = PokemonRepositoryCreator()
  return withInjectedProps({ digimonRepository, pokemonRepository })(Component)
}
