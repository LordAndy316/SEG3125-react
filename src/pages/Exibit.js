import React from "react";
import img3 from '../img/3.jpg';
function toVirtual(){
  window.open('/virtual', '_self')
}



const Exhibit = () => {
      return (
        <div>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bootstrap CSS */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
          <link rel="stylesheet" href="index.css" />
          <title>Treasurebox</title>
          <div className="container-fluid bg-dark">
            <div className="container bg-dark border">
              <div className="container bg-dark">
                <img className="img-fluid" src={img3} alt="" />
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <span className="overlay-text text-light lead " />
                  <button className="btn btn-success" type="button" onClick={toVirtual}>Buy Tickets</button>
                </div>
              </div>
              <div className="container bg-dark">
                <div className="row">
                  <div className="col">
                    <button type="button" className="btn-primary" name="button"> BACK</button>
                  </div>
                  <div className="col-10">
                    <h1 className="display-4 text-light">Description of Exhibit</h1>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                      <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                  <div className="col">
                    <button type="button" className="btn-primary" name="button"> NEXT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
      );
    };

export default Exhibit;