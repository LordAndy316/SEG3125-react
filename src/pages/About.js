import React from "react";
import image from '../img/image.jpg';

const About = () => {
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
            <img className="img-fluid" src={image} alt="" />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <span className="overlay-text text-light " />
            </div>
            </div>
            <div className="container bg-dark">
            <div className="row">
                <div className="col-sm">
                <h1 className="display-4 text-light">Information about the Musem</h1>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                    <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="container text-right">
                </div>
                </div>
            </div>
            </div>
            <div className="container bg-dark">
            </div>
        </div>
        </div>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
    </div>
    );
};

export default About;