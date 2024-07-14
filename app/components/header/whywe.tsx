import { ILangPageProps } from "@/types/user";
import Link from "next/link";

const WhyWe: React.FC<ILangPageProps> = ({ lng }) => {
  return (
    <div>
      <Link
        href={`/${lng}/whyvenkoncommunications`}
        className="my-link"
        style={{
          color: "#463B90",
          fontWeight: "600",
          margin: "0px",
          textDecoration: "none", // Убедимся, что стиль не пропадет при переходе
          cursor: "pointer", // Указываем, что это ссылка
        }}
      >
        {lng === "ru"
          ? "Почему мы?"
          : lng === "en"
          ? "Why us?"
          : "Nima ushun biz?"}
      </Link>
    </div>
  );
};

export default WhyWe;
