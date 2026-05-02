export interface EpicResponse{
    identifier: number
    caption: string
    image: string
    date: string
    coords: {
        centroid_coordinates: {
            lat: number
            lon: number
        }
    }
}