"use client";

import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import ContentAdminRemove from "@/app/adminvenkon/components/contentAdminRemove";
import { IHomePageProps } from "@/types/user";
import Image from "next/image";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/SecondSection.module.css";

const SecondSection: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  return (
    <div className="why-wrapper">
      <h2 className={styles.why_sec_title}>
        {lng === "ru"
          ? "Наши возможности"
          : lng === "en"
          ? "Our possibilities"
          : "Bizning imkoniyatlarimiz"}
      </h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {section?.blocks.map((block, index) => (
          <SwiperSlide key={index}>
            <div className={styles.sec_wrapper}>
              <h3 className={styles.sec_text}>{block?.texts[0]?.text}</h3>
              <div key={block.id} className={styles.sec_img_wrap}>
                <Image
                  className={styles.sec_image}
                  src={block?.files[0]?.url}
                  alt={block?.files[0]?.alts[0]?.text}
                  width={500}
                  height={500}
                />
              </div>
            </div>
            {isAdmin && pageId && (
              <div>
                <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
                <ContentAdminRemove blockId={block.id} pageId={pageId} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {isAdmin && pageId && (
        <ContentAdminAdd
          block={section?.blocks[0]}
          sectionId={section?.id}
          pageId={pageId}
        />
      )}
    </div>
  );
};

export default SecondSection;
