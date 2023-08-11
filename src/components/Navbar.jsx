import React from "react";
import "../App.css";
const Navbar = () => {
  return (
  
    <header class="BaseHeader ExplorerHeader">
      <div aria-hidden="true" class="BaseHeader__overlay"></div>
      <div class="BaseHeader__container">
        <a class="BaseHeader__logo" href="/">
          <img alt="Forta logo" src="/forta_explorer_logo.svg" height="20" />
        </a>
        <button class="Button Button--tertiary Button--lg Button--icon BaseHeader__menu-button">
          <div class="Button__icon">
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
        <div class="BaseHeader__menu">
          <div class="BaseHeader__menu-container">
            <nav class="BaseHeader__navigation">
              <ul class="BaseHeader__nav-items">
                <li>
                  <a
                    aria-current="page"
                    class="MenuItem MenuItem--active"
                    href="/"
                  >
                    <span class="MenuItem__label">Bot Search</span>
                  </a>
                </li>
                <li>
                  <a class="MenuItem" href="/explorer">
                    <span class="MenuItem__label">Alerts</span>
                  </a>
                </li>
                <li>
                  <a class="MenuItem" href="/network">
                    <span class="MenuItem__label">Network</span>
                  </a>
                </li>
              </ul>
              <div aria-hidden="true" class="BaseHeader__separator"></div>
              <ul class="BaseHeader__nav-items">
                <li>
                  <a
                    href="https://app.forta.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="MenuItem"
                  >
                    <span class="MenuItem__label">Forta App</span>
                    <span class="MenuItem__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
            <div class="BaseHeader__additional-menu">
              <a
                target="_blank"
                class="Button Button--outline Button--md Button--round ExplorerHeader__subscribe-button"
                href="https://app.forta.network"
                rel="noopener noreferrer"
              >
                <div class="Button__content">Subscribe to Alerts</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
