// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

// export default function BreathingExercise() {
//   const [phase, setPhase] = useState('inhale');
//   const [counter, setCounter] = useState(4);
//   const [isActive, setIsActive] = useState(false);
//   const [score, setScore] = useState(0);
//   const [leaves, setLeaves] = useState(0);
//   const [totalScore, setTotalScore] = useState(0);
//   const audioRef = useRef(null);

//   // Load state from localStorage
//   useEffect(() => {
//     const savedScore = localStorage.getItem('breathingExerciseScore');
//     const savedLeaves = localStorage.getItem('breathingExerciseLeaves');
//     const savedTotalScore = localStorage.getItem('totalScore');
//     const savedActiveState = localStorage.getItem('breathingExerciseIsActive');

//     if (savedScore) setScore(Number(savedScore));
//     if (savedLeaves) setLeaves(Number(savedLeaves));
//     if (savedTotalScore) setTotalScore(Number(savedTotalScore));
//     if (savedActiveState === 'true') setIsActive(true);
//   }, []);

//   // Update the score and leaves, and save them to localStorage
//   const handleScoreAndLeaf = (phaseType) => {
//     let newScore = score;
//     let newLeaves = leaves;
//     let newTotalScore = totalScore;

//     switch (phaseType) {
//       case 'inhale':
//         newScore += 1;
//         newLeaves += 1;
//         newTotalScore += 1;
//         break;
//       case 'hold':
//         newScore += 2;
//         newLeaves += 1;
//         newTotalScore += 2;
//         break;
//       case 'exhale':
//         newScore += 1;
//         newLeaves += 1;
//         newTotalScore += 1;
//         break;
//       default:
//         break;
//     }

//     setScore(newScore);
//     setLeaves(newLeaves);
//     setTotalScore(newTotalScore);

//     localStorage.setItem('breathingExerciseScore', newScore);
//     localStorage.setItem('breathingExerciseLeaves', newLeaves);
//     localStorage.setItem('totalScore', newTotalScore);
//   };

//   // Timer and phase management
//   useEffect(() => {
//     let timer;

//     if (isActive) {
//       if (counter > 0) {
//         timer = setInterval(() => {
//           setCounter((prevCounter) => prevCounter - 1);
//         }, 1000);
//       } else {
//         if (phase === 'inhale') {
//           setPhase('hold');
//           setCounter(4);
//           handleScoreAndLeaf('inhale');
//         } else if (phase === 'hold') {
//           setPhase('exhale');
//           setCounter(4);
//           handleScoreAndLeaf('hold');
//         } else if (phase === 'exhale') {
//           setPhase('inhale');
//           setCounter(4);
//           handleScoreAndLeaf('exhale');
//         }
//       }
//     } else {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [isActive, counter, phase]);

//   // Toggle exercise state
//   const toggleExercise = () => {
//     const newIsActive = !isActive;
//     setIsActive(newIsActive);

//     if (newIsActive) {
//       audioRef.current.play().catch((err) => {
//         console.warn('Audio playback failed. Interaction might be required.', err);
//       });
//     } else {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }

//     localStorage.setItem('breathingExerciseIsActive', newIsActive.toString());
//   };

//   // Reset button logic
//   const handleReset = () => {
//     setScore(0);
//     setLeaves(0);
//     setTotalScore(0);
//     setPhase('inhale');
//     setCounter(4);

//     localStorage.removeItem('breathingExerciseScore');
//     localStorage.removeItem('breathingExerciseLeaves');
//     localStorage.removeItem('totalScore');
//     localStorage.removeItem('breathingExerciseIsActive');
//   };

//   return (
//     <div className="text-center p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-blue-600">Breathing Exercise</h2>
//       <motion.div
//         className="text-8xl mb-8"
//         animate={{ scale: phase === 'inhale' ? 1.5 : phase === 'hold' ? 1.2 : 1 }}
//         transition={{ duration: 2 }}
//       >
//         {phase === 'inhale' ? '😤' : phase === 'hold' ? '😶' : '😮‍💨'}
//       </motion.div>
//       <p className="text-2xl mb-6 text-gray-700">
//         {phase.charAt(0).toUpperCase() + phase.slice(1)} for {counter} seconds
//       </p>
//       <button
//         onClick={toggleExercise}
//         className={px-6 py-3 rounded-full text-white font-semibold transition-colors ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}}
//       >
//         {isActive ? 'Stop' : 'Start'} 
//       </button>
//       <button
//         onClick={handleReset}
//         className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-4"
//       >
//         Reset
//       </button>

