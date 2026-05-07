import '../styles/footer.css'
export function Footer() {
    return(
        <footer className="footer">
            <h3 className='footer__title'>Datos proporcionados por NASA Open APIs</h3>
            <p className='footer__text'>Daniel Juan Lician</p>
            <p className='footer__text'>Github: <a className='footer__link' href={'https://github.com/dannijl88'} target='_blank'>https://github.com/dannijl88</a></p>
            <p className='footer__text'>Linkedin: <a className='footer__link' href={'https://www.linkedin.com/in/danieljuanlician'} target='_blank'>www.linkedin.com/in/danieljuanlician</a></p>
        </footer>
    )
}