import { useApod } from "../hooks/useApod"

export default function HomePage(){

    const {apod, isLoading, error} = useApod()

    return(
        <div>
            <p>{isLoading ? "Cargando..." : ""}</p>
            <p>{error ? error : ""}</p>
            <h1>{apod?.title}</h1>
        </div>
    )
}