import React from 'react'

export const EstudiosPage = () => {
  return (
    <>
    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <center>
        <h1> Estudios </h1>
      </center>
      <section className="py-5">
        <div className="container mb-9  shadow-lg">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center1 ">
                <div className="card-body">
                  <img src="public/descarga.png" className="card-img-top" width="50px" />
                  <h3>Tecnica profecional en sistemas </h3>
                  <p>
                    inicio febrero/2019 noviembre/2021
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center1">
                <div className="card-body">
                  <img src="public/descarga.png" className="card-img-top" alt="..." />
                  <h3>Tecnologia en sistemas</h3>
                  <p>
                    inicio 1 / febrero / 2022 en proceso
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center1 ">
                <div className="card-body">
                  <img src="public/logo-campus-ve.png" className="card-img-top" alt="..." />
                  <h3>Diplomado en Front-end y react js</h3>
                  <p>
                    Inicio 1/ junio / 2022 en proceso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};
