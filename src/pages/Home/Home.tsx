import React, { useState } from 'react';
import { IBoardLink } from '../../common/interfaces/IBoardLink';
import Board from '../Board/Board';
const colors = ['f94144', 'f3722c', '43aa8b', '90be6d', 'f8961e', '577590'];
let randomColor = (arr: string[]) => {
  let random = Math.floor(Math.random() * arr.length);
  return random;
};
let randomC = `#${colors[randomColor(colors)]}`;

const data = {
  boards: [
    { id: 1, title: 'покупки' },
    { id: 2, title: 'подготовка к свадьбе' },
    { id: 3, title: 'разработка интернет-магазина' },
    { id: 4, title: 'курс по продвижению в соцсетях' },
  ],
};
const Home = () => {
  const [boards, setBoards] = useState(data.boards);

  return (
    <section className="container home">
      <h1 className="home__title">My Boards</h1>
      <div className="boards-container">
        {boards.map((board) => {
          const { id, title } = board;
          return <BoardLink id={id} title={title} />;
        })}
        <button className="board-link board__btn-add">Add new board</button>
      </div>
    </section>
  );
};
const BoardLink = (props: IBoardLink) => {
  const [color, setColor] = useState('white');
  console.log(props);

  return (
    <div className="board-link" style={{ background: `${color}` }}>
      <h4>{props.title}</h4>
    </div>
  );
};
export default Home;
