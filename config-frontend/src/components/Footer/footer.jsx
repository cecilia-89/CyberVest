import './footer.scss';
import { footerInfo } from '../utils'
 

const Footer = () => {

    return ( 
        <footer className="main-footer">
            <div>
                <div className='footer'>
                    {footerInfo.map((info) => (
                        <div key={info.id}>
                            <h1>{info.title}</h1>
                            <ul>
                                {info.options.map(option => (
                                    <a key={option.id} href="">
                                        <li>{option}</li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='lower-footer'>
                    <div>
                        <div className='social-links'>
                            <ul>
                                <li><ion-icon name="logo-facebook"></ion-icon></li>
                                <li><ion-icon name="logo-twitter"></ion-icon></li>
                                <li><ion-icon name="logo-snapchat"></ion-icon></li>
                                <li><ion-icon name="logo-linkedin"></ion-icon></li>
                            </ul>
                            <div className='app-download'>
                                <div>
                                    <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705630794/google-play-badge-wht-bdr_q1wwdp.svg" alt="" />
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705630816/app-store-badge_wht-bdr_tnmenb.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <ul>
                                <li>Contatct us</li>
                                <li>Cybervest 401(k)</li>
                                <li>Cybervest advisors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;