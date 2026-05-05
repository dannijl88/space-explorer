import { useEffect, useState } from "react"
import { fetchNasaImages } from "../api/nasaImage"
import type { NasaResponse } from "../types/nasaImage"

export const useNasaImages = (query: string) => {

    const [nasaData, setNasaData] = useState<NasaResponse>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        setIsLoading(true)
        const fetchNasa = async (query: string) => {
            try{
                const data = await fetchNasaImages(query)
                setNasaData(data)
            }catch(e){
                setError((e as Error).message)
            }finally{
                setIsLoading(false)
            }
        }

        fetchNasa(query)
    }, [query])

    return {nasaData, isLoading, error}

}