import React, { useEffect, useRef } from "react";

import styles from "./Video.module.scss";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playVideo, setPlayVideo] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || playVideo) return;

      const rect = videoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Сколько пикселей нужно доскроллить до 20% от верха экрана
      const triggerPoint = windowHeight * 0.2;

      if (rect.top < windowHeight - triggerPoint) {
        videoRef.current.play();
        setPlayVideo(true); // чтобы не запускалось повторно
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [playVideo]);

  return (
    <section id="video" className={styles.section}>
      <video
        ref={videoRef}
        className={styles.video}
        src="/satellite_video.mp4"
        autoPlay={playVideo}
        controls
        controlsList="nodownload"
        muted
        loop
      />
    </section>
  );
};

export default Video;
