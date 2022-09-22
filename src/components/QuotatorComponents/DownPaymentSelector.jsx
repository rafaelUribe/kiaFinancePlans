import React, { useEffect, useState } from 'react'

const DownPaymentSelector = ({price, downPayment, setDownPayment}) => {

    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);

    const [downPayments, setDownPayments] = useState([]);

    const getDownPayments = price => {
        let amounts = []
        for(let i = 20; i < 81; i++){
            const amount = price * (i /100)
            amounts.push(amount)
        }
        setDownPayments(amounts)
    }

    useEffect(() => {
        getDownPayments(price)
    }, []);

  return (
    <section className='mt-1 flex-column'>
        <h3>{downPayment? "Enganche seleccionado":"Selecciona enganche"}</h3>
        <div className='flex-column'>
            {
                !downPayment && 
                downPayments.map( amount => 
                    <button
                        className='mt-2 min-300 font-white'
                        onClick={e => setDownPayment(amount)}
                        key={amount}
                    >
                        {numberFormat.format(amount)}
                    </button>
                )
            }
            {
                downPayment &&
                <button
                    className='mt-1 min-300 selected-button font-white'
                    onClick={ e => setDownPayment("")}
                >
                    {numberFormat.format(downPayment)}
                </button>
            }
        </div>
    </section>
  )
}

export default DownPaymentSelector