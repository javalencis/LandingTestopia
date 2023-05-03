import './SectionInformacion.scss'
import VideoDesktop from '../../assets/videos/video-desktop.mp4'
export const SectionInformacion = () => {
  return (
    <section className="SectionInformacion">
      <video src={VideoDesktop} controls={false} autoPlay loop muted />
      <div className="Informacion">
        <h2>
          Generating <br /> meaningful tests <br /> for busy devs
        </h2>
        <p>
          With TestopIA, you get non-trivial tests (and trivial, too!) <br /> suggested right inside your IDE, so you can code smart,<br /> create more value, and stay confident when you push.<br />
          Code, as you meant it.
        </p>
        <button>
          Subscribe
        </button>
      </div>
      <div className="Animacion">

      </div>
    </section>
  )
}
