import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import { useTranslation } from "@/app/i18n";
import { IHomePageProps } from "@/types/user";
import styles from "../styles/FourthHome.module.css";

const FourthHome: React.FC<IHomePageProps> = async ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="why-wrapper">
      <div className={styles.fourth_title_block}>
        <h2 className={styles.fourth_main_title}>
          {t("HomePage.FourthHome.title")}
        </h2>
        <h3 className={styles.fourth_sec_title}>
          {t("HomePage.FourthHome.subtitle")}
        </h3>
      </div>
      <div className={styles.fourth_wrapper}>
        {section?.blocks.map((block, index) => (
          <div
            key={block.id}
            className={styles.fourth_block}
            style={{
              background:
                index === 0 ? "#EEF8FF" : index === 1 ? "#EEF2FF" : "#F5EEFF",
            }}
          >
            <h3 className={styles.fourth_title}>{block?.texts[0].text}</h3>
            <div className={styles.fourth_text_wrap}>
              <p className={styles.fourth_text}>{block?.texts[1].text}</p>
            </div>
            {isAdmin && pageId && (
              <div>
                <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthHome;
