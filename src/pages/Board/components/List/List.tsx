import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';

interface ListProps {
  title: string;
  cards: ICard[];
}
export default function List(props: ListProps) {
  const { title, cards } = props;
  return (
    <div className="list">
      <h2 className="list__title">{title}</h2>
      <p>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <li className="card__item">{card.title}</li>
          </div>
        ))}
      </p>
      <button className="btn card__btn--add">Add new card</button>
    </div>
  );
}
