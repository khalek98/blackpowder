import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { StaticImageData } from "next/image";

import { IconProps } from "@/assets/icons/IconProps";

import styles from "./Partners.module.scss";

import AireyeLogo from "./logos/AireyeLogo";
import XtendLogo from "./logos/XtendLogo";
import ISILogo from "./logos/ISILogo";
import IAILogo from "./logos/IAILogo";
import ThrivedxLogo from "./logos/ThrivedxLogo";
import AvnonLogo from "./logos/AvnonLogo";
import SANLogo from "./logos/SANLogo";
import SilverShadowLogo from "./logos/silver_shadow_logo.png";
import RoboticanLogo from "./logos/Robotican.png";
import PermoidLogo from "./logos/permoid_logo.png";
import HOSLogo from "./logos/HOSLogo";

const partnerLogos: {
  name: string;
  logoComponent?: React.FC<IconProps>;
  img?: StaticImageData;
  partnerLink: string;
}[] = [
  {
    name: "AirEye Ltd",
    logoComponent: AireyeLogo,
    partnerLink: "https://aireye.tech/",
  },
  {
    name: "Xtend defense",
    logoComponent: XtendLogo,
    partnerLink: "https://www.xtend.me/",
  },
  {
    name: "ImageSat International (ISI)",
    logoComponent: ISILogo,
    partnerLink: "https://imagesatintl.com/home/satellite-solutions/",
  },
  {
    name: "Avnon Group",
    logoComponent: AvnonLogo,
    partnerLink: "https://avnongroup.com/",
  },
  {
    name: "IAI",
    logoComponent: IAILogo,
    partnerLink: "https://www.iai.co.il",
  },
  {
    name: "HOS R&D",
    logoComponent: HOSLogo,
    partnerLink: "https://www.hosrnd.com/",
  },
  {
    name: "Permoid",
    img: PermoidLogo,
    partnerLink: "https://permoid.com/",
  },
  {
    name: "SAN LTD",
    logoComponent: SANLogo,
    partnerLink: "https://san.co.il/",
  },
  {
    name: "Robotican",
    img: RoboticanLogo,
    partnerLink: "https://robotican.net/",
  },
  {
    name: "ThriveDX",
    logoComponent: ThrivedxLogo,
    partnerLink: "https://thrivedx.com/",
  },
  {
    name: "Silver Shadow",
    img: SilverShadowLogo,
    partnerLink: "https://silver-shadow.com/about-silver-shadow/",
  },
];

const Partners = () => {
  const partnersContainerRef = useRef<HTMLDivElement>(null);
  const [currentCountElements, setCurrentCountElements] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (partnersContainerRef.current) {
      const elements = partnersContainerRef.current.children;
      let count = 0;

      for (let i = 0; i < elements.length; i++) {
        const element: HTMLElement = elements[i] as HTMLElement;

        if (element.computedStyleMap().get("display")?.toString() !== "none") {
          count++;
        }
      }
      setCurrentCountElements(count);
    }
  }, [partnersContainerRef, showMore]);

  return (
    <section id="partners" className={styles.section}>
      <div className={cn(styles.content)}>
        <div className={styles.head}>
          <h2 className={styles.label}>Working Together</h2>
          <h3 className={styles.title}>Our Partners {currentCountElements}</h3>

          <div
            ref={partnersContainerRef}
            className={cn(styles.logos, {
              [styles.hasLasChildOdd]: currentCountElements % 2 !== 0,
            })}
          >
            {partnerLogos.map(
              (
                { partnerLink, logoComponent: LogoComponent, img, name },
                index
              ) => (
                <div
                  key={index}
                  className={cn(styles.logoWrapper, {
                    [styles.show]: showMore,
                  })}
                >
                  <a
                    className={styles.logoLink}
                    href={partnerLink}
                    target="_blank"
                  >
                    {LogoComponent ? (
                      <LogoComponent
                        className={cn(styles.logo, styles.logoSVG)}
                      />
                    ) : img ? (
                      <Image
                        src={img}
                        alt={name}
                        width={img.width}
                        height={img.height}
                        className={cn(styles.logo, styles.logoImg)}
                      />
                    ) : null}
                  </a>
                </div>
              )
            )}

            {!showMore && (
              <div className={styles.seeMoreWrapper}>
                <p onClick={() => setShowMore(true)} className={styles.seeMore}>
                  See more...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
