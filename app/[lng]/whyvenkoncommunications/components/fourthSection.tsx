"use client";

import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import ContentAdminRemove from "@/app/adminvenkon/components/contentAdminRemove";
import { useTranslation } from "@/app/i18n/client";
import { IHomePageProps } from "@/types/user";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/FourthSection.module.css";
import titleStyle from "../styles/SecondSection.module.css";

const FourthSection: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const { t } = useTranslation(lng);
  const [expandedBlocks, setExpandedBlocks] = useState(
    Array(section?.blocks.length).fill(false)
  );
  const handleMouseEnter = (index: number) => {
    setExpandedBlocks((prevBlocks) =>
      prevBlocks.map((value, i) => (i === index ? true : false))
    );
  };
  const handleMouseLeave = (index: number) => {
    setExpandedBlocks((prevBlocks) =>
      prevBlocks.map((value, i) => (i === index ? false : value))
    );
  };
  return (
    <div className="why-wrapper">
      <h2 className={titleStyle.why_sec_title}>
        {t("WhyPage.FourthSection.title")}
      </h2>
      <div className={styles.fourth_projects}>
        {section?.blocks.map((block, index) => (
          <div key={block.id}>
            <div className={styles.fourth_img_wrap}>
              <div
                className={`${styles.fourth_text_overlay} ${
                  expandedBlocks[index] ? styles.expanded : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onTouchStart={() => handleMouseEnter(index)}
              >
                <h3 className={styles.fourth_text_title}>
                  {block.texts[0].text}
                </h3>
                <p className={styles.fourth_text_text}>{block.texts[1].text}</p>
              </div>
              <Image
                className={styles.fourth_image}
                src={block?.files[0]?.url}
                alt={block?.files[0]?.alts[0]?.text}
                width={1500}
                height={1500}
                loading="lazy"
              />
            </div>
            <div style={{ marginBottom: "20px", marginTop: "-5px" }}>
              {isAdmin && pageId && (
                <div>
                  <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
                  <ContentAdminRemove blockId={block.id} pageId={pageId} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isAdmin && pageId && (
        <ContentAdminAdd
          block={section?.blocks[0]}
          pageId={pageId}
          sectionId={section?.id}
        />
      )}
    </div>
  );
};

export default FourthSection;
