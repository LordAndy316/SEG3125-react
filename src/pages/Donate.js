import React from "react";
import Image from '../img/image.jpg';

const Donate = () => {
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
                <img className="img-fluid" src={Image} alt="" />
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <span className="overlay-text text-light " />
                  <button className="btn btn-success btn-lg" type="button">DONATE</button>
                </div>
              </div>
            </div>
          </div>
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
      );
    };

export default Donate;

