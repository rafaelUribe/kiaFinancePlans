import React, { useEffect, useState } from 'react'

const CarSelector = ({car, setCar, brand, setVersion}) => {


  return (
    <div className='mt-2 flex-column'>
        <h3>{car.name ? "Auto seleccionado" : "Selecciona auto"}</h3>
        <div className='flex-column'>
            {
                !car.name && brand.cars.map( car => 
                    <button
                        key={car.name}
                        className="white-font mt-2 min-300"
                        onClick={e => setCar(car)}
                    >
                        {car.name.toUpperCase()}
                    </button>
                )
            }
            {
                car.name &&
                <button
                    onClick={   e => {
                                    setCar({})
                                    setVersion({})
                                }
                            } 
                    className="white-font mt-05 min-300 selected-button"
                >
                    {car.name.toUpperCase()}
                </button>
            }
        </div>
    </div>
  )
}

export default CarSelector