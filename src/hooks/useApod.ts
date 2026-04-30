import { useEffect, useState } from "react";
import type { ApodResponse } from "../types/apod";
import { fetchApod } from "../api/apod";

export function useApod() {
    const [apod, setApod] = useState<ApodResponse | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        setIsLoading(true)
        const fecthData = async () => {
            try{
                const data = await fetchApod()
                setApod(data)
            }catch(e){
                setError((e as Error).message)
            }finally{
                setIsLoading(false)
            }
        }
        fecthData()
    },[])

    return {apod,isLoading,error}
}