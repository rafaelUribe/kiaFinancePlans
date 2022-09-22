import React, { useEffect, useState } from 'react'

const BrandSelector = ({products, brand, setBrand, setVersion, setCar}) => {

  return (
    <div className='flex-column'>
        <h3>{ brand.id ? "Marca seleccionada" : "Selecciona marca"}</h3>
        <div className='flex-column'>
            {
                !brand.id && products.map( item => 
                    <button
                        key={item.id}
                        className="font-white mt-2 min-300"
                        onClick={e => setBrand(item)}
                    >   
                        {item.brand.toUpperCase()}
                    </button>    
                )
            }
            {
                brand.id &&
                <button
                    className="font-white mt-05 min-300 selected-button"
                    onClick={e => {
                                setBrand({})
                                setVersion({})
                                setCar({})
                            }}
                >
                    {brand.brand.toUpperCase()}
                </button>
            }
        </div>
    </div>
  )
}

export default BrandSelector