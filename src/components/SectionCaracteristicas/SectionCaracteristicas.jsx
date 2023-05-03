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
                <p>Get full visibility of how your code behaves and how the changes you make affect the rest of your code.</p>
            </div>
            <div>
                <div className='imgContainer'>

                    <img src={imgCreateValue} alt="" />
                </div>
                <h3>Efectividad</h3>
                <p>Spend fewer hours writing questionable test cases and more time developing useful features for your users.</p>
            </div>
            <div>
                <div className='imgContainer'>

                    <img src={imgStayConf} alt="" />
                </div>
                <h3>Mantente confiado</h3>
                <p>Unlike code coverage quotas, meaningful tests actually check your code’s functionality. So you get the confidence needed to commit.</p>
            </div>
        </section>
    )
}
