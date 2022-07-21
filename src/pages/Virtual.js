import React from "react";
import Image3 from '../img/3.jpg';

var backgroundimg = {Image3};
function VirtualClick1() {
  backgroundimg = {Image3};
}
function VirtualClick2() {
  backgroundimg = {Image3};
}
function toObjList() {
  window.open("/objectlist", "_self");
}

const Virtual = () => {
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
            <div className="container bg-dark border">
              <div className="container bg-dark">
                <div className="container" id="backclass" style={{backgroundImage: backgroundimg}}>
                  <div className = "container row" style={{height: '400px'}}>
                    <div className="container col">
                      <div className="">
                        <button type="button" className="btn-primary" name="buttonObj1" onClick={VirtualClick1}> Object 1</button>
                      </div>  
                  </div>
                    <div className="container col">
                      <div className="">
                        <button type="button" className="btn-primary" name="buttonObj2" onClick={VirtualClick2}> Object 2 </button>
                      </div> 
                    </div>
                    <div className="container col">
                      <div className="">
                        <button type="button" className="btn-primary" name="buttonObj3"> Object 3</button>
                      </div> 
                    </div>
                    <div className="container col bg-light border border-primary ">
                       
                      <p className="fs-2 fw-semibold Lead text-center"> Object </p> 
                      <p className="fs-6 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae, officiis eius corporis dolore ducimus dolor delectus dolores. Aliquam esse cupiditate et aspernatur natus eum nemo optio deserunt fugit quam?</p> 
                    </div>
                  </div>
                  <div className="row">
                    
                  </div>
                  <div className style={{height: '250px'}}>
                  </div>
                </div>
              </div>
              <div className="container bg-dark">
                <div className="row">
                  
                  
                  <div className="col-10">
                    <h1 className="display-4 text-light">Comments</h1>
                    <div className="container ">
                      <div className="container">
                        <h3 className="fs-4 text-light">Joe </h3>
                        <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est slaborum.</p>
                      </div>
                      <div className="container">
                        <h1 className="fs-4 text-light">Yvonne </h1>
                        <p className="text-dark bg-light rounded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <button type="button" className="btn-primary" name="button" onClick={toObjList}> List of Objects</button>
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
export default Virtual;