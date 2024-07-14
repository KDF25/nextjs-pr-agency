import { IHomePageProps } from "@/types/user";
import styles from "../styles/SixthHome.module.css";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";

const SixthHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  return (
    <div className="why-wrapper">
      {section?.blocks?.map((block) => (
        <div key={block.id}>
          <div className={styles.sixth_wrapper}>
            <div className={styles.sixth_texts}>
              <h1 className={styles.sixth_title}>{block?.texts[0]?.text}</h1>
            </div>
          </div>
          {isAdmin && pageId && (
            <ContentAdminEdit
              key={block.id}
              block={block}
              pageId={pageId}
              lng={lng}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default SixthHome;