//       {/* Displaying the tree with leaves */}
//       <div className="mt-8">
//         <h3 className="text-2xl mb-4 text-blue-600">Progress</h3>
//         <div className="flex justify-center items-center">
//           <div className="tree-container relative">
//             <div className="trunk w-10 h-40 bg-brown-600 rounded-b-lg absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
//             <div className="leaves absolute bottom-16 left-1/2 transform -translate-x-1/2 flex">
//               {Array.from({ length: leaves }).map((_, index) => (
//                 <div
//                   key={index}
//                   className="leaf bg-white-500 rounded-full w-6 h-6 mx-1"
//                   style={{
//                     animation: 'leafFall 1s ease-in-out forwards',
//                     animationDelay: ${index * 0.1}s
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Audio element for music */}
//       <audio ref={audioRef} loop>
//         <source src="/music/relaxing-music.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// }




import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BreathingExercise() {
  const [phase, setPhase] = useState('inhale');
  const [counter, setCounter] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);
  const [leaves, setLeaves] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const audioRef = useRef(null);

  // Load state from localStorage
  useEffect(() => {
    const savedScore = localStorage.getItem('breathingExerciseScore');
    const savedLeaves = localStorage.getItem('breathingExerciseLeaves');
    const savedTotalScore = localStorage.getItem('totalScore');
    const savedActiveState = localStorage.getItem('breathingExerciseIsActive');

    if (savedScore) setScore(Number(savedScore));
    if (savedLeaves) setLeaves(Number(savedLeaves));
    if (savedTotalScore) setTotalScore(Number(savedTotalScore));
    if (savedActiveState === 'true') setIsActive(true);
  }, []);

  // Update the score and leaves, and save them to localStorage
  const handleScoreAndLeaf = (phaseType) => {
    let newScore = score;
    let newLeaves = leaves;
    let newTotalScore = totalScore;

    switch (phaseType) {
      case 'inhale':
        newScore += 1;
        newLeaves += 1;
        newTotalScore += 1;
        break;
      case 'hold':
        newScore += 2;
        newLeaves += 1;
        newTotalScore += 2;
        break;
      case 'exhale':
        newScore += 1;
        newLeaves += 1;
        newTotalScore += 1;
        break;
      default:
        break;
    }

    setScore(newScore);
    setLeaves(newLeaves);
    setTotalScore(newTotalScore);

    localStorage.setItem('breathingExerciseScore', newScore);
    localStorage.setItem('breathingExerciseLeaves', newLeaves);
    localStorage.setItem('totalScore', newTotalScore);
  };

  // Timer and phase management
  useEffect(() => {
    let timer;

    if (isActive) {
      if (counter > 0) {
        timer = setInterval(() => {
          setCounter((prevCounter) => prevCounter - 1);
        }, 1000);
      } else {
        if (phase === 'inhale') {
          setPhase('hold');
          setCounter(4);
          handleScoreAndLeaf('inhale');
        } else if (phase === 'hold') {
          setPhase('exhale');
          setCounter(4);
          handleScoreAndLeaf('hold');
        } else if (phase === 'exhale') {
          setPhase('inhale');
          setCounter(4);
          handleScoreAndLeaf('exhale');
        }
      }
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive, counter, phase]);

  // Toggle exercise state
  const toggleExercise = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);

    if (newIsActive) {
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback failed. Interaction might be required.', err);
      });
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    localStorage.setItem('breathingExerciseIsActive', newIsActive.toString());
  };

  // Reset button logic
  const handleReset = () => {
    setScore(0);
    setLeaves(0);
    setTotalScore(0);
    setPhase('inhale');
    setCounter(4);

    localStorage.removeItem('breathingExerciseScore');
    localStorage.removeItem('breathingExerciseLeaves');
    localStorage.removeItem('totalScore');
    localStorage.removeItem('breathingExerciseIsActive');
  };

  return (
    <div className="text-center p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Breathing Exercise</h2>
      <motion.div
        className="text-8xl mb-8"
        animate={{ scale: phase === 'inhale' ? 1.5 : phase === 'hold' ? 1.2 : 1 }}
        transition={{ duration: 2 }}
      >
        {phase === 'inhale' ? '😤' : phase === 'hold' ? '😶' : '😮‍💨'}
      </motion.div>
      <p className="text-2xl mb-6 text-gray-700">
        {phase.charAt(0).toUpperCase() + phase.slice(1)} for {counter} seconds
      </p>
      <button
        onClick={toggleExercise}
        className={`px-6 py-3 rounded-full text-white font-semibold transition-colors ${
          isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isActive ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={handleReset}
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-4"
      >
        Reset
      </button>

      {/* Displaying the tree with leaves */}
      <div className="mt-8">
        <h3 className="text-2xl mb-4 text-blue-600">Progress</h3>
        <div className="flex justify-center items-center">
          <div className="tree-container relative">
            <div className="trunk w-10 h-40 bg-brown-600 rounded-b-lg absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="leaves absolute bottom-16 left-1/2 transform -translate-x-1/2 flex">
              {Array.from({ length: leaves }).map((_, index) => (
                <div
                  key={index}
                  className="leaf bg-white-500 rounded-full w-6 h-6 mx-1"
                  style={{
                    animation: 'leafFall 1s ease-in-out forwards',
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audio element for music */}
      <audio ref={audioRef} loop>
        <source src="/music/relaxing-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
