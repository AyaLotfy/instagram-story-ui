

import React, { useEffect, useRef, useState } from 'react';
import { SoundOutlined, SoundFilled, PlayCircleFilled, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import audioFile from '../../public/assets/new-recording-4-171501.mp3';

const AudioButton: React.FC = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setCurrentTime(audioRef.current.currentTime);
      // setDuration(audioRef.current.duration);
    }
  };
  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const target = event.target as HTMLInputElement; // Type assertion here
    if (audioRef.current) {
      const newTime = (parseFloat(target.value) / 100) * duration; // Use target.value
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  // useEffect(() => {
  //   const audioElement = audioRef.current;

  //   audioElement?.addEventListener('timeupdate', handleTimeUpdate);

  //   return () => {
  //     audioElement?.removeEventListener('timeupdate', handleTimeUpdate);
  //   };
  // }, []);
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('loadedmetadata', () => {
        setDuration(audioElement.duration);
      });

      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement && duration) {
      setCurrentTime(audioElement.currentTime);
    }
  }, [duration]);
  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-md">
    <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/assets/new-recording-4-171501.mp3`} preload="metadata" />
    <button
      onClick={toggleAudio}
      className="mb-4 p-2 bg-blue-600 rounded hover:bg-blue-500 transition"
    >
      {isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined/>}
    </button>
    <div className="flex items-center">
      <input
        type="range"
        min="0"
        max="100"
        value={duration ? (currentTime / duration) * 100 : 0}
        onChange={handleProgressChange}
        className="w-full h-2 bg-gray-600 rounded"
      />
      <span className="ml-2">
        {Math.floor(currentTime)} / {Math.floor(duration) || 0}
      </span>
    </div>
  </div>

  );
};

export default AudioButton;
