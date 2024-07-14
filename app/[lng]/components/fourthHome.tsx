import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import { IHomePageProps } from "@/types/user";
import styles from "../styles/FourthHome.module.css";

const FourthHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  return (
    <div className="why-wrapper">
      <div className={styles.fourth_title_block}>
        <h2 className={styles.fourth_main_title}>
          {lng === "ru"
            ? "Наши услуги"
            : lng === "en"
            ? "Our services"
            : "Bizning xizmatlar"}
        </h2>
        <h3 className={styles.fourth_sec_title}>
          {lng === "ru"
            ? "Вот еще некоторые наши возможности:"
            : lng === "en"
            ? "Here are some of our other options:"
            : "Bizning ayrim boshqa imkoniyatlarimiz bilan tanishing:"}
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
