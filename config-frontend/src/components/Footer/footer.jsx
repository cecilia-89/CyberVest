import './footer.scss';
import { footerInfo } from '../utils'


const Footer = () => {

    return ( 
        <footer className="main-footer">
            <div>
                <div className='footer'>
                    {footerInfo.map((info) => (
                        <div>
                            <h1>{info.title}</h1>
                            <ul>
                                {info.options.map(option => (
                                    <a href="">
                                        <li>{option}</li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div class> NENE'S DELICACY &#169; 2022, ALL RIGHTS RESERVED</div>
            </div>
        </footer>
     );
}

export default Footer;