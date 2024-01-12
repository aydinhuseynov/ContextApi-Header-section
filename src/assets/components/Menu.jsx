import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

function Menu() {
  const { deger, links } = useContext(GlobalContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {deger}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => {
                return(
                    <li className="nav-item" key={link}>
                    <a className="nav-link" href="#">
                      {link}
                    </a>
                  </li>
                )
              
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
