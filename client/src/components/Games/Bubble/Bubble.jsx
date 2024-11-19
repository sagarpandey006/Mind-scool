// import { useState, useEffect } from 'react'
// // import { Button } from "@/components/ui/button" // Uncomment or correct the path if needed

// function BubblePopGame() {
//   const [bubbles, setBubbles] = useState([])
//   const [score, setScore] = useState(0)

//   const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400']

//   useEffect(() => {
//     generateBubbles()
//   }, [])

//   const generateBubbles = () => {
//     const newBubbles = []
//     for (let i = 0; i < 20; i++) {
//       newBubbles.push({
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         size: Math.random() * 40 + 20,
//         color: colors[Math.floor(Math.random() * colors.length)]
//       })
//     }
//     setBubbles(newBubbles)
//     setScore(0)
//   }

//   const popBubble = (id) => {
//     setBubbles(bubbles.filter(bubble => bubble.id !== id))
//     setScore(score + 1)
//   }

//   return (
//     <div className="w-full max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center mb-4">Bubble Pop Game</h1>
//       <p className="text-center mb-4">Pop the bubbles to relieve stress! Score: {score}</p>
//       <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
//         {bubbles.map(bubble => (
//           <div
//             key={bubble.id}
//             className={`absolute rounded-full ${bubble.color} cursor-pointer transition-transform transform hover:scale-110`}
//             style={{
//               left: `${bubble.x}%`,
//               top: `${bubble.y}%`,
//               width: `${bubble.size}px`,
//               height: `${bubble.size}px`,
//             }}
//             onClick={() => popBubble(bubble.id)}
//             aria-label="Pop bubble"
//           />
//         ))}
//       </div>
//       <div className="text-center">
//   <button onClick={generateBubbles} className="bg-blue-500 text-white px-4 py-2 rounded">Reset Game</button>
// </div>

//     </div>
//   )
// }

// export default BubblePopGame; 




// BubblePopGame.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BubblePopGame() {
  const [bubbles, setBubbles] = useState([]);
  const [score, setScore] = useState(0);

  const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'];

  useEffect(() => {
    generateBubbles();
  }, []);

  const generateBubbles = () => {
    const newBubbles = [];
    for (let i = 0; i < 20; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setBubbles(newBubbles);
    setScore(0);
  };

  const popBubble = (id) => {
    setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.id !== id));
    setScore((prevScore) => {
      const newScore = prevScore + 1;
      const totalOverAllScore = Number(localStorage.getItem('totalScore')) || 0;
      localStorage.setItem('totalScore', totalOverAllScore + 1);
      return newScore;
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Bubble Pop Game</h1>
      <p className="text-center mb-4">Pop the bubbles to relieve stress! Score: {score}</p>
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute rounded-full ${bubble.color} cursor-pointer transition-transform transform hover:scale-110`}
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
            }}
            onClick={() => popBubble(bubble.id)}
            aria-label="Pop bubble"
          />
        ))}
      </div>
      <div className="text-center">
        <button onClick={generateBubbles} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Reset Game
        </button>
        <Link to="/color">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Play Color Match Game</button>
        </Link>

        <Link to="/memory">
          <button className="bg-red-500 text-white px-4 py-2 rounded">Play Memory games</button>
        </Link>

      </div>
    </div>
  );
}

export default BubblePopGame;
