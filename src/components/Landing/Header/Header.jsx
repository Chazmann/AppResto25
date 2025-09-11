import React from 'react'
import Logo from './_logo'
import Buscador from './_buscador'
import PerfilUsuario from './_perfilUsuario'
import './header.css'

const Header = ( {usuario} ) => {
  return (
    <section className='header'>
        <div className='header-superior'>
            <Logo /> 
            <PerfilUsuario />
        </div>
        
        <section className="bienvenida">
            <h1>Buenas noches {usuario} </h1>
            <p>Te ayudamos a encontrar los mejores restaurantes, bares y cafeterías</p>
        </section>

        <Buscador />
    </section>
  )
}

export default Header