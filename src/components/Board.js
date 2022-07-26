import Card from '../components/Card';
const Board = () => {
  return (
    <div className='board'>
      <h2 className='blind'>board title</h2>
      <textarea className='board-title'>board title</textarea>
      <Card />
      <button className='board-more'></button>
      <button className='board-add'>
        <i className='add-ico'>+</i>
        <span className='add-text'>Add a card</span>
      </button>
    </div>
  );
};
export default Board;
