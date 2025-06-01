import React, { useEffect, useRef } from "react";

import styles from "./Video.module.scss";

const Video = () => {
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // const [playVideo, setPlayVideo] = React.useState(false);
  // const [showControls, setShowControls] = React.useState(false);

  // useEffect(() => {
  //   const handleScroll = async () => {
  //     if (!videoRef.current || playVideo) return;

  //     videoRef.current.load();

  //     const rect = videoRef.current.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;

  //     const triggerPoint = windowHeight * 0.2;

  //     if (rect.top < windowHeight - triggerPoint) {
  //       videoRef.current.currentTime = 0;

  //       setPlayVideo(true);
  //     }
  //   };

  //   if (videoRef.current) {
  //     videoRef.current.addEventListener("playing", () => {
  //       videoRef.current?.play();
  //     });
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [playVideo]);

  return (
    <section id="video" className={styles.section}>
      <video
        // onClick={() => setShowControls(true)}
        // onMouseLeave={() => setShowControls(false)}
        // onMouseEnter={() => setShowControls(true)}
        // ref={videoRef}
        className={styles.video}
        autoPlay
        playsInline
        // controls={showControls}
        controlsList="nodownload"
        // poster="/satellite_poster.png"
        muted
        loop
      >
        <source src="satellite_video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
