import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';

const Card = ({ title }: ICard) => {
  return (
    <div className="card">
      <li className="card__item">{title}</li>
    </div>
  );
};

export default Card;
