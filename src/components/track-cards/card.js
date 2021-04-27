import React from 'react';

import './card.css';

const Card = (props) => {
  return (
    <article className={['backdrop', props.img].join(' ')}>
      <div className="over-front">
        <p className="text lighten">{props.children}</p>
      </div>
    </article>
  );
};

export default Card;
