import React from 'react';

import './card.css';

const Card = (props) => {
  return (
    <article className={['backdrop', props.img].join(' ')}>
      <p className="text lighten">{props.children}</p>
    </article>
  );
};

export default Card;
