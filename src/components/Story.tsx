// src/components/Story.tsx
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { StoryPage } from '../types/StroyPage';

interface StoryProps {
  story: StoryPage;

}

const randomLayoutClasses = [
  'justify-center items-center',
  'justify-start items-start',
  'justify-end items-end',
  'justify-center items-end',
  'justify-center items-start',
];

const Story: React.FC<StoryProps> = ({ story
  }) => {
  const [layoutClass, setLayoutClass] = useState('');

  useEffect(() => {
    setLayoutClass(randomLayoutClasses[Math.floor(Math.random() * randomLayoutClasses.length)]);
  }, [story]);

  return (

  <div className="text-center">
      <img
        src={story.img}
        alt="story"
        className="rounded-lg shadow-md w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto mb-4"
      />
      <p className="text-lightGray mb-4">{story.content}</p>
     
    </div>
  );
};

export default Story;
