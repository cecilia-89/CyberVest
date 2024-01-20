import './about.scss'

const About = () => {
    return ( 
        <section className="about">
            <div>
                <svg class="arch-circle_desktop" width="2000" height="186" viewBox="0 0 2000 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Arch illustration - desktop </title>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2000 157.654C1731.94 59.4275 1382.37 0 1000 0C617.634 0 268.057 59.4275 0 157.654V186H2000V157.654Z" fill="#ffffff"></path>
                </svg>
            </div>

            <div>
                <div>
                    <div>
                        <h2>A high-yield cash account helps your savings grow.</h2>
                        <p>
                            Elevate your wealth with Cybervest's strategic investment approach, optimizing
                            returns and minimizing risks through intelligent diversification. Tailored to
                            your goals and risk tolerance, it's your path to confident and sustainable financial
                            growth
                        </p>
                        <button>
                            Start saving
                        </button>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705771244/reshot-illustration-money-investment-growth-9E6KJQ2LPB-removebg-preview_ni6lsb.png" alt="" />
                    </div>
                </div>

                <div>
                    <div>
                        <h2>Diversifying intelligently and analyzing markets to enable financial growth</h2>
                        <p>
                            Maximizes returns while minimizing risks. Guides you confidently through the complexities of investing
                            With a focus on achieving your objectives, and rebalancing maintains an optimal portfolio, securing your path to lasting financial success.
                        </p>
                        <button>
                            Start investing
                        </button>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705771244/reshot-illustration-watering-money-plant-9SY36MAW5E-removebg-preview_x3wkcp.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}

export default About;