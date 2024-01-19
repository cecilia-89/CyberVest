import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './navbar.scss';

const Navigation = () => {

    return (
            <>
                <nav>
                    <div>
                        <div data-nav-dropdown>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi sit ipsum enim odio distinctio cum laudantium, exercitationem ipsam saepe.</div>
                        <a href='#'>Investing</a>
                        <ion-icon name="chevron-down-sharp"></ion-icon>
                    </div>

                    <div>
                        <div data-nav-dropdown>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi sit ipsum enim odio distinctio cum laudantium, exercitationem ipsam saepe.</div>
                        <a href='#'>Cash</a>
                        <ion-icon name="chevron-down-sharp"></ion-icon>
                    </div>

                    <div>
                        <div data-nav-dropdown>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi sit ipsum enim odio distinctio cum laudantium, exercitationem ipsam saepe.</div>
                        <a href='#'>Planning</a>
                        <ion-icon name="chevron-down-sharp"></ion-icon>
                    </div>

                    <div onClick={() => console.log('open')}>
                        <div data-nav-dropdown>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi sit ipsum enim odio distinctio cum laudantium, exercitationem ipsam saepe.</div>
                        <a href='#'>Bonds</a>
                        <ion-icon name="chevron-down-sharp"></ion-icon>
                    </div>

                    <div>
                        <div data-nav-dropdown>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi sit ipsum enim odio distinctio cum laudantium, exercitationem ipsam saepe.</div>
                        <a href='#'>Stocks</a>
                        <ion-icon name="chevron-down-sharp"></ion-icon>
                    </div> 
                </nav> 

                <div className='button'>
                    <div>
                        <button data-register>Log in</button>
                    </div>

                    <div>
                        <button>Get started</button>
                    </div>
                </div>
            </>
        )
    }


const Navbar = () => {

    const [state, setState] = useState(false)
    const isMobile = useMediaQuery({query: '(max-width: 960px)'})

    useEffect(() => {
    document.addEventListener(('click'), (e) => {
         
        const prevSibling = e.target.previousSibling
        if (prevSibling && prevSibling.hasAttribute('data-nav-dropdown')) {
            prevSibling.classList.toggle('active')
        }
    
    }, [])
})



    return ( 
        <header>       
            <div>
                <div className='logo'> 
                    <div data-cybervest-logo>
                        <svg>
                            <path d="M45.2571 60.232L81.2004 73.0857C87.0869 65.5936 90.5143 56.0542 90.5143 45.4144C90.5143 20.071 71.061 0.957146 45.2571 0.957146C19.4533 0.957146 0 20.071 0 45.4144C0 56.0542 3.43189 65.5805 9.31831 73.0857L45.2571 60.232Z" fill="#FFC729"></path>
                        </svg>
                    </div>
                    <div>Cybervest</div>
                </div>
                <Navigation />
                <div className='menu-button'>
                    <div onClick={() => setState(!state)}>
                        <ion-icon name="menu-sharp"></ion-icon>
                    </div>
                </div>
            </div>

            {isMobile? 
                <div className={state? "menu": "hidden"}>
                    <div>
                        <Navigation/>
                    </div> 
                </div> :  ""
            }
        </header>
    );}


export default Navbar;