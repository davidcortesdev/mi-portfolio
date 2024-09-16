import imagen1 from '../assets/imagen-cabecera.svg'

export const PrimeraSeccion = () => {

  return (
    <>
    <section className="seccion-cabecera">
        <div className="cabecera-izq">
            <h1>David Cortés</h1>
            <p>Desarrollador Frontend</p>
        </div>
        <div className="cabecera-der">
            <img className="imagen-perfil" src={imagen1} alt="Imagen" />
        </div>
    </section>
    </>
  )
}
