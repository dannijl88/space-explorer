import type { MarsPhotos } from "../types/marsRover"
import { NASA_BASE_URL, NASA_API_KEY } from "./config"

export const fetchMarsRover = async (rover: string, camera: string, earth_date: string): Promise<MarsPhotos> => {
    const response = await fetch(NASA_BASE_URL + "/mars-photos/api/v1/rovers/" + rover + "/photos?api_key=" + NASA_API_KEY + "&earth_date=" + earth_date + "&camera=" + camera)
    const data = await response.json()

    return data
}