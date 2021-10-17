import { useEffect, useState } from "react"

interface AnimeChanResponse {
  anime: string
  character: string
  quote: string
}

export interface IDataFetchingProps {}

export function DataFetching() {
  // on load call an api

  const initState: AnimeChanResponse = { anime: "", character: "", quote: "" }
  const [animeQuote, setAnimeQuote] = useState<AnimeChanResponse>(initState)

  // function isAnimeQuote(obj: any) {
  //   return typeof obj.anime  === "string" && typeof obj.character === "string" && typeof obj.quote === "string"
  // }

  useEffect(() => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<AnimeChanResponse>
      })
      .then((data) => setAnimeQuote(data))
  }, [])

  return (
    <div>
      <div>Random Anime Quote</div>
      <div>
        `&quot;`{animeQuote.quote}`&quot;`
        <br />- {animeQuote.character} from {animeQuote.anime}
      </div>
    </div>
  )
}
