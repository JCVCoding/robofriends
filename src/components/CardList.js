import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return robots.map(({ name, email, id }) => (
    <Card name={name} email={email} id={id} key={`${name}_${id}`} />
  ));
};

export default CardList;
