import React from 'react'

export const NavBar = () => {
  return (

    <>
      <nav id="navbar-example2" className="navbar navbar-light bg-light">
      <ul className="nav nav-pills">
        <img className='icono' src='/iconoStefania2.png'></img>
        <a className="navbar-brand">Stefania Taborda</a>
        </ul>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#perfil">Perfil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Estudios">Estudios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Experiencias">Experiencias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Portafolio">Portafolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      
    </>
  );
};
