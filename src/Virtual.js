var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bootstrap CSS */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
          <link rel="stylesheet" href="index.css" />
          <link rel="stylesheet" href="virtual.css" />
          <title>Treasurebox</title>
          <div className="container-fluid bg-dark">
            <div className="container-fluid bg-primary" id="navbar">
              <div className="container bg-primary">
              </div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand lead " href="index.html">Treasurebox</a>
                <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width={30} height={24} className="d-inline-block align-text-top" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link text-light lead " href="home.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light lead" href="explore.html">Explore Exibits</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light lead" href="donate.html">Donate</a>
                    </li>
                    <a className="nav-link text-light lead" href="about.html">About</a>
                    <a className="nav-link text-light lead" href="news.html">News</a>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="container bg-dark border">
              <div className="container bg-dark">
                <div className="container" style={{backgroundImage: 'url("./img/3.jpg")'}}>
                  <div className style={{height: '200px'}}>
                  </div>
                  <div className="row">
                    <div className="popup col fs-2  fw-bold text-black " onclick="pop(pop1)">Click me!
                      <span className="popuptext fw-normal fs-6" id="pop1">Popup text...</span>
                    </div>
                    <div className="popup col fs-2  fw-bold text-black  " onclick="pop2()">Click me!
                      <span className="popuptext fw-normal fs-6" id="pop2">Text about Artifact...</span>
                    </div>
                    <div className="popup col fs-2  fw-bold text-black   " onclick="pop3(pop3)">Click me!
                      <span className="popuptext fw-normal fs-6" id="pop3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum..</span>
                    </div>
                  </div>
                  <div className style={{height: '250px'}}>
                  </div>
                </div>
              </div>
              <div className="container bg-dark">
                <div className="row">
                  <div className="col">
                    <button type="button" className="btn-primary" name="button"> BACK</button>
                  </div>
                  <div className="col-10">
                    <h1 className="display-4 text-light">Comments</h1>
                    <div className="container ">
                      <div className="container">
                        <h3 className="fs-4 text-light">name </h3>
                        <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est slaborum.</p>
                      </div>
                      <div className="container">
                        <h1 className="fs-4 text-light">name </h1>
                        <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.</p>
                      </div>
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
    }
  });