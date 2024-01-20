import './faq.scss'
import { FAQs } from '../utils'
import { useState } from 'react'
   

const Faq = () => {
    const [prevElement, setPrevElement] = useState()

    const handleClick = (e) => {
        const target = e.currentTarget.children[1]

        if (prevElement && prevElement !== target) {
            prevElement.classList.remove('visible')
        }

        target.classList.toggle('visible');
        setPrevElement(target)
    }
    

    return (
        <section>
            <div className="FAQs"> 
                <div>
                    <h1>Like to ask some questions?</h1>
                    <p>Take at look at some of our most frequently answered answers</p>
                </div>

                <div>
                    <ul>
                        {FAQs.map((faq) => (
                            <li key={faq.id} onClick={handleClick}>
                                <div>
                                    <h2>{faq.question}</h2>
                                    <div className='close-icon'>
                                        <ion-icon name="chevron-down-outline"></ion-icon>
                                    </div>
                                </div>

                                <div className='data-accordion'>
                                    <div>
                                        {faq.answers.map((answer) => (
                                            <p key={answer.id}>{answer}</p>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
     );
}

export default Faq;