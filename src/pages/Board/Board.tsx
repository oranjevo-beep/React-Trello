import React from 'react';
import { GoArrowLeft } from 'react-icons/go';

import List from './components/List/List';
import './Board.css';

const data = {
  title: 'Моя тестовая доска',
  lists: [
    {
      id: 1,
      title: 'Планы',
      cards: [
        { id: 1, title: 'помыть кота' },
        { id: 2, title: 'приготовить суп' },
        { id: 3, title: 'сходить в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процессе',
      cards: [{ id: 4, title: 'посмотреть сериал' }],
    },
    {
      id: 3,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
  ],
};

const Board = () => {
  const { title, lists } = data;

  return (
    <>
      <div className="home">
        <p></p>
        <a href="/React-Trello">
          <GoArrowLeft className="arrow-back"></GoArrowLeft>HOME
        </a>
      </div>
      <div className="board">
        <h2 className="board__title">{title}</h2>
        <div className="board__list">
          {lists.map((list) => (
            <List key={list.id} title={list.title} cards={list.cards} />
          ))}
        </div>
        <button className="btn list__btn--add">Add new list</button>
      </div>
    </>
  );
};

export default Board;
