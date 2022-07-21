import React from "react";
function toHomePage(){
    window.open('/home', '_self')
  }
const Landing = () => {
      return (
        <div>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bootstrap CSS */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
          <link rel="stylesheet" href="index.css" />
          <title>Musem</title>
          <div className="container-fluid bg-dark mh-100">
            <div className="container-lg bg-dark">
              <div className="container" style={{height: '45vh'}}>
              </div>
              <div className="container text-center " style={{height: '45vh'}}>
                <button type="button" className="btn-outline-primary btn-lg" name="button" onClick={toHomePage}>Enter The Treasure Box</button>
              </div>
            </div>
            <footer className="footer">
              <div className="container">
                <span className="text-muted"></span>
              </div>
            </footer>
          </div>
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
      );
    }

    export default Landing;