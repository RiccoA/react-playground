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
// https://www.typescriptlang.org/play?strictFunctionTypes=false&jsx=1&ssl=14&ssc=1&pln=2&pc=1#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wG4AoczAVwDsNgJa4B3YGACwElaArJDEgAmABRxgAzgB4AqnCQAPGElpCJiAdCFSJMKMFoBzADRw6Aa1oQWtAHy24ACgP9Bo8RIBccGQEo4AN7kcHBEMNRQzDT0MIzMUgAq8koqaj62jsEhcADCuJC0KjDeyOgwAHR54ExFCQCeYEiJtln+QdmhSOGRcNEMTE5gHt4A8iDsiabmSHUQmOn+3gBSAMoAGuUAogA2SCBFgVkdAPTHAIJwMA1IcGgQSFBocXDA6oVoaEgSEihQdXAAIwEKGoEhu9UaKzQ+jA8CE9wktAA5PBLNZLhwUPBODcxhMEqZ8NZClB8A4ANSBYkPbzlOkAXzgAF44Akjtk7rRdHBCiwxBBJMzAnA6eUhgKJKZRS4BMp3BK4IyUOoEhQOiEwhF4lUCgcAqLefzJIzjrY1dl6ebLeR6ZQro1clijeoWe04NtgAA3L7eWjUEBAqDm6lQby6fRGCjWvqxAY5LGOALur1fUwhxXeeMwZ1tLKanqZDpSIRelrqwL4Ai28sAWSQ1m8AQ93ok9NMIxsNKpnag1eyUmOJc9ZbgvijduucBE2xQhWzHiFbtoKH2Yb0BkMpDgNsoMee09nXUTy-2jO8B7nOcOGq6Wqc7OLpbgjSgEiYbxXN1egRPSHpA6HEcx23W1yE5bkO0KIQsyFNhOB4Vw5WdRMQ28fAAQgAF8HpXxHCzYDKCkGDmy+JkAgATkZEMmXwCQWDqBRK1NLdTgxb8JA4CBqG2IRARuTADCQcgpEg4RiJTCQyMouBqNo+jGLgZjFOONj1A4rieLgTFvTgFBLmuTYoBwKBhNE6CsWTFspJNM1lNUuB1O43igV6QTKHA+AzIvLpYPYbg+FlYRkICVCCAwrCcMcbyYGA1jNgURo3HkIzoDgABaXTtk4LjDA4Ux2CRN4IHgMBfliNBuN+bZ-iIFAhBQAFdnKbcgA
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

// pass in a container that holds all of the repositories
// spread them out to withInjected props
