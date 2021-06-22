import React, { useState, useEffect } from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";

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
          {/* <MenuIcon
            style={{ marginRight: 60, fontSize: 50, color: "#fff" }}
            fontSize="inherit"
            color="inherit"
            onClick={(e) => openCloseNav(false)}
          /> */}

          <div class="overlay-content">
            <a href="#">Home</a>
            <a href="#">About</a>
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
          <div className="logo">alfie</div>
          <MenuIcon
            style={{ marginRight: 60, fontSize: 50, color: "#fff" }}
            fontSize="inherit"
            color="inherit"
            onClick={(e) => openCloseNav(true)}
          />
        </>
      )}
    </header>
  );
}

export default Header;
