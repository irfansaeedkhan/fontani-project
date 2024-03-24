"use client";

import React, { useState, useEffect, useRef } from "react";

const VideoPLayer = ({ videoSrc, muted = false, loop = true }) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const observerRef = useRef(null);

  const handleVisibilityChange = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsPlaying(true);
      videoRef.current.play();
    } else {
      setIsPlaying(false);
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleVisibilityChange);
    observerRef.current.observe(videoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      autoPlay={isPlaying}
      muted={muted}
      loop={loop}
    />
  );
};

export default VideoPLayer;
