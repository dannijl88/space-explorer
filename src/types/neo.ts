export interface NeoResponse{
    id: number
    name: string
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: number
            estimated_diameter_max: number
        }
        
    }
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: CloseApproach[]
}

export interface CloseApproach {
    relative_velocity: {
        kilometers_per_hour: string
    }
    miss_distance: {
        kilometers: string
    }
}

export interface NeoApiResponse{
    near_earth_objects: {
        [date: string]: NeoResponse[]
    }
}