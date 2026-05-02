import { useEffect, useState } from "react"
import type { MarsRoverPhoto } from "../types/marsRover"
import { fetchMarsRover } from "../api/marsRover"

export const useMarsRover = (rover: string, camera: string, earth_date: string) => {

    const [dataRover, setDataRover] = useState<MarsRoverPhoto[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        setIsLoading(true)
        const fetchdata = async () => {
            try{
                const data = await fetchMarsRover(rover, camera, earth_date)
                setDataRover(data.photos)
            }catch(e){
                setError((e as Error).message)
            }finally{
                setIsLoading(false)
            }
        }

        fetchdata()
    },[rover, camera, earth_date])

    return {dataRover, isLoading, error}

}