import { useState } from "react"
import { useMarsRover } from "../hooks/useMarsRover"
import '../styles/marsRoverPage.css'

export default function MarsRoverPage() {

    const [rover, setRover] = useState('curiosity')
    const [camera, setCamera] = useState('fhaz')
    const [date, setDate] = useState('2024-01-01')

    const { dataRover, error, isLoading } = useMarsRover(rover, camera, date)

    return(
        <div className="mars-rover-page">
            <section className="mars-rover-page__hero">
                <h2 className="mars-rover-page__hero-title">Mars Rover</h2>
                <p className="mars-rover-page__hero-description">Explora la superficie de Marte a través de las cámaras de los rovers de la NASA. Filtra por rover, cámara y fecha para descubrir miles de fotografías tomadas directamente desde el planeta rojo</p>
            </section>
            <main className="mars-rover-page__content">
                <section className="mars-rover-page__content-filter">
                    <span className="mars-rover-page__content-filter-span">Rover</span>
                    <select className="mars-rover-page__content-filter-select" onChange={(e) => setRover(e.target.value)} value={rover}>
                        <option value="curiosity">Curiosity</option>
                        <option value="opportunity">Opportunity</option>
                        <option value="spirit">Spirit</option>
                    </select>
                    <span className="mars-rover-page__content-filter-span">Cámara</span>
                    <select className="mars-rover-page__content-filter-select" onChange={(e) => setCamera(e.target.value)} value={camera}>
                        <option value="fhaz">Fhaz</option>
                        <option value="rhaz">Rhaz</option>
                        <option value="mast">Mast</option>
                    </select>
                    <span className="mars-rover-page__content-filter-span">Fecha</span>
                    <input className="mars-rover-page__content-filter-input" type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
                </section>
                <section className="mars-rover-page__content-grid">
                    {dataRover?.map((rover) => <img key={rover.id} src={rover.img_src}></img>)}
                </section>
            </main>
        </div>
    )
}