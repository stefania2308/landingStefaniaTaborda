import React from 'react'

export const PerfilPage = () => {
  return (
    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
    <section id="newsletter" className=" text-white py-5">
      <div className="perfil-overlay text-white py-4">
        <div className="container mb-9  shadow-lg">
          <div className="row d-flex h-100">
            <div className="col-sm-4">
              <img src="/IMG_20220719_133829.jpg " className="img-fluid d-none d-sm-block imagen2" />
            </div>
            <div className="col-sm-8 text-center justify-content-center align-self-center">
              <h1>
                Perfil
              </h1>
              <p>Soy una persona honesta, comprometida, responsable y dedicada a mis labores. Con
                actitud para el trabajo en equipo y
                facilidad de relación en grupo, adaptable al cambio,
                espíritu emprendedor, innovador, integrador de equipos, con capacidad para trabajar bajo
                presión y rápido aprendizaje </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
