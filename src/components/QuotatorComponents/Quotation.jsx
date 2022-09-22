import React, { useEffect, useState } from 'react'
import DownPaymentSelector from './DownPaymentSelector';
import Payments from './Payments';
import PeriodsSelector from './PeriodsSelector';

const Quotation = ({version, setVersion, model}) => {

    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);

    const [periods, setPeriods] = useState(60);
    const [downPayment, setDownPayment] = useState('');

  return (
    <div className='flex-column'>
        <button
            className='selected-button font-white min-300'
            onClick={e => {
                setVersion({})
            }}
        >
            Cotizar otro auto
        </button>
        <section className='flex-column'>
            <h4 className='mt-1'>{model}</h4>
            <h2>{numberFormat.format(version.price)}</h2>
        </section>
        <DownPaymentSelector
            price={version.price}
            downPayment={downPayment}
            setDownPayment={setDownPayment}
        />
        {/* <PeriodsSelector
            periods={periods}
            setPeriods={setPeriods}
        /> */}
        {
            downPayment &&
            <Payments
            price={version.price}
            downPayment={downPayment}
            />
        }   
    </div>
  )
}

export default Quotation