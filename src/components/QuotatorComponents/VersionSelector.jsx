import React from 'react'

const VersionSelector = ({car, version, setVersion, brand}) => {

    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);

  return (
    <div className='mt-2 flex-column'>
        <h3>Selecciona Versión</h3>
        <div className='flex-column'>
            {
                !version.name && brand.id && car.versions.map( version => (
                    <button
                        key={version.name}
                        className="font-white mt-2 min-300 font-1 flex-row"
                        onClick={e => setVersion(version)}
                    >
                        <span>
                            {version.name.toUpperCase()}
                        </span>
                        <span>
                            {numberFormat.format(version.price)}
                        </span>
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default VersionSelector