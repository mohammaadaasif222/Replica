import React from "react";
import "../App.css";
const Navbar = () => {
  return (
  
    <header className="BaseHeader ExplorerHeader">
      <div aria-hidden="true" className="BaseHeader__overlay"></div>
      <div className="BaseHeader__container">
        <a className="BaseHeader__logo" href="/">
          <img alt="Forta logo" src="https://res.cloudinary.com/mae-com-in/image/upload/v1691760710/forta_explorer_logo_vcdkz2.svg" height="20" />
        </a>
        <button className="Button Button--tertiary Button--lg Button--icon BaseHeader__menu-button">
          <div className="Button__icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.68555 12.5449H21.6855"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.68555 6.54492H21.6855"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.68555 18.5449H21.6855"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </button>
        <div className="BaseHeader__menu">
          <div className="BaseHeader__menu-container">
            <nav className="BaseHeader__navigation">
              <ul className="BaseHeader__nav-items">
                <li>
                  <a
                    aria-current="page"
                    className="MenuItem MenuItem--active"
                    href="/"
                  >
                    <span className="MenuItem__label">Bot Search</span>
                  </a>
                </li>
                <li>
                  <a className="MenuItem" href="/explorer">
                    <span className="MenuItem__label">Alerts</span>
                  </a>
                </li>
                <li>
                  <a className="MenuItem" href="/network">
                    <span className="MenuItem__label">Network</span>
                  </a>
                </li>
              </ul>
              <div aria-hidden="true" className="BaseHeader__separator"></div>
              <ul className="BaseHeader__nav-items">
                <li>
                  <a
                    href="https://app.forta.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="MenuItem"
                  >
                    <span className="MenuItem__label">Forta App</span>
                    <span className="MenuItem__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="BaseHeader__additional-menu">
              <a
                target="_blank"
                className="Button Button--outline Button--md Button--round ExplorerHeader__subscribe-button"
                href="https://app.forta.network"
                rel="noopener noreferrer"
              >
                <div className="Button__content">Subscribe to Alerts</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
