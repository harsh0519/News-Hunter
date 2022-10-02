import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            News Hunter
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">
                 Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
