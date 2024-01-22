import './tolerance.scss'
import { useState } from 'react';
import { Slider } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from '../axios';

console.log(import.meta.env.VITE_APT_URL)

const Tolerance = () => {

    const [value, setValue] = useState(0);

    //handle change on click
    const handleChange = async (e, value) => {
        setValue(value)
    }

    //makes an API call to the server
    const { data, isLoading, isError } = useQuery({
        queryKey: ['risks', value],
        queryFn: () => axios.get(`risk/${value}`)
    },)


    //returns JSX based on the return value of `useQuery'
    const getState = () => {

        if (isLoading) {
            return (
                <div className='query-state'>
                    <div>
                        <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705874379/oie_212255453xKxXXyC_ln8p1l.gif" alt="" />
                    </div>
                </div>
            )
        }

        if (isError) {
            return (
                <div className='query-state'>
                    <p>
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        Something went wrong
                    </p>
                </div>
            )
        }

        return (
            <div>
                {data? data.data.stocks.filter((stock) => stock.percentage !== 0).map((stock) => (
                    <div className='bars'>
                        <div><p>{stock.name}</p></div>
                        <div style={{width:`${stock.percentage + 10}%`}}>{stock.percentage}%</div>
                    </div>
                )) : ''}
            </div>
        )
    }


    return ( 
        <section className="tolerance">
            <div>
                <div className='tolerance-content'>
                    <h2>Empower Your Financial Future</h2>
                    <p>Select a risk tolerance and we'll visulize the porfolio for you</p>
                </div>

                <div className='tolerance-range'>
                    <div className="slider-wrapper">
                        <Slider
                        key={`slider-${value}`}
                        value={value}
                        onChange={handleChange}
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        min={0}
                        max={10}
                        />
                    </div>

                    <div>
                       {getState()}
                    </div>
                </div>
            </div>  
        </section>
     );
}

export default Tolerance;