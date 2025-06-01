import React, { useEffect, useRef } from "react";

import styles from "./Video.module.scss";

const Video = () => {
  return (
    <section id="video" className={styles.section}>
      <video
        className={styles.video}
        autoPlay
        playsInline
        controls
        controlsList="nodownload"
        poster="/satellite_poster.webp"
        muted
        loop
      >
        <source src="satellite_video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
