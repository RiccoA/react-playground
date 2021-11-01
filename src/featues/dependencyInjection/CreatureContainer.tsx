import { DigimonBox } from "./digimonBox"
import { WithData } from "./WithData"

export default function CreatureContainer() {
  // const digimonRepo = DigimonRepositoryCreator()
  const DigimonBoxEnhanced = WithData()(DigimonBox)
  // const DigimonBoxEnhanced = WithDataTwo(DigimonBox)
  return (
    <>
      <DigimonBoxEnhanced />
    </>
  )
}
