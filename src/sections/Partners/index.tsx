import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion, Variants } from 'motion/react';

import styles from './Partners.module.scss';

import { IconProps } from '@/assets/icons/IconProps';
import AireyeLogo from './logos/AireyeLogo';
import XtendLogo from './logos/XtendLogo';
import ISILogo from './logos/ISILogo';
import IAILogo from './logos/IAILogo';
import ThrivedxLogo from './logos/ThrivedxLogo';
import AvnonLogo from './logos/AvnonLogo';
import SANLogo from './logos/SANLogo';
import SilverShadowLogo from './logos/silver_shadow_logo.png';
import RoboticanLogo from './logos/Robotican.png';
import PermoidLogo from './logos/permoid_logo.png';
import HOSLogo from './logos/HOSLogo';
import TrianglesBGImg from '@/assets/img/triangles_bg.png';
import hiSkyLogo from './logos/hiSkyLogo';

const partnerLogos: {
  name: string;
  logoComponent?: React.FC<IconProps>;
  img?: StaticImageData;
  partnerLink: string;
}[] = [
  {
    name: 'AirEye Ltd',
    logoComponent: AireyeLogo,
    partnerLink: 'https://aireye.tech/',
  },
  {
    name: 'Xtend defense',
    logoComponent: XtendLogo,
    partnerLink: 'https://www.xtend.me/',
  },
  {
    name: 'ImageSat International (ISI)',
    logoComponent: ISILogo,
    partnerLink: 'https://imagesatintl.com/home/satellite-solutions/',
  },
  {
    name: 'Avnon Group',
    logoComponent: AvnonLogo,
    partnerLink: 'https://avnongroup.com/',
  },
  {
    name: 'IAI',
    logoComponent: IAILogo,
    partnerLink: 'https://www.iai.co.il',
  },
  {
    name: 'HOS R&D',
    logoComponent: HOSLogo,
    partnerLink: 'https://www.hosrnd.com/',
  },
  {
    name: 'Permoid',
    img: PermoidLogo,
    partnerLink: 'https://permoid.com/',
  },
  {
    name: 'SAN LTD',
    logoComponent: SANLogo,
    partnerLink: 'https://san.co.il/',
  },
  {
    name: 'Robotican',
    img: RoboticanLogo,
    partnerLink: 'https://robotican.net/',
  },
  {
    name: 'ThriveDX',
    logoComponent: ThrivedxLogo,
    partnerLink: 'https://thrivedx.com/',
  },
  {
    name: 'Silver Shadow',
    img: SilverShadowLogo,
    partnerLink: 'https://silver-shadow.com/about-silver-shadow/',
  },
  {
    name: 'hiSky',
    logoComponent: hiSkyLogo,
    partnerLink: 'https://hiskysat.com/company/',
  },
];

const Partners = () => {
  const partnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentCountElements, setCurrentCountElements] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const visibleCount = partnerRefs.current.reduce((count, el) => {
      if (!el) return count;
      const display = getComputedStyle(el).display;
      return display !== 'none' ? count + 1 : count;
    }, 0);

    setCurrentCountElements(visibleCount);
  }, [partnerRefs, showMore]);

  return (
    <section id="partners" className={styles.section}>
      <Image
        src={TrianglesBGImg}
        alt="Triangles background"
        className={cn(styles.triangles, styles.triangles_1)}
        width={TrianglesBGImg.width}
        height={TrianglesBGImg.height}
      />

      <div className={cn(styles.content)}>
        <div className={styles.head}>
          <h2 className={styles.label}>Working Together</h2>
          <h3 className={styles.title}>Our Partners</h3>

          <div
            className={cn(styles.logos, {
              [styles.hasLasChildOdd]: (currentCountElements + (!showMore ? 1 : 0)) % 2 !== 0,
            })}
          >
            {partnerLogos.map(({ partnerLink, logoComponent: LogoComponent, img, name }, index) => (
              <div
                ref={(el) => {
                  if (el) {
                    partnerRefs.current[index] = el;
                  }
                }}
                key={index}
                className={cn(styles.logoWrapper, {
                  [styles.show]: showMore,
                })}
              >
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 1 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  className={styles.logoLink}
                  href={partnerLink}
                  target="_blank"
                  style={{
                    maxHeight: name === 'HOS R&D' ? '50px' : undefined,
                  }}
                >
                  {LogoComponent ? (
                    <LogoComponent className={cn(styles.logo, styles.logoSVG)} />
                  ) : img ? (
                    <img src={img.src} alt={name} className={cn(styles.logo, styles.logoImg)} />
                  ) : null}
                </motion.a>
              </div>
            ))}

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
