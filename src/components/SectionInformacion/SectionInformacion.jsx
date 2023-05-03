import './SectionInformacion.scss'
import VideoDesktop from '../../assets/videos/video-desktop.mp4'
export const SectionInformacion = () => {
  return (
    <section className="SectionInformacion">
      <video src={VideoDesktop} controls={false} autoPlay loop muted />
      <div className="Informacion">
        <h2>
          Generando <br /> pruebas de calidad <br /> para desarrolladores ocupados
        </h2>
        <p>
          Con Testopía, obtienes <strong>pruebas relevantes</strong>  <br /> sugeridas dentro de tu propio IDE, para codificar de manera intelingente, ser mas eficaz, crear valor, y desplegar tranquilamente.<br />
          Codigo, como esperas que funcione.
        </p>
        <button>
          Subscribete
        </button>
      </div>
      <div className="Animacion">

      </div>
    </section>
  )
}
