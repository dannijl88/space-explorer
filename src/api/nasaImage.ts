import type { NasaResponse } from "../types/nasaImage"

export const fetchNasaImages = async (query: string): Promise<NasaResponse> => {

    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image&page_size=20`)
    const data = await response.json()

    return data
}