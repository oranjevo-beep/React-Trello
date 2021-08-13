import React, { useState, useEffect } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import BoardsData from '../../BordsData';
import List from './components/List/List';
import './Board.css';
import { Link, useParams } from 'react-router-dom';
import { IId } from '../../common/interfaces/IId';

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

function ensure<T>(
  argument: T | undefined | null,
  message: string = 'This value was promised to be there.'
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}

const Board = () => {
  const { title, lists } = data;
  const { id } = useParams<IId>();
  console.log(id);

  const [btitle, setBtitle] = useState('default name');
  console.log(BoardsData.boards[0].title);

  useEffect(() => {
    const newTitle = ensure(
      BoardsData.boards.find((title) => title.id === parseInt(id))
    );

    setBtitle(newTitle.title);
  }, []);
  return (
    <>
      <div className="home">
        <p></p>
        <a href="/React-Trello">
          <GoArrowLeft className="arrow-back"></GoArrowLeft>HOME
        </a>
      </div>
      <div className="board">
        <h2 className="board__title">{btitle}</h2>
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
