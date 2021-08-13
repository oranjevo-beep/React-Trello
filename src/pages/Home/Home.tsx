import React, { useState } from 'react';
import data from '../../BordsData';
import Board from '../Board/Board';
import Boards from '../Boards/Boards';

const Home = () => {
  const [boards, setBoards] = useState(data.boards);

  return (
    <section className="container home">
      <h1 className="home__title">My Boards</h1>
      <div className="boards-container">
        {boards.map((board) => {
          const { id, title } = board;
          return <Boards id={id} title={title} />;
        })}
        <button className="board-link board__btn-add">Add new board</button>
      </div>
    </section>
  );
};

export default Home;
