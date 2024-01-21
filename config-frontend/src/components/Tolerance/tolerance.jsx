import './tolerance.scss'
import { useState } from 'react';
import { Slider } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from '../axios';

const Tolerance = () => {

    const [value, setValue] = useState(0);

    const handleChange = async (e, value) => {
        setValue(value)
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['risks', value],
        queryFn: () => axios.get(`risk/${value}`)
    },)

    if (isLoading) {
        return <div>Loading..</div>
    }

    if (isError) {
        return <pre>Error</pre>
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
                       <div>
                        {data.data.stocks.filter((stock) => stock.percentage !== 0).map((stock) => (
                            <div className='bars'>
                                <div><p>{stock.name}</p></div>
                                <div style={{width:`${stock.percentage + 10}%`}}>{stock.percentage}%</div>
                            </div>
                        ))}
                       </div>
                    </div>
                </div>
            </div>  
        </section>
     );
}

export default Tolerance;