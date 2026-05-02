import { useEffect, useState } from "react"
import { fetchNeo } from "../api/neo"
import type { NeoApiResponse } from "../types/neo"

export const useNeo = (start_date: string, end_date: string) => {

    const [neoData, setNeoData] = useState<NeoApiResponse | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        setIsLoading(true)
        const neoFetch = async () => {
            try{
                const data = await fetchNeo(start_date, end_date)
                setNeoData(data)
            }catch(e){
                setError((e as Error).message)
            }finally{
                setIsLoading(false)
            }
        }
        neoFetch()
    }, [start_date, end_date])

    return {neoData, isLoading, error}

}