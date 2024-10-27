// // src/components/StoryProgress.tsx

// import React from 'react';
// import 'tailwindcss/tailwind.css';

// interface StoryProgressProps {
//   current: number;
//   total: number;
// }

// const StoryProgress: React.FC<StoryProgressProps> = ({ current, total }) => {
//   // const progressWidth = (current / total) * 100;
//   const progressWidth = 100;

//   return (
//     <div className="h-1 bg-lightGray w-full">
//       <div className="bg-blue-500 h-1" style={{ width: `${progressWidth}%` }} />
//     </div>
//   );
// };

// export default StoryProgress;

// src/components/ProgressBar.tsx
import React from 'react';

interface StoryProgressProps {
  currentStep: number;
  totalSteps: number;
}

const StoryProgress: React.FC<StoryProgressProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex gap-1 mb-4">
      
      {/* {
      Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded-full ${
            index < currentStep ? 'bg-blueAccent' : 'bg-lightGray'
          }`}
        ></div>
      ))} */}
      
      {
      
        <div
      
          className={`h-2 flex-1 rounded-full 
            bg-blueAccent
          `}
        ></div>
        }
      
    </div>
  );
};

export default StoryProgress;
