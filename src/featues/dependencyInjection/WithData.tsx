import { ComponentType } from "react"
import { DigimonBoxProps } from "./digimonBox"
import { DigimonRepositoryCreator } from "./digimonRepository"

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
    // eslint-disable-next-line no-undef
    return function (props: Omit<T, keyof DigimonBoxProps>): JSX.Element {
      const digimonRepository = DigimonRepositoryCreator()
      const newProps = { ...props, digimonRepository } as T
      return <Component {...newProps} />
    }
  }
}
