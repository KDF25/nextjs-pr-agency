"use client";

import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import ContentAdminRemove from "@/app/adminvenkon/components/contentAdminRemove";
import { IHomePageProps } from "@/types/user";
import { useMediaQuery } from "react-responsive";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/SeventhHome.module.css";

const SeventhHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return (
    <div className="why-wrapper">
      <Swiper
        className={styles.seventh_wrapper}
        slidesPerView={isMobile ? 1.2 : 1}
        loop={true}
        navigation={isMobile ? false : true}
        pagination={isMobile ? false : true}
        modules={[Navigation, Pagination]}
      >
        {section?.blocks.map((block, index) => (
          <SwiperSlide key={block.id}>
            <div
              className={styles.seventh_block}
              style={{
                background:
                  index % 3 === 0
                    ? "#EEF8FF"
                    : index % 3 === 1
                    ? "#EEF2FF"
                    : "#F5EEFF",
              }}
            >
              <h3 className={styles.seventh_title}>{block?.texts[0].text}</h3>
              <div className={styles.seventh_text_wrap}>
                <p className={styles.seventh_text}>{block?.texts[1].text}</p>
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

export default SeventhHome;
