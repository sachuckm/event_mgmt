import React, { useState, useEffect } from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import AppBar from "./AppBarContent";

function Header({ openProperty }) {
  const [header, setHeader] = useState("header");
  const [openMenu, setOpenMenu] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header-section");
    }
  };

  const openCloseNav = (flag) => {
    setOpenMenu(flag);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      {header === "header-section" && !openMenu ? (
        <div className="header-section">
          <AppBar
            handleMenuClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>
      ) : (
        <header className={header}>
          {openMenu ? (
            <div id="myNav" class="overlay">
              <a
                href="javascript:void(0)"
                class="closebtn"
                onClick={(e) => openCloseNav(false)}
              >
                ×
              </a>

              <div class="overlay-content">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#">Working with Alfie</a>
                <a onClick={openProperty} href="#">
                  Listings
                </a>
                <a href="#">Home evaluation</a>
                <a href="#">Contact</a>
              </div>
            </div>
          ) : (
            <>
              <div style={{ width: "100%" }} className="logo">
                Site Logo
              </div>
              <MenuIcon
                style={{ marginRight: 60, fontSize: 50, color: "#fff" }}
                fontSize="inherit"
                color="inherit"
                onClick={(e) => openCloseNav(true)}
              />
            </>
          )}
        </header>
      )}
    </>
  );
}

export default Header;
