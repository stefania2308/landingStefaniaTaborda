import React from 'react'
import {
  InicioPage,
  PerfilPage,
  EstudiosPage,
  ExperienciasPage,
  PortafolioPage,
  ContactoPage
} from "./";

export const LandignPage = () => {
  return (
    <div>
      <div id='inicio'>
        <InicioPage />
      </div>

      <div id='perfil'>
        <PerfilPage />
      </div>

      <div id='Estudios'>
        <EstudiosPage />
      </div>

      <div id='Experiencias'>
        <ExperienciasPage />
      </div>

      <div id='Portafolio'>
        <PortafolioPage />
      </div>

      <div id='Contacto'>
        <ContactoPage />
      </div>
    </div>

  );
};
