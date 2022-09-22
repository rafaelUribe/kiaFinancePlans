import React, { useState } from 'react'
import BrandSelector from './QuotatorComponents/BrandSelector'
import CarSelector from './QuotatorComponents/CarSelector'
import Quotation from './QuotatorComponents/Quotation';
import VersionSelector from './QuotatorComponents/VersionSelector';

const Quotator = ({products}) => {



    const [brand, setBrand] = useState({});
    const [car, setCar] = useState({});
    const [version, setVersion] = useState({});

  return (
    <section className='max-300 centered flex-column mt-1'>
        {
            !version.name &&
            <section>
                {
                    products.length > 0 && 
                    <BrandSelector 
                        brand={brand} 
                        setBrand={setBrand} 
                        products={products}
                        setVersion={setVersion}
                        setCar={setCar} 
                    />
                }
                {
                    brand.id && 
                    <CarSelector 
                        car={car} 
                        setCar={setCar} 
                        brand={brand}
                        setVersion={setVersion}
                    />
                }
                {
                    car?.versions?.length > 0 && 
                    <VersionSelector 
                        version={version}
                        setVersion={setVersion}
                        car={car}
                        brand={brand}
                    />
                }
            </section>
        }
        {
            version.price &&
                <Quotation
                    version={version}
                    setVersion={setVersion}
                    model={
                        brand.brand.toUpperCase() 
                        + 
                        " " 
                        +
                        car.name.toUpperCase()
                        +
                        " "
                        +
                        version.name.toUpperCase()
                    }
                />
        }
    </section>
  )
}

export default Quotator