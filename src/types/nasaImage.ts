export interface NasaImageData{
    title: string
    description: string
    date_created: string
    nasa_id: string
}

export interface NasaImageLink{
    href: string
    rel: string
    render: string
}

export interface NasaImageItem{
    data: NasaImageData[]
    links:NasaImageLink[]
}

export interface NasaResponse{
    collection:{
        items: NasaImageItem[]
    }
}