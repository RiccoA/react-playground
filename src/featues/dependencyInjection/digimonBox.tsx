import { DigimonRepositoryConsumer } from "./digimonRepository"

export interface DigimonBoxProps extends DigimonRepositoryConsumer {}

export function DigimonBox({ digimonRepository }: DigimonBoxProps) {
  const data = digimonRepository.get()

  return <>{data.name}</>
}
