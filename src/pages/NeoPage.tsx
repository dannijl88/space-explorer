import { useNeo } from "../hooks/useNeo"
import '../styles/neoPage.css'
import dangerIcon from '../assets/svg/danger-warning-sign-alert-be-careful-svgrepo-com.svg'

export default function NeoPage() {

    const today = new Date().toISOString().split('T')[0]
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    const {neoData, isLoading, error} = useNeo(today, weekAgo)

    const asteroids = neoData ? Object.values(neoData.near_earth_objects).flat() : []

    return(
        <div className="neo-page">
            <header className="neo-page__hero">
                <h2 className="neo-page__hero-title">NEO (Near Earth Objects)</h2>
                <p className="neo-page__hero-description">Rastrea los asteroides y cometas que orbitan cerca de la Tierra. Datos en tiempo real proporcionados por el Centro de Estudios de Objetos Cercanos a la Tierra de la NASA</p>
            </header>
            <main className="neo-page__cards-container">
                {
                    asteroids.map((asteroid) => {
                        return <article className={asteroid.is_potentially_hazardous_asteroid ? "neo-page__cards-container-card-danger" : "neo-page__cards-container-card"} key={asteroid.id}>
                            {asteroid.is_potentially_hazardous_asteroid ? <img width={24} height={24} src={dangerIcon} /> : ""}
                            <p>Nombre: {asteroid.name}</p>
                            <p>Diametro mínimo: {parseFloat(asteroid.estimated_diameter.kilometers.estimated_diameter_min).toFixed(2)} km</p>
                            <p>Diametro máximo:{parseFloat(asteroid.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)} km</p>
                            <p>Velocidad: {parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h</p>
                            <p>Distancia: {parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(2)} km</p>
                            <p>Peligroso: {asteroid.is_potentially_hazardous_asteroid ? "Si" : "No"}</p>
                        </article>
                    })
                }
            </main>
        </div>
    )
}