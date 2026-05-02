import type { EpicResponse } from "../types/epic";
import { NASA_BASE_URL, NASA_API_KEY } from "./config";

export const fetchEpic = async (): Promise<EpicResponse[]> => {
    const response = await fetch(NASA_BASE_URL + "/EPIC/api/natural?api_key=" + NASA_API_KEY)
    const data = await response.json()
    return data
}