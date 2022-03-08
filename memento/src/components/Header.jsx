import useTitle from '../hooks/useTitle';

const Header = ({ handleNewGame, wins }) => {
  // Update page title with win count
  useTitle(`${wins} wins`);

  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>Memory Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;
