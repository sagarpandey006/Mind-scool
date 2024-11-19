// import React, { useState, useEffect, useCallback } from 'react'

// export default function ColorMatcher() {
//   const [targetColor, setTargetColor] = useState({ r: 0, g: 0, b: 0 })
//   const [userColor, setUserColor] = useState({ r: 128, g: 128, b: 128 })
//   const [score, setScore] = useState(0)
//   const [feedback, setFeedback] = useState('')
//   const [matchPercentage, setMatchPercentage] = useState(0)

//   const generateNewColor = useCallback(() => {
//     setTargetColor({
//       r: Math.floor(Math.random() * 256),
//       g: Math.floor(Math.random() * 256),
//       b: Math.floor(Math.random() * 256)
//     })
//   }, [])

//   useEffect(() => {
//     generateNewColor()
//   }, [generateNewColor])

//   const handleColorChange = (color, value) => {
//     setUserColor(prev => ({ ...prev, [color]: parseInt(value) }))
//   }

//   const calculateMatch = () => {
//     const diff = Math.sqrt(
//       Math.pow(targetColor.r - userColor.r, 2) +
//       Math.pow(targetColor.g - userColor.g, 2) +
//       Math.pow(targetColor.b - userColor.b, 2)
//     )
//     const maxDiff = Math.sqrt(3 * Math.pow(255, 2))
//     return 100 - (diff / maxDiff * 100)
//   }

//   const handleSubmit = () => {
//     const match = calculateMatch()
//     setMatchPercentage(match.toFixed(2))
//     if (match > 95) {
//       setScore(prev => prev + 1)
//       setFeedback("Perfect match! Great job!")
//       generateNewColor()
//     } else if (match > 90) {
//       setScore(prev => prev + 1)
//       setFeedback("Very close! Keep it up!")
//     } else if (match > 80) {
//       setFeedback("Good try, but you can do better!")
//     } else {
//       setFeedback("Not quite there. Keep practicing!")
//     }
//   }

//   const handleReset = () => {
//     generateNewColor();
//     setUserColor({ r: 128, g: 128, b: 128 });
//     setScore(0);
//     setFeedback('');
//     setMatchPercentage(0);
//   };

//   return (
//     <div className="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-purple-600">Color Matcher</h2>
//       <div className="flex justify-center items-center mb-6">
//         <div 
//           className="w-32 h-32 mr-8 rounded-lg shadow-md" 
//           style={{ backgroundColor: `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})` }} 
//         ></div>
//         <div 
//           className="w-32 h-32 rounded-lg shadow-md" 
//           style={{ backgroundColor: `rgb(${userColor.r}, ${userColor.g}, ${userColor.b})` }} 
//         ></div>
//       </div>
//       <div className="mb-6 flex justify-center space-x-4">
//         {['r', 'g', 'b'].map(color => (
//           <div key={color} className="flex flex-col items-center">
//             <label className="mb-2 text-lg font-semibold" style={{color: color === 'r' ? 'red' : color === 'g' ? 'green' : 'blue'}}>
//               {color.toUpperCase()}
//             </label>
//             <input 
//               type="range" 
//               min="0" 
//               max="255" 
//               value={userColor[color]} 
//               onChange={(e) => handleColorChange(color, e.target.value)}
//               className="w-24"
//             />
//             <span>{userColor[color]}</span>
//           </div>
//         ))}
//       </div>
//       <button 
//         onClick={handleSubmit} 
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors mb-4 mr-2"
//       >
//         Submit
//       </button>
//       <button 
//         onClick={handleReset}
//         className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors mb-4"
//       >
//         Reset
//       </button>
//       <p className="text-lg mb-2">Score: {score}</p>
//       <p className="text-lg mb-2">Match: {matchPercentage}%</p>
//       <p className="text-xl font-semibold text-purple-700">{feedback}</p>
//     </div>
//   )
// }


import React, { useState, useEffect, useCallback } from 'react';

export default function ColorMatcher() {
  const [targetColor, setTargetColor] = useState({ r: 0, g: 0, b: 0 });
  const [userColor, setUserColor] = useState({ r: 128, g: 128, b: 128 });
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [matchPercentage, setMatchPercentage] = useState(0);

  const generateNewColor = useCallback(() => {
    setTargetColor({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    });
  }, []);

  // Initialize the score from localStorage when the component mounts
  useEffect(() => {
    const storedScore = localStorage.getItem('totalScore');
    if (storedScore) {
      setScore(Number(storedScore)); // Set the score from localStorage
    }
    generateNewColor();
  }, [generateNewColor]);

  const handleColorChange = (color, value) => {
    setUserColor((prev) => ({ ...prev, [color]: parseInt(value) }));
  };

  const calculateMatch = () => {
    const diff = Math.sqrt(
      Math.pow(targetColor.r - userColor.r, 2) +
      Math.pow(targetColor.g - userColor.g, 2) +
      Math.pow(targetColor.b - userColor.b, 2)
    );
    const maxDiff = Math.sqrt(3 * Math.pow(255, 2));
    return 100 - (diff / maxDiff) * 100;
  };

  const handleSubmit = () => {
    const match = calculateMatch();
    setMatchPercentage(match.toFixed(2));
    if (match > 95) {
      setScore((prev) => prev + 1);
      setFeedback("Perfect match! Great job!");
    } else if (match > 90) {
      setScore((prev) => prev + 1);
      setFeedback("Very close! Keep it up!");
    } else if (match > 80) {
      setFeedback("Good try, but you can do better!");
    } else {
      setFeedback("Not quite there. Keep practicing!");
    }

    // Update the total score in localStorage
    const updatedScore = score + 1;
    localStorage.setItem('totalScore', updatedScore);
  };

  const handleReset = () => {
    generateNewColor();
    setUserColor({ r: 128, g: 128, b: 128 });
    setScore(0);
    setFeedback('');
    setMatchPercentage(0);
    
    // Reset the total score in localStorage
    localStorage.setItem('totalScore', 0);
  };

  return (
    <div className="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-purple-600">Color Matcher</h2>
      <div className="flex justify-center items-center mb-6">
        <div 
          className="w-32 h-32 mr-8 rounded-lg shadow-md" 
          style={{ backgroundColor: `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})` }} 
        ></div>
        <div 
          className="w-32 h-32 rounded-lg shadow-md" 
          style={{ backgroundColor: `rgb(${userColor.r}, ${userColor.g}, ${userColor.b})` }} 
        ></div>
      </div>
      <div className="mb-6 flex justify-center space-x-4">
        {['r', 'g', 'b'].map((color) => (
          <div key={color} className="flex flex-col items-center">
            <label 
              className="mb-2 text-lg font-semibold" 
              style={{ color: color === 'r' ? 'red' : color === 'g' ? 'green' : 'blue' }}
            >
              {color.toUpperCase()}
            </label>
            <input 
              type="range" 
              min="0" 
              max="255" 
              value={userColor[color]} 
              onChange={(e) => handleColorChange(color, e.target.value)}
              className="w-24"
            />
            <span>{userColor[color]}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors mb-4 mr-2"
      >
        Submit
      </button>
      <button 
        onClick={handleReset}
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors mb-4"
      >
        Reset
      </button>
      <p className="text-lg mb-2">Score: {score}</p>
      <p className="text-lg mb-2">Match: {matchPercentage}%</p>
      <p className="text-xl font-semibold text-purple-700">{feedback}</p>
    </div>               
  );
}
