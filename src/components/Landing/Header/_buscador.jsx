import React from 'react'

const Buscador = () => {
  return (
    <div className='buscador w-100 d-flex centerX certerY fondoSalmon'>
      <div className="fa fa-location-dot cuadrado"></div>
      <input className='w-100' type="text" placeholder='Buscar...' />
      <button className="fa fa-magnifying-glass cuadrado fondoSalmon"></button>
    </div>
  )
}

export default Buscador