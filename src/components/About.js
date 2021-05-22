import React from 'react';
import './About.scss';


const About = () => {
  return (
    <section id='about' className='section is-medium has-background-dark'>
      <div className='container is-flex content is-justify-content-center'>
        <article className='media'>
          <figure className='image is-128x128'>
            <img className='is-rounded' src="https://scontent.ftun5-1.fna.fbcdn.net/v/t1.6435-9/187854351_2873617736220621_1902522374334778951_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PS3KMrmSH2cAX9nQYJv&_nc_ht=scontent.ftun5-1.fna&oh=95b8223c80371299d8151a442a403453&oe=60D0415C" alt='avatar' />
          </figure>
          <div className='content has-text-grey-light'>
            <h3 className='title has-text-primary-dark'>About Me</h3>
            <p className='mb-1'>
            I am a self-motivated and a hard working person, able to work in a team as well as on my own initiative. And I'm always eager to learn new skills and broaden my knowledge.


            </p>
            <p className='mb-1'>
            And I'm always eager to learn new skills and broaden my knowledge.

            </p>
            <p>
             
            </p>
            <h3 className='title has-text-primary-dark'>Contact Details</h3>
            <div className='columns'>
              <div className='column is-one-third'>
                <p className='mb-2'>Nouha Zouaghi</p>
                <p className='mb-2'>Tunisia</p>
                <p className='mb-2'>Ben Arous, Hammam-chatt</p>
                <p className='mb-2'>+216 29 975 290</p>
                <p>
                  <a href='zouaghinouha57@gmail.com'>
                    <strong>zouaghinouha57@gmail.com</strong>
                  </a>
                </p>
              </div>
              <div className='column'>
                <button
                  className='button is-primary'
                  onClick={() =>
                    window.open(
                      '' //add a link to your CV !!!
                    )
                  }
                >
                  <span className='icon'>
                    <i className='fa fa-download'></i>
                  </span>
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </article>
        <div></div>
      </div>
    </section>
  );
};

export default About;
