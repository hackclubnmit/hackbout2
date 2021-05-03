import React from 'react';

import './card.css';

const Card = (props) => {
  return (
    <article
      className={['backdrop', props.img].join(' ')}
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <div className="over-front">
        <p className="text lighten">{props.children}</p>
      </div>
    </article>
  );
};

export default Card;
