import { ILangPageProps } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import Burger from "./burger/burger";
import Contact from "./contact";
import Language from "./language";
import WhyWe from "./whywe";

const TheHeader: React.FC<ILangPageProps> = async ({ lng }) => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="my-container"
      >
        <div className="img-block">
          <Link href={`/${lng}`}>
            <Image
              style={{
                width: "100%",
                height: "auto", // Чтобы сохранить пропорции изображения
              }}
              src="/logo-1.png"
              alt="логотип Venkon Communications"
              className="logo-header"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginRight: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="whywe-desktop">
              <WhyWe lng={lng} />
            </div>
            <Contact lng={lng} />
          </div>
          <div className="lang-desktop">
            <Language lng={lng} />
          </div>
          <div className="burger-desktop">
            <Burger lng={lng} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { TheHeader };
