import './SectionInformacion.scss'
import VideoDesktop from '../../assets/videos/video-desktop.mp4'
import VideoMobile from '../../assets/videos/video-mobile.mp4'
export const SectionInformacion = () => {
  return (
    <section className="SectionInformacion">
      <video className='video-desktop' src={VideoDesktop} controls={false} autoPlay loop muted />
      <video className='video-mobile' controls={false} autoPlay loop muted playsInline >
        <source src={VideoMobile} type='video/mp4'/>
      </video>
      <div className="Informacion">
        <h2>
          Generando <br /> pruebas de calidad <br /> para desarrolladores ocupados
        </h2>
        <p>
          Con Testopía, obtienes <strong>pruebas relevantes</strong>  <br /> sugeridas dentro de tu propio IDE, para codificar de manera inteligente, ser más eficaz, crear valor, y desplegar tranquilamente.<br />
          Código, como esperas que funcione.
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
