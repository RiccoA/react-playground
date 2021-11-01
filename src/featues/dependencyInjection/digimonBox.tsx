import { IDigimonRepository } from "./digimonRepository"

export interface DigimonBoxProps {
  digimonRepository: IDigimonRepository
}

export function DigimonBox({ digimonRepository }: DigimonBoxProps) {
  const data = digimonRepository.get()

  return <>{data.name}</>
}
