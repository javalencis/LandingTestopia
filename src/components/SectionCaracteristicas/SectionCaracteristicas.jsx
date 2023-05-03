import imgCodeSmart from '../../assets/imgs/code-smart.png'
import imgCreateValue from '../../assets/imgs/create-value.svg'
import imgStayConf from '../../assets/imgs/stay-conf.png'
import './SectionCaracteristicas.scss'
export const SectionCaracteristicas = () => {
    return (
        <section className='SectionCaracteristicas'>
            <div>
                <div className='imgContainer'>

                    <img src={imgCodeSmart} alt="" />
                </div>
                <h3>Codigo inteligente</h3>
                <p>Obtenga una visión completa de cómo se comporta su código y de cómo los cambios que realiza afectan al resto de su código.</p>
            </div>
            <div>
                <div className='imgContainer'>

                    <img src={imgCreateValue} alt="" />
                </div>
                <h3>Efectividad</h3>
                <p>Dedique menos horas a escribir casos de prueba cuestionables y más tiempo en desarrollar funciones útiles para sus usuarios.</p>
            </div>
            <div>
                <div className='imgContainer'>

                    <img src={imgStayConf} alt="" />
                </div>
                <h3>Mantente confiado</h3>
                <p>Para codificar de manera inteligente, ser más eficaz, crear valor, y desplegar tranquilamente. Código, como esperas que funcione.</p>
            </div>
        </section>
    )
}
