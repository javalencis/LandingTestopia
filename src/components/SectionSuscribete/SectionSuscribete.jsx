import videoFooter from "../../assets/videos/Footer.mp4"
import './SectionSuscribete.scss'
export const SectionSuscribete = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className="SectionSuscribete">
            <video autoPlay loop playsInline muted controls={false}>
                <source src={videoFooter} type="video/mp4" />
            </video>
            <div className="containerSuscribete">
                <h2>Suscribete para la prueba gratuita</h2>
                <p>
                    Al suscribirte obtienes la prueba de nuestro software y la posibilidad de obtener descuentos exclusivos para la version premium.
                </p>
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="">
                        <span>Email: </span>
                        <input type="email" />
                    </label>
                    <button type="submit">Suscribete</button>
                </form>
            </div>
        </section>
    )
}
