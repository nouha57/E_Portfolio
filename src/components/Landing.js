import React from 'react';
import './Landing.scss';
import heroImage from '../assets/hero-image.svg';
import { Link } from 'react-scroll';


const Landing = () => {

  return (
    <section id='home' className='hero is-dark is-fullheight'>
      <img
        alt='background illustration'
        className='hero-background is-dark'
        src={heroImage}
      />
      <div className='hero-body'>
        <div className='container'>
          <div
            className='box mt-3 has-background-black'
            style={{ opacity: '.9' }}
          >
            <h3 className='title is-3 has-text-centered'>Hi, there!</h3>
            <h4 className='title is-4 has-text-centered'>
              I'm <strong>Nouha Zouaghi</strong>
              <span role='img' aria-label='smile'>
                😀
              </span>
            </h4>
            <p className='has-text-white'>
              I'm an <strong>ICT Engineering Student</strong> currently based in
              Tunisia but{' '}
              <strong>looking forward to relocate abroad</strong>. I have
              <strong>
                {' '}
                 a good experience
              </strong>{' '}
              in wWb Development and Data Science
             I am always looking
              for improvements. I have passion for helping others by being an active member in 2 well reputed organisations AIESEC and IEEE.
              I havve high
              attention to details and a very proactive attitude.
            </p>
            <div className='buttons has-text-centered is-flex is-justify-content-center'>
              <button
                className='button is-dark'
                onClick={() =>
                  window.open('https://www.linkedin.com/in/nouha-zouaghi-84785918b/')
                }
              >
                <span className='icon is-large'>
                  <i className='fab fa-linkedin fa-2x'></i>
                </span>
              </button>
              <button
                className='button is-dark'
                onClick={() => window.open('https://github.com/nouha57')}
              >
                <span className='icon is-large'>
                  <i className='fab fa-github fa-2x'></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-footer'>
        <div className='container has-text-centered'>
          <Link to='about' spy={true} smooth={true}>
            <i
              className='fas fa-chevron-circle-down arrow'
              style={{ fontSize: '3rem', marginBottom: '3rem' }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
