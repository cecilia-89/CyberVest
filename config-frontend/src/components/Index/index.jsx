import './index.scss'
import { brands } from '../utils';

const Index = () => {
    return (
    <section className='index'>
        <div>
            <div>
                <h1>An easy to save and invest</h1>
                <p>Make your money a multitasker with Betterment. Invest with
                    automated technology in low-cost, expert-built portfolios.
                    Save with a high-yield cash account, <strong>earning 4.75% APY* </strong>
                    (variable) with up to $2 million<sup>†</sup>  in FDIC insurance at our program banks.
                </p>
                <button data-button-large>Get started</button>
            </div>

            <div className='image-wrapper'>
                <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705715286/image_1_maught.svg" alt="" />
                <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705746860/homepage-hero_desktop_sun_ny5jlc.svg" alt="" />
            </div>
         </div>

         <div className='bottom-image'>
            <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705745384/landscape-day-bottom-image_desktop_ueomvk.svg" alt=""/>
        </div>
    </section>
     );
}

export default Index;