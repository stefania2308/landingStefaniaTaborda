import React from 'react'

export const ExperienciasPage = () => {
    return (
        <>
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            <center>
                <h1> Experiencia </h1>
            </center>
            <section className="py-5 text-center bg-light">
                <div className="container mb-4  shadow-lg">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card" style={{width: "15rem"}}>
                                <img src="/empelco.jpg" className="card-img-top" />
                                <div className="card-body1">
                                    <p className="card-text">
                                        Asesor de Información General Tigo IG-Creador de Experiencia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card" style={{width: "15rem"}}>
                                <img src="/arus.png" className="card-img-top" alt="..." />
                                <div className="card-body1">
                                    <p className="card-text">
                                        Tecnico en sistemas para el soporte en mesa de ayuda.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card" style={{width: "15rem"}}>
                                <img src="/teleperforme.jpg" className="card-img-top" alt="..." />
                                <div className="card-body1">
                                    <p className="card-text">
                                        Telecomunicaciones de españa (soporte)
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
