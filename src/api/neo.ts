import type { NeoApiResponse } from "../types/neo";
import { NASA_BASE_URL, NASA_API_KEY } from "./config";

export const fetchNeo = async (start_date: string, end_date: string): Promise<NeoApiResponse> => {
    const response = await fetch(NASA_BASE_URL + "/neo/rest/v1/feed?start_date=" + start_date + "&end_date=" + end_date + "&api_key=" + NASA_API_KEY)
    const data = await response.json()

    return data
}