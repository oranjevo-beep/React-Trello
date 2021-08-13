import { IBoards } from '../../common/interfaces/IBoards';
import { Link } from 'react-router-dom';
const Boards = (props: IBoards) => {
  // const colors = ['f94144', 'f3722c', '43aa8b', '90be6d', 'f8961e', '577590'];
  // let randomColor = (arr: string[]) => {
  //   let random = Math.floor(Math.random() * arr.length);
  //   return random;
  // };
  // let randomC = `#${colors[randomColor(colors)]}`;
  function generateRandomColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  return (
    <div className="board-link" style={{ background: generateRandomColor() }}>
      <h4>{props.title}</h4>
      <Link to={`/${props.id}`}>go</Link>
    </div>
  );
};

export default Boards;
