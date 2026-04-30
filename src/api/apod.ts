import type { ApodResponse } from "../types/apod";
import { NASA_API_KEY,NASA_BASE_URL } from "./config";

export const fetchApod = async (): Promise<ApodResponse> => {
    const response = await fetch(NASA_BASE_URL + "/planetary/apod?api_key=" + NASA_API_KEY + "&date=2024-01-01")
    const data = await response.json()
    return data
}