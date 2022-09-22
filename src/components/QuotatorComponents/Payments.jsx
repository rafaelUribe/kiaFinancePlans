import React, { useEffect, useState } from 'react'
import getMonthlyPayment from '../../utils/getMonthlyPayment'

const Payments = ({downPayment, price}) => {

    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);

    const [periods, setPeriods] = useState([12, 24, 36, 48, 60, 72]);
    const [gap, setGap] = useState(11000);

    const [above20, setAbove20] = useState({
        12: 15.54,
        24: 15.54,
        36: 15.54,
        48: 15.54,
        60: 15.54,
        72: 17.79,
    });

    const [tax, setTax] = useState(.16);

    const [above30, setAbove30] = useState({
        12: 2.96,
        24: 8.84,
        36: 10.90,
        48: 11.95,
        60: 12.58,
        72: 15.04,
    })

    const getRate = periods => {
        const dp_perc = downPayment / price
        if(dp_perc < .3){
            return above20[periods]
        } else {
            return above30[periods]
        }
    }

  return (
        <div className='flex-column mt-1'>
            {
                periods.map( event => 
                    <div 
                        className='flex-column mt-01 cancel-button min-300 padding-1 br-1'
                        key={event}
                    >
                        <div className='flex-row'>
                            <p>A <span className='font-1-6'>{event}</span> meses tasa del <span className='font-1-6'>{getRate(event)}%</span></p>
                        </div>
                        <div className='flex-column'>
                            <p className=''>
                                Pagos de aproximadamente: 
                            </p>
                            <p className='font-1-6'>
                                {
                                    numberFormat.format(getMonthlyPayment(price, downPayment, event, getRate(event)/100, tax, gap))
                                }
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Payments