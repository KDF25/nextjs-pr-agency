import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import { IHomePageProps } from "@/types/user";
import Image from "next/image";
import styles from "../styles/ThirdSection.module.css";

const ThirdSection: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  return (
    <div className="why-wrapper">
      <div
        className={styles.third_wrapper}
        style={{ display: `${isAdmin && pageId && "flex"}` }}
      >
        <div className={styles.third_img_wrap}>
          <Image
            className={styles.third_image}
            src={section?.blocks[0]?.files[0]?.url}
            alt={section?.blocks[0]?.files[0]?.alts[0]?.text}
            width={1000}
            height={1000}
          />
        </div>
        <h3 className={styles.third_text}>
          {section?.blocks[0]?.texts[0]?.text}
        </h3>
      </div>
      {isAdmin && pageId && (
        <div>
          {section?.blocks.map((block) => (
            <ContentAdminEdit
              key={block.id}
              block={block}
              pageId={pageId}
              lng={lng}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThirdSection;
