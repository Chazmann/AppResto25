import React from 'react'
import Logo from './_logo'
import Buscador from './_buscador'
import PerfilUsuario from './_perfilUsuario'
import './header.css'

const Header = () => {
  return (
    <section className='header'>
        <div className='header-superior'>
            <Logo /> 
            <PerfilUsuario />
        </div>
        <Buscador />
    </section>
  )
}

export default Header