import React, { useEffect, useRef } from "react";

import styles from "./Video.module.scss";

const Video = () => {
  const [showControls, setShowControls] = React.useState(false);

  return (
    <section id="video" className={styles.section}>
      <video
        onClick={() => setShowControls(!showControls)}
        className={styles.video}
        autoPlay
        playsInline
        controls={showControls}
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
