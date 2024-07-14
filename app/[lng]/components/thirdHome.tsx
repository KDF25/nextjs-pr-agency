import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import { IHomePageProps } from "@/types/user";
import Image from "next/image";
import styles from "../styles/ThirdHome.module.css";
import { useTranslation } from "@/app/i18n";

const ThirdHome: React.FC<IHomePageProps> = async ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const { t } = await useTranslation(lng);
  return (
    <div className="why-wrapper">
      <h2 className={styles.third_main_title}>
        {t("HomePage.ThirdHome.title")}
      </h2>
      <div className={styles.third_wrapper}>
        <div className={styles.third_texts}>
          {section?.blocks.slice(1).map((block) => (
            <div key={block.id} className={styles.third_text_block}>
              <h3 className={styles.third_title}>{block?.texts[0]?.text}</h3>
              <p className={styles.third_text}>{block?.texts[1]?.text}</p>
              {isAdmin && pageId && (
                <div>
                  <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.third_img_wrap}>
          <Image
            className={styles.third_image}
            src={section?.blocks[0]?.files[0]?.url}
            alt={section?.blocks[0]?.files[0]?.alts[0]?.text}
            width={500}
            height={500}
          />
        </div>
        {isAdmin && pageId && (
          <div>
            <ContentAdminEdit
              block={section?.blocks[0]}
              pageId={pageId}
              lng={lng}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdHome;
