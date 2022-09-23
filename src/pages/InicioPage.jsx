import React from 'react'

export const InicioPage = () => {
  return (
    <header className="main-header">
      <div className="background-overlay text-white py-5">
        <div className="container">
          <div className="row d-flex h-100">
            <div className="col-sm-6 text-center justify-content-center align-self-center">
              <h1 className="Nombre">
                Stefania Taborda Restrepo
              </h1>
              <p className="Nombre">Estudiante de Tecnologia en sistemas </p>
              <a href="https://github.com/stefania2308" className="btn btn-outline-secondary btn-lg text-dark">
                Perfil de GitHub
              </a>
            </div>
            <div className="col-sm-6">
              <img src="public/MARCA 2.png" className="img-fluid d-none d-sm-block" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
