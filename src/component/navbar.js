import React from "react";

const Navbar = () => {
    return (
<div className="container-fluid bg-primary" id="navbar">
    <div className="container bg-primary">
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand lead " href="index.html">Treasurebox</a>
        <img src="/img/sq.png" alt="" width={40} height={40} className="d-inline-block align-text-top" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link text-light lead " href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light lead" href="explore">Explore Exibits</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light lead" href="donate">Donate</a>
                </li>
                <a className="nav-link text-light lead" href="about">About</a>
                <a className="nav-link text-light lead" href="news">News</a>
            </ul>
        </div>
    </nav>
</div>
)}
export default Navbar;

