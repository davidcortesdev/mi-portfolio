import img1 from './../assets/linkedin.png'
import img2 from './../assets/github.png'

export const Footer = () => {
  return (
    <section className="pie-pagina contenedor">
      <div className="imagenes-footer">
        <a href="https://www.linkedin.com/in/david-cortes-lajara" target="_blank">
          <img src={img1} alt="imagen linkedin" />
        </a>
        <a href="https://github.com/davidcortesdev" target="_blank">
        <img src={img2} alt="imagen github" />
        </a>
      </div>
    </section>
  )
}
