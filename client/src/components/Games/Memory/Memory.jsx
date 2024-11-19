import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MemoryTiles() {
  const [tiles, setTiles] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [moves, setMoves] = useState(0);
  const [showAll, setShowAll] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const emojis = ['🌸', '🌺', '🌻', '🌼', '🌷', '🌹', '🍀', '🍁', '🌴', '🌵', '🌿', '🍄'];

  useEffect(() => {
    if (gameStarted) {
      const shuffled = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
      setTiles(shuffled.map((emoji, index) => ({ id: index, emoji })));
      setFlipped([]);
      setSolved([]);
      setMoves(0);
      setShowAll(true);

      // Hide all tiles after 5 seconds
      const timeoutId = setTimeout(() => {
        setShowAll(false);
      }, 5000);

      // Cleanup timeout on new game start or unmount
      return () => clearTimeout(timeoutId);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (tiles[first].emoji === tiles[second].emoji) {
        setSolved([...solved, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
      setMoves((m) => m + 1);
    }
  }, [flipped, tiles]);

  const handleClick = (index) => {
    if (flipped.length < 2 && !flipped.includes(index) && !solved.includes(index) && !showAll) {
      setFlipped([...flipped, index]);
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="text-center p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-teal-600">Memory Tiles</h2>
      {!gameStarted ? (
        <button
          onClick={startGame}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
        >
          Start Game
        </button>
      ) : (
        <>
          <div className="grid grid-cols-6 gap-2 mb-6">
            {tiles.map((tile, index) => (
              <motion.button
                key={tile.id}
                onClick={() => handleClick(index)}
                className={`w-16 h-16 text-3xl flex items-center justify-center rounded-lg ${
                  flipped.includes(index) || solved.includes(index) || showAll ? 'bg-white' : 'bg-teal-500'
                }`}
                animate={{ rotateY: flipped.includes(index) || solved.includes(index) || showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ transform: 'rotateY(180deg)' }}>
                  {flipped.includes(index) || solved.includes(index) || showAll ? tile.emoji : ''}
                </div>
              </motion.button>
            ))}
          </div>
          <p className="text-lg mb-4">Moves: {moves}</p>
          {solved.length === tiles.length && (
            <p className="text-2xl font-bold text-green-600 mb-4">You won!</p>
          )}
          <button
            onClick={startGame}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
          >
            New Game
          </button>
        </>
      )}
    </div>
  );
}
