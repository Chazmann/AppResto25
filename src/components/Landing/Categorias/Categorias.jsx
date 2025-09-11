import React from 'react'
import './Categorias.css'
import ItemCategorias from './_itemCategorias'

const listaCategorias = [
  {nombre: 'Pizzas', icono: 'fa-bowl-food'},
  {nombre: 'Hamburguesas', icono: 'fa-hamburger'},
  {nombre: 'Bebidas', icono: 'fa-cocktail'},
  {nombre: 'Postres', icono: 'fa-ice-cream'},
  {nombre: 'Ensaladas', icono: 'fa-leaf'},
  {nombre: 'Sushi', icono: 'fa-fish'}]

const Categorias = () => {
  return (
    <div className='categorias'>
      {listaCategorias.map((item) => (
        <ItemCategorias key={item.nombre} nombre={item.nombre} icono={item.icono} />
      ))}
    </div>
  )
}

export default Categorias