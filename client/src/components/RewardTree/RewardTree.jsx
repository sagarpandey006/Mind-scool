// import React, { useState } from 'react';
// import Books from '../Books/Books.jsx'; 

// const Leaf = ({ x, y, size = 30, color = 'green', angle = 0 }) => {
//   return (
//     <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
//       <path
//         d="M0,0 Q5,-5 10,0 Q15,-5 20,0 Q10,10 0,0"
//         fill={color}
//         transform={`scale(${size / 20})`}
//         className="transition-all duration-300 ease-in-out hover:fill-green-400"
//       />
//     </g>
//   );
// };

// const DetailedTree = ({ 
//   width = 400, 
//   height = 400, 
//   color = '#654321',
//   completedTasks
// }) => {
//   // Dynamically generate leaf positions
//   const generateLeafPositions = (count) => {
//     const positions = [];
//     for (let i = 0; i < count; i++) {
//       positions.push({
//         x: Math.random() * 300 + 50, // Random x within a range
//         y: Math.random() * 200 + 50, // Random y within a range
//       });
//     }
//     return positions;
//   };

//   const leafPositions = generateLeafPositions(completedTasks);

//   return (
//     <svg 
//       width={width} 
//       height={height} 
//       viewBox="0 0 400 400" 
//       className="tree-container mx-auto"
//     >
//       {/* Ground */}
//       <path
//         d="M50,350 Q200,300 350,350 Q200,400 50,350"
//         fill="#8B4513"
//       />
      
//       {/* Tree Trunk and Branches */}
//       <g>
//         {/* Trunk */}
//         <path
//           d="M180,350 C180,350 170,250 190,200 C210,150 190,100 200,50 
//              C210,100 190,150 210,200 C230,250 220,350 220,350"
//           fill={color}
//         />
        
//         {/* Main Branches */}
//         <g stroke={color} strokeWidth="6" strokeLinecap="round" fill="none">
//           <path d="M195,200 C170,190 140,200 120,180" />
//           <path d="M190,150 C160,140 140,160 100,140" />
//           <path d="M195,100 C170,90 150,100 130,80" />
//           <path d="M205,200 C230,190 260,200 280,180" />
//           <path d="M210,150 C240,140 260,160 300,140" />
//           <path d="M205,100 C230,90 250,100 270,80" />
//         </g>
//       </g>

//       {/* Dynamically generated leaves */}
//       {leafPositions.map((pos, index) => (
//         <Leaf
//           key={index}
//           x={pos.x}
//           y={pos.y}
//           size={25 + Math.random() * 10}
//           angle={Math.random() * 360}
//           color={`hsl(${100 + Math.random() * 60}, 70%, 50%)`}
//         />
//       ))}
//     </svg>
//   );
// };

// export default function InteractiveTree() {
//   const [completedTasks, setCompletedTasks] = useState(0);

//   const handleCompleteTask = () => {
//     setCompletedTasks((prev) => prev + 1); // Increment task count
//   };

//   return (
//     <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-gray-800">Task Reward Tree</h1>
//       <DetailedTree 
//         width={400} 
//         height={400} 
//         color="#654321" 
//         completedTasks={completedTasks} 
//       />
//       <div className="text-center">
//         <p className="text-lg font-semibold mb-2">
//           Tasks Completed: {completedTasks}
//         </p>
//         <button
//           onClick={handleCompleteTask}
//           className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
//         >
//           Complete task 
           
          
//         </button> 
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';

const Leaf = ({ x, y, size = 30, color = 'green', angle = 0 }) => {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
      <path
        d="M0,0 Q5,-5 10,0 Q15,-5 20,0 Q10,10 0,0"
        fill={color}
        transform={`scale(${size / 20})`}
        className="transition-all duration-300 ease-in-out hover:fill-green-400"
      />
    </g>
  );
};

const DetailedTree = ({ 
  width = 400, 
  height = 400, 
  color = '#654321',
  completedTasks
}) => {
  // Dynamically generate leaf positions
  const generateLeafPositions = (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push({
        x: Math.random() * 300 + 50, // Random x within a range
        y: Math.random() * 200 + 50, // Random y within a range
      });
    }
    return positions;
  };

  const leafPositions = generateLeafPositions(completedTasks);

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 400" 
      className="tree-container mx-auto"
    >
      {/* Ground */}
      <path
        d="M50,350 Q200,300 350,350 Q200,400 50,350"
        fill="#8B4513"
      />
      
      {/* Tree Trunk and Branches */}
      <g>
        {/* Trunk */}
        <path
          d="M180,350 C180,350 170,250 190,200 C210,150 190,100 200,50 
             C210,100 190,150 210,200 C230,250 220,350 220,350"
          fill={color}
        />
        
        {/* Main Branches */}
        <g stroke={color} strokeWidth="6" strokeLinecap="round" fill="none">
          <path d="M195,200 C170,190 140,200 120,180" />
          <path d="M190,150 C160,140 140,160 100,140" />
          <path d="M195,100 C170,90 150,100 130,80" />
          <path d="M205,200 C230,190 260,200 280,180" />
          <path d="M210,150 C240,140 260,160 300,140" />
          <path d="M205,100 C230,90 250,100 270,80" />
        </g>
      </g>

      {/* Dynamically generated leaves */}
      {leafPositions.map((pos, index) => (
        <Leaf
          key={index}
          x={pos.x}
          y={pos.y}
          size={25 + Math.random() * 10}
          angle={Math.random() * 360}
          color={`hsl(${100 + Math.random() * 60}, 70%, 50%)`}
        />
      ))}
    </svg>
  );
};

export default function InteractiveTree() {
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    const totalOverAllScore = Number(localStorage.getItem('totalScore'));
    setCompletedTasks(totalOverAllScore);
  }, []);

  const handleCompleteTask = () => {
    setCompletedTasks((prev) => prev + 1); // Increment task count
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Task Reward Tree</h1>
      <DetailedTree 
        width={400} 
        height={400} 
        color="#654321" 
        completedTasks={completedTasks} 
      />
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">
          Tasks Completed: {completedTasks}
        </p>
        {/* Uncomment to enable task completion button */}
        {/* 
        <button
          onClick={handleCompleteTask}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
        >
          Complete Task
        </button>  
        */}
      </div>
    </div>
  );
}
