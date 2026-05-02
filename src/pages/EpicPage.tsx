import { useEpic } from "../hooks/useEpic"
import '../styles/epicPage.css'

export default function EpicPage() {

    const {epic, isLoading, error} = useEpic()

    return(
        <main className="epic-page">
            <header className="epic-page__hero">
                <h2>EPIC (Earth Polychromatic Imaging Camera)</h2>
                <p>Observa la Tierra tal y como la ve el satélite DSCOVR desde el punto de Lagrange L1, a más de un millón de kilómetros de distancia. Imágenes reales del planeta completo capturadas cada día.</p>
            </header>
            <div className="epic-page__grid">
                {error ? "Ha ocurrido un error" : ""}
                {
                    isLoading 
                    ? "Cargando..."
                    : <div className="epic-page__grid-item">
                        {epic?.map((photo) => {
                            const [year, month, day] = photo.date.split(' ')[0].split('-')
                            const imgUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${photo.image}.png`
                            return <div key={photo.identifier} className="epic-page__grid-item-container">
                                <img className="epic-page__grid-item-img" src={imgUrl} />
                                <span>{photo.date}</span>
                            </div>
                        })}
                    </div>    
                }    
            </div>
        </main>
        
    )
}