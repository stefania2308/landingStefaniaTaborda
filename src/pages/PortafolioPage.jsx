import React from 'react'
import { proyectos } from '../database/proyectos';

export const PortafolioPage = () => {
  return (
    <>
      <h1 class="text-center ">Portafolio</h1>
      {proyectos.map((proyectos) => (
        <div key={proyectos.id}>
          <section class="py-4 text-center">
            <div class="container  p-3 mb-9 shadow-lg">

              <div className="row columnas">
                <div className="col-md-6">
                  <img className='imagenes'
                    src={proyectos.imagen}
                    alt={proyectos.nombre}
                  />
                </div>

                <div className="col-md-6">
                  <h1>
                    {proyectos.nombre}
                  </h1>
                  <div className="card-md-7" >
<p>
                    {proyectos.descripcion}
</p>
                    <div className="card-md-7" >
                      <a href={proyectos.link_github} className="btn btn-outline-secondary btn-lg text-dark">
                        GitHub
                      </a>
                    </div>

                    <div className="card-md-7" >
                      <a href={proyectos.link_preview} className="btn btn-outline-secondary btn-lg text-dark">
                        Vista Previa
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </section>
        </div >
      ))
      }
    </>
  );
};
