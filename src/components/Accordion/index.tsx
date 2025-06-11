import { useState, useRef, FC, HTMLAttributes, useEffect } from "react";
import cn from "classnames";

import styles from "./Accordion.module.scss";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  accordionData: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ accordionData, className, ...props }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (contentRefs.current.length > 0) {
      setActiveIndex(1);
    }
  }, [accordionData]);

  return (
    <div {...props} className={cn(styles.accordion, className)}>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={cn(styles.accordionItem, { [styles.active]: activeIndex === index + 1 })}
        >
          <button className={cn(styles.accordionHeader)} onClick={() => toggleAccordion(index + 1)}>
            <h3 className={styles.accordionTitle}>{item.title}</h3>

            <div className={styles.accordionIcon}>
              <span></span>
              <span></span>
            </div>
          </button>

          <div
            ref={(content) => {
              if (index + 1 && content) {
                contentRefs.current[index] = content;
              }
            }}
            className={styles.accordionContent}
            style={{
              height:
                activeIndex === index + 1 ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
            }}
          >
            <>{item.content}</>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
