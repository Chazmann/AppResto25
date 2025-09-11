import React from 'react'
import './Categorias.css'
import ItemCategorias from './_itemCategorias'

const listaCategorias = [
  {nombre: 'Pizzas', icono: 'fa-bowl-food'},
  {nombre: 'Hamburguesas', icono: 'fa-hamburger'}]

const Categorias = () => {
  return (
    <div className='categorias'>
       <ItemCategorias ></ItemCategorias> 
       </div>
  )
}

export default Categorias