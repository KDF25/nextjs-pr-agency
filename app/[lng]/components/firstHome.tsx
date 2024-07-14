import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import { IHomePageProps } from "@/types/user";
import Image from "next/image";
import styles from "../styles/FirstHome.module.css";

const FirstHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  return (
    <div className="why-wrapper">
      {section?.blocks?.map((block) => (
        <div key={block.id}>
          <div className={styles.first_wrapper}>
            <div className={styles.first_texts}>
              <h1 className={styles.first_title}>{block?.texts[0]?.text}</h1>
              <h2 className={styles.first_text}>{block?.texts[1]?.text}</h2>
            </div>
            <div className={styles.first_img_wrap}>
              <Image
                className={styles.first_image}
                src={block?.files[0]?.url}
                alt={block?.files[0]?.alts[0]?.text}
                width={500}
                height={500}
                priority
              />
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

export default FirstHome;
