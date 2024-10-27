// src/components/StoryNavigation.tsx

import React, { useState, useEffect, useCallback, useRef } from 'react';

import { Progress } from 'antd';
import { LeftOutlined, PauseCircleOutlined, PlayCircleOutlined, RightOutlined } from '@ant-design/icons';

import Story from './Story';
import AudioButton from './AudioButton';
import { StoryPage } from '../types/StroyPage'
import StoryProgress from './StoryProgress';

interface StoryNavigationProps {
  stories: StoryPage[];
}

const StoryNavigation: React.FC<StoryNavigationProps> = ({ stories }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);


 

  useEffect(() => {
    if (progress >= 100) {
      goToNextStory();
    }
  }, [progress]);


  useEffect(() => {
    const timer = setInterval(() => setProgress((prev) => prev + 1), 100);
    return () => clearInterval(timer);
  }, [currentIndex]);


  const goToNextStory = useCallback(() => {
    setProgress(0);
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, stories.length]);


  const goToPreviousStory = () => {
    setProgress(0);
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleTap = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const screenWidth = window.innerWidth;
    if (e.clientX > screenWidth / 2) {
      goToNextStory();
    } else {
      goToPreviousStory();
    }
  };
  return (

    <div onClick={handleTap} className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center my-6 text-blueAccent">
        {stories[currentIndex].title}
      </h1>
      {/* <StoryProgress currentStep={currentIndex + 1} totalSteps={stories.length} /> */}

      <Story
        story={stories[currentIndex]}

      />
      <div className="flex justify-between">
        <button
          onClick={goToPreviousStory}
          disabled={currentIndex === 0}
          // className="bg-lightGray text-black px-4 py-2 rounded disabled:opacity-50"
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-2 text-3xl rounded-full 
          ${currentIndex === 0 ? 'text-gray-500' : NaN}
          `}

        >
          <LeftOutlined />
        </button>
        <button
          onClick={goToNextStory}
          disabled={currentIndex === stories.length - 1}
          // className="bg-lightGray text-black px-4 py-2 rounded disabled:opacity-50"
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-2 text-3xl rounded-full 
          ${currentIndex === stories.length - 1 ? 'text-gray-500' : NaN}
          `}

        >
          <RightOutlined />
        </button>
      </div>



      <AudioButton></AudioButton>
      {/* <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" /> */}

    </div>

  );
};

export default StoryNavigation;
