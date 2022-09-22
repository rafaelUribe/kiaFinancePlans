import React from 'react'

const PeriodsSelector = ({periods, setPeriods}) => {

    const periodsArray = [12, 24, 36, 48, 60, 72]

  return (
    <section className='flex-column mt-1'>
    <h3>Plazo</h3>
        <div
            className='flex-row'
        >
            {
                periods === "" &&
                periodsArray.map( num => 
                    <button
                        key={num}
                        className='m-1 font-white'
                        onClick={e => setPeriods(num)}
                    >
                        {num}
                    </button>    
                )
            }
            {
                periods &&
                <button
                    className='mt-1 selected-button font-white'
                    onClick={e => setPeriods("")}
                >
                    {periods}
                </button>
            }
        </div>
    </section>
  )
}

export default PeriodsSelector