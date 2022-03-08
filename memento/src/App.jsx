import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import useAppBadge from './hooks/useAppBadge';
import shuffleArray from './utilities/shuffleArray';

const assets = [
  { image: '/assets/css.png', matched: false },
  { image: '/assets/html5.png', matched: false },
  {
    image: '/assets/jquery.png',
    matched: false,
  },
  { image: '/assets/js.png', matched: false },
  { image: '/assets/next.png', matched: false },
  { image: '/assets/node.png', matched: false },
  {
    image: '/assets/react.png',
    matched: false,
  },
  { image: '/assets/ts.png', matched: false },
];

function App() {
  const [wins, setWins] = useState(0); // Win streak
  const [cards, setCards] = useState([]); // Cards array from assets
  const [pickOne, setPickOne] = useState(null); // First selection
  const [pickTwo, setPickTwo] = useState(null); // Second selection
  const [disabled, setDisabled] = useState(false); // Delay handler
  const [setBadge, clearBadge] = useAppBadge(); // Handles app badge

  // Handle card selection
  const handleClick = (card) => {
    pickOne ? setPickTwo(card) : setPickOne(card);
  };

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  // Start over
  const handleNewGame = () => {
    setWins(0);
    clearBadge();
    handleTurn();
    setCards(() => shuffleArray(assets));
  };

  // Used for selection and match handling
  useEffect(() => {
    let pickTimer;

    // Two cards have been clicked
    if (pickOne && pickTwo) {
      // Check if the cards the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update card property to reflect match
              return { ...card, matched: true };
            } else {
              // No match
              return card;
            }
          });
        });
        handleTurn();
      } else {
        // Prevent new selections until after delay
        setDisabled(true);
        // Add delay between selections
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo, setBadge, wins]);

  // Initialize the game on load
  useEffect(() => {
    handleTurn();
    // Shuffle cards
    setCards(() => shuffleArray(assets));
  }, []);

  // If player has found all matches, handle accordingly
  useEffect(() => {
    // Check for any remaining card matches
    const checkWin = cards.filter((card) => card.matched === false);

    // All matches made, handle win/badge counters
    if (cards.length && checkWin.length < 1) {
      console.log('You win!');
      setWins(wins + 1);
      setBadge();
      handleTurn();
      setCards(() => shuffleArray(assets));
    }
  }, [cards, setBadge, wins]);

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins} />
      <div className="grid">
        {cards.map((card) => {
          // Destructured card properties
          const { id, image, matched } = card;

          return (
            <Card
              key={id}
              card={card}
              image={image}
              disabled={disabled}
              onClick={handleClick}
              selected={card === pickOne || card === pickTwo || matched}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
