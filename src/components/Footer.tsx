import '../styles/footer.css'
export function Footer() {
    return(
        <footer className="footer">
            <h3>Datos proporcionados por NASA Open APIs</h3>
            <p>Daniel Juan Lician</p>
            <p>Github: <a className='footer__link' href={'https://github.com/dannijl88'} target='_blank'>https://github.com/dannijl88</a></p>
            <p>Linkedin: <a className='footer__link' href={'https://www.linkedin.com/in/danieljuanlician'} target='_blank'>www.linkedin.com/in/danieljuanlician</a></p>
        </footer>
    )
}