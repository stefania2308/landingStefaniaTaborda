import React from 'react'

export const ContactoPage = () => {
  return (
    <>

      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <section className="text-center ">
          <div className="container p-5 mb-9  shadow-lg">
            <center>
              <h1> Contactos </h1>
            </center>

            <div className="container-buttons">
              <div className="row">

                <div className="col-lg-3">
                  <div className='col-2'>
                   <a href="https://www.facebook.com/estefania.taborda.9216" className="uno" ></a>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className='col-md-5'>
                    <a href="https://www.instagram.com/stefa_taborda23/" className="dos"></a>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className='col-md-2'>
                    <a href="https://web.whatsapp.com/" className="tres"></a>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className='col-md-2'>
                    <a href="https://github.com/stefania2308" className="cuatro"></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div >

    </>
  );
};
