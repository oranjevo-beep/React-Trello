import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';
import Card from '../Card/Card';
interface ListProps {
  title: string;
  cards: ICard[];
}
export default function List(props: ListProps) {
  const { title, cards } = props;
  return (
    <div className="list">
      <h2 className="list__title">{title}</h2>
      <div>
        {cards.map((card) => (
          <Card id={card.id} title={card.title} />
        ))}
      </div>
      <button className="btn card__btn--add">Add new card</button>
    </div>
  );
}
