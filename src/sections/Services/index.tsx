import React, { Fragment } from "react";
import cn from "classnames";
import Image from "next/image";

import styles from "./Services.module.scss";

import DataCommandPlatformIMG from "./img/data_command_platforms.jpg";
import SecureCommunicationSystemsIMG from "./img/secure_communication_systems.jpg";
import SatelliteServicesIMG from "./img/satellite_services.jpg";
import DroneAntiDroneTechnologiesIMG from "./img/drone_anti-drone_technologies.jpg";
import CybersecurityIMG from "./img/cybersecurity.jpg";
import ManufacturingSolutionsIMG from "./img/manufacturing_solutions.jpg";
import TrianglesBGImg from "@/assets/img/triangles_bg.png";

const solutionList = [
  {
    title: "Data & Command Platforms",
    img: DataCommandPlatformIMG,
    description: [
      <p className={styles.solutionDescription}>
        We design and deploy modular platforms that give institutions full
        operational oversight. These systems consolidate data from sensors,
        personnel, satellite feeds, and third-party sources into one secure
        environment—enabling real-time monitoring, coordination, and informed
        decision-making.
      </p>,
      <p className={styles.solutionDescription}>
        Whether you're managing public safety, logistics, or environmental
        operations, our platforms are scalable, reliable, and tailored to your
        specific mission.
      </p>,
    ],
  },
  {
    title: "Secure Communication Systems",
    img: SecureCommunicationSystemsIMG,
    description: [
      <p className={styles.solutionDescription}>
        Our encrypted communication infrastructure ensures uninterrupted and
        confidential connectivity—even in remote, disrupted, or sensitive
        environments. Built for low-bandwidth scenarios, our systems support
        secure mobile, satellite, and radio communications.
      </p>,
      <p className={styles.solutionDescription}>
        Used by government agencies, crisis response teams, and infrastructure
        operators, our solutions are designed to function under pressure when it
        matters most.
      </p>,
    ],
  },
  {
    title: "Satellite Services",
    img: SatelliteServicesIMG,
    description: [
      <p className={styles.solutionDescription}>
        We provide advanced satellite intelligence services with global
        coverage. From infrastructure surveillance to environmental monitoring
        and emergency response, our systems translate satellite data into
        actionable insights.
      </p>,
      <p className={styles.solutionDescription}>
        This includes integration of imagery, heat mapping, and radar data to
        support real-time decisions in complex geographic and operational
        contexts.
      </p>,
    ],
  },
  {
    title: "Drone & Anti-Drone Technologies",
    img: DroneAntiDroneTechnologiesIMG,
    description: [
      <p className={styles.solutionDescription}>
        Our autonomous aerial systems are designed for tasks such as area
        surveillance, infrastructure inspection, mapping, and operational
        oversight. They feature long-range capabilities, real-time video, and
        autonomous route planning.
      </p>,
      <p className={styles.solutionDescription}>
        To help organizations manage airspace risks, our anti-drone systems
        offer detection, tracking, and mitigation tools—ensuring the security of
        critical zones and assets.
      </p>,
    ],
  },
  {
    title: "Cybersecurity",
    img: CybersecurityIMG,
    description: [
      <p className={styles.solutionDescription}>
        We offer multi-layered cybersecurity solutions to protect digital
        infrastructure from evolving threats. From threat detection and risk
        management to encryption and compliance tools, our systems are built to
        secure sensitive data and ensure uninterrupted operations.
      </p>,
      <p className={styles.solutionDescription}>
        Trusted by institutions in energy, transportation, public
        administration, and beyond, we help organizations strengthen their
        digital resilience.
      </p>,
    ],
  },
  {
    title: "Manufacturing Solutions",
    img: ManufacturingSolutionsIMG,
    description: [
      <p className={styles.solutionDescription}>
        We deliver high-precision, industrial-grade manufacturing services that
        support complex infrastructure and operational needs.
      </p>,
      <div className={styles.solutionDescriptionWithList}>
        <p className={styles.solutionDescription}>
          Our production capabilities include:
        </p>
        <ul className={styles.solutionDescriptionList}>
          <li className={styles.solutionDescriptionItem}>
            CNC machining of metal components
          </li>
          <li className={styles.solutionDescriptionItem}>
            High-accuracy laser cutting and welding
          </li>
          <li className={styles.solutionDescriptionItem}>
            Custom steel fabrication
          </li>
          <li className={styles.solutionDescriptionItem}>
            Modular container construction for equipment deployment or mobile
            operations
          </li>
        </ul>
      </div>,
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <Image
        src={TrianglesBGImg}
        alt="Triangles background"
        className={cn(styles.triangles, styles.triangles_1)}
        width={TrianglesBGImg.width}
        height={TrianglesBGImg.height}
      />
      <Image
        src={TrianglesBGImg}
        alt="Triangles background"
        className={cn(styles.triangles, styles.triangles_2)}
        width={TrianglesBGImg.width}
        height={TrianglesBGImg.height}
      />

      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={styles.label}>What we do</h2>
          <h3 className={styles.title}>Our Services</h3>
        </div>

        <ul className={styles.solutionList}>
          {solutionList.map((solution, index) => (
            <li className={styles.solutionItem} key={index}>
              <h4 className={styles.solutionTitle}>{solution.title}</h4>
              <img
                src={solution.img.src}
                alt={solution.title}
                className={styles.solutionImage}
              />

              <div className={styles.solutionDescriptionWrapper}>
                {solution.description.map((description, index) => (
                  <Fragment key={index}>{description}</Fragment>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
