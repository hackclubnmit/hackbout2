import React from 'react';
// import VanillaTilt from 'vanilla-tilt';
import Particles from 'react-particles-js';

import Card from '../../components/track-cards/card';
import './Tracks.css';

const Tracks = () => {
  return (
    <section id="tracks" className="tracks">
      <Particles
        id="particles_2"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#10aa62',
            },
            shape: {
              type: 'polygon',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 6,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#10aa62',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'top-right',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <h1
        className="tracks-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Tracks
      </h1>
      <div className="archive track-cards">
        <Card img={'img1'}>
          <span>ML&nbsp;</span>
          <span>And&nbsp;</span>
          <span>Data&nbsp;</span>
          <span>Science&nbsp;</span>
        </Card>
        <Card img={'img2'}>
          <span>Blockchain&nbsp;</span>
          <span>AND&nbsp;</span>
          <span>Fintech&nbsp;</span>
        </Card>
        <Card img={'img3'}>
          <span>Internet&nbsp;</span>
          <span>Of&nbsp;</span>
          <span>Things&nbsp;</span>
        </Card>
      </div>
      {/* <div className="archive"> */}
      {/* </div> */}
      <div className="archive track-cards last__card">
        <Card img={'img4'}>
          <span>AR&nbsp;</span>
          <span>AND&nbsp;</span>
          <span>VR&nbsp;</span>
        </Card>
        <Card img={'img5'}>
          <span>Future&nbsp;</span>
          <span>Mobility&nbsp;</span>
        </Card>
        <Card img={'img6'}>
          <span>Open&nbsp;</span>
          <span>Innovation&nbsp;</span>
        </Card>
      </div>
    </section>
  );
};

export default Tracks;
