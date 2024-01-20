import './index.scss'
import { brands } from '../utils';

const Index = () => {
    return (
      <section>
        <div className="index">
            <div>
                <h1>An easy to save and invest</h1>
                <p>Make your money a multitasker with Betterment. Invest with
                    automated technology in low-cost, expert-built portfolios.
                    Save with a high-yield cash account, <strong>earning 4.75% APY* </strong>
                    (variable) with up to $2 million<sup>†</sup>  in FDIC insurance at our program banks.
                </p>
                <button>Get started</button>
            </div>
            <div className='image-wrapper'>
                <div>
                    <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705719788/undraw_investor_update_re_qnuu_pkufwo.svg" alt="" />
                </div>
            </div>
        </div>

        <div>

        </div>
      </section>
     );
}

export default Index;