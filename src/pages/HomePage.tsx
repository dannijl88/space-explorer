import { useApod } from "../hooks/useApod"
import '../styles/homePage.css'

export default function HomePage(){

    const {apod, isLoading, error} = useApod()
    console.log(apod)
    return(
        <div className="home-page">
            <p>{isLoading ? "Cargando..." : ""}</p>
            <p>{error ? error : ""}</p>
            <section className="home-page__hero">
                <h2 className="home-page__hero-title">Bienvenidos a SpaceExplorer</h2>
                <p className="home-page__hero-text">Explora el universo a través de los ojos de la NASA. Imágenes diarias, fotos del rover en Marte y datos de asteroides en tiempo real.</p>
            </section>
            <section className="home-page__apod">
                <h2 className="home-page__apod-title">APOD (Astronomy Picture of the Day)</h2>
                <p className="home-page__apod-description">Cada día la NASA selecciona una imagen o fotografía del universo como imagen del día. Puede ser una nebulosa, un planeta, una galaxia lejana o incluso una foto tomada desde la Tierra. Cada publicación viene acompañada de una explicación escrita por un astrónomo profesional que da contexto a lo que estás viendo</p>
                <div className="home-page__apod-container">
                    <h3 className="home-page__apod-container-title">{apod?.title}</h3>
                    {apod?.media_type === 'image'
                    ? <img className="home-page__apod-container-img" src={apod?.url} alt={apod?.title} />
                    : <iframe className="home-page__apod-container-img" src={apod?.url} title={apod?.title} allowFullScreen></iframe>}
                    <p className="home-page__apod-container-explanation">{apod?.explanation}</p>
                    <div>
                        <span>{apod?.date}</span>
                        <span>{apod?.copyright}</span>
                    </div>
                </div>
            </section>
        </div>
    )
}