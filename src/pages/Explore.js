import React from "react";
function toExhibitPage(){
  window.open('/exhibit1', '_self')
}
const Explore = () => {
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
            <h1 className="display-3 text-light">Our Exibits</h1>
            <div className="container bg-dark ">
            <div className="container bg-dark row">
              <div className="container col">

              </div>
            <div className="container col">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Time period</option>
                  <option value="1">11 AM</option>
                  <option value="2">12 PM</option>
                  <option value="3">1 PM</option>
                  <option value="3">2 PM</option>
              </select>
              </div>
              <div className="container col">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Author</option>
                  <option value="1">11 AM</option>
                  <option value="2">12 PM</option>
                  <option value="3">1 PM</option>
                  <option value="3">2 PM</option>
              </select>
              </div>
              <div className="container col">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Time</option>
                  <option value="1">11 AM</option>
                  <option value="2">12 PM</option>
                  <option value="3">1 PM</option>
                  <option value="3">2 PM</option>
              </select>
              </div>
            </div>
            </div>
          </div>
          <div className="container bg-dark">
            <div className="row">
              <div className="col-lg">
                <img className="img-fluid d-none d-lg-block" src="./img/trex.png" alt="" />
              </div>_
              <div className="col-lg">
                <h1 className="display-4 text-light">Dinosaur Exibit</h1>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                  <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="container text-right">
                  <span className="overlay-text text-light " />
                  <button className="btn btn-primary" type="button" onClick={toExhibitPage}>Get Tickets Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-dark">
            <div className="row">
              <div className="col-lg">
                <img className="img-fluid d-none d-lg-block" src="./img/3.jpg" alt="" />
              </div>
              <div className="col-lg">
                <h1 className="display-4 text-light">Greek Exibit</h1>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                  <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="container text-right">
                  <span className="overlay-text text-light " />
                  <button className="btn btn-primary" type="button" onClick={toExhibitPage}>Get Tickets Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-dark">
            <div className="row">
              <div className="col-lg">
                <img className="img-fluid d-none d-lg-block" src="./img/image.jpg" alt="" />
              </div>
              <div className="col-lg">
                <h1 className="display-4 text-light">Cannon Exibit</h1>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                  <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="container text-right">
                  <span className="overlay-text text-light " />
                  <button className="btn btn-primary" type="button" onClick={toExhibitPage}>Get Tickets Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Optional JavaScript */}

      {/* jQuery first, then Popper.js, then Bootstrap JS */}
    </div>
  );
}

export default Explore;