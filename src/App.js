import React from 'react';
import './App.scss';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import './App.scss';
import logo from './logo.png';

import Projects from './components/Projects';
import { Link } from 'react-scroll';

function App() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <div className='app'>
      <nav className='navbar is-light is-fixed-top'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='home' spy={true} smooth={true}>
            <img src={logo} alt='Manuel Fabri - Developer' />
          </Link>
          <div
            role='button'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            onClick={() => {
              setisActive(!isActive);
            }}
            aria-label='menu'
            aria-expanded='false'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </div>
        </div>

        <div
          id='navbarItems'
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div className='navbar-start'>
            <Link className='navbar-item' to='about' spy={true} smooth={true}>
              ABOUT ME
            </Link>
            
            <Link className='navbar-item' to='project' spy={true} smooth={true}>
              PROJECTS
            </Link>
            <Link className='navbar-item' to='contact' spy={true} smooth={true}>
              CONTACT
            </Link>

          </div>
        </div>
      </nav>
      <Landing />
      <About />
      <Projects/>
     
      <Contact />
    </div>
  );
}

export default App;
