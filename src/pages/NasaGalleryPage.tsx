import { useState } from 'react'
import { useNasaImages } from '../hooks/useNasaImages'
import '../styles/nasaGalleryPage.css'

export default function NasaGalleryPage() {

    const [param, setParam] = useState<string>("")

    const {nasaData, isLoading, error} = useNasaImages(param)
    
    return(
        <div className="nasa-gallery-page">
            <section className="nasa-gallery-page__hero">
                <h2 className="nasa-gallery-page__hero-title">NASA Image Gallery</h2>
                <p className="nasa-gallery-page__hero-description">Explora el archivo visual de la NASA. Busca entre miles de imágenes históricas de misiones espaciales, galaxias, nebulosas, planetas y mucho más.</p>
            </section>
            <main className="nasa-gallery-page__content">
                { error ? "Ha ocurrido un error..." : ""}
                { isLoading ? "Cargando..." : ""}
                <input className='nasa-gallery-page__content-input' type="text" placeholder='Busca imágenes... galaxy, nebula, mars, apollo...' value={param} onChange={(e) => setParam(e.target.value)} />
                <section className='nasa-gallery-page__content-grid'>
                    {nasaData?.collection.items.map((item) => {
                        return <div className='nasa-gallery-page__content-grid-item'>
                            <img className='nasa-gallery-page__content-grid-item-img' src={item.links[0].href} />
                            <p className='nasa-gallery-page__content-grid-item-title'>{item.data[0].title}</p>
                            <p className='nasa-gallery-page__content-grid-item-description'>{item.data[0].description}</p>
                        </div>
                    })}
                </section>
            </main>
        </div>
    )
}