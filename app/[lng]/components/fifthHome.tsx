"use client";

import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import ContentAdminRemove from "@/app/adminvenkon/components/contentAdminRemove";
import { useTranslation } from "@/app/i18n/client";
import { IHomePageProps } from "@/types/user";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/FifthHome.module.css";

const FifthHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const { t } = useTranslation(lng);
  return (
    <div className="why-wrapper">
      <h2 className={styles.fifth_main_title}>
        {t("HomePage.FifthHome.title")}
      </h2>
      <Swiper
        className={styles.my_swiper}
        slidesPerView={isMobile ? 1.1 : 1}
        loop={true}
        navigation={isMobile ? false : true}
        modules={[Navigation]}
      >
        {section?.blocks.map((block, index) => (
          <SwiperSlide key={index}>
            <div className={styles.fifth_wrapper}>
              <div className={styles.fifth_img_wrap}>
                <Image
                  className={styles.fifth_image}
                  src={block?.files[0]?.url}
                  alt={block?.files[0]?.alts[0]?.text}
                  width={1500}
                  height={1500}
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

export default FifthHome;
