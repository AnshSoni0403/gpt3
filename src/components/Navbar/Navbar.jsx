import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => {
  <>
  <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whpt3">What is GPT3</a>
          </p>
          <p>
            <a href="#possibilities">Open AI</a>
          </p>
          <p>
            <a href="#blog">Case Studies</a>
          </p>
          <p>
            <a href="#footer">Library</a>
          </p>
  </>
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="/" />
        </div>
        <div className="gpt3_navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whpt3">What is GPT3</a>
          </p>
          <p>
            <a href="#possibilities">Open AI</a>
          </p>
          <p>
            <a href="#blog">Case Studies</a>
          </p>
          <p>
            <a href="#footer">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="submit">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className='gpt3_navbar-menu_container scale-up-center'>
            <div className="gpt3_navbar-menu_container-links-sign">
              <Menu />

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
