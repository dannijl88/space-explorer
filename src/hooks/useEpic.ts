import { useEffect, useState } from "react"
import type { EpicResponse } from "../types/epic"
import { fetchEpic } from "../api/epic"

export const useEpic = () => {

    const [epic, setEpic] = useState<EpicResponse[]>()
    const [isLoading, setIsLoading] = useState<boolean>()
    const [error, setError] = useState<string>()

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try{
                const data = await fetchEpic()
                setEpic(data)
            }catch(e){
                setError((e as Error).message)
            }finally{
                setIsLoading(false)
            }
        }

        fetchData()

    }, [])

    return {epic, isLoading, error}
}