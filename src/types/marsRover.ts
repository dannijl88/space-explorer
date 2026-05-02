export interface MarsRoverPhoto{
    id: number
    img_src: string
    earth_date: string
    rover: {
        name: string
    }
    camera: {
        name: string
        full_name: string
    }
}

export interface MarsPhotos{
    photos: MarsRoverPhoto[]
}