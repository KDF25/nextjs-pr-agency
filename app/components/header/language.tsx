"use client";

import { languageEnum, languages } from "@/app/i18n/settings";
import { ILangPageProps } from "@/types/user";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Language: React.FC<ILangPageProps> = ({ lng }) => {
  const [hoverStates, setHoverStates] = useState<{
    [key in languageEnum]: boolean;
  }>(
    languages.reduce((obj, lang) => {
      obj[lang] = false;
      return obj;
    }, {} as { [key in languageEnum]: boolean })
  );
  const [showLang, setShowLang] = useState(false);
  const pathname = usePathname();
  const segments = pathname.split("/");
  const path =
    segments.length > 2 ? `/${segments[segments.length - 1]}` : false;

  const handleLang = () => {
    setShowLang(!showLang);
  };

  const handleHover = (lang: languageEnum, isHovered: boolean) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [lang]: isHovered,
    }));
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !(
          event.target instanceof HTMLElement &&
          event.target.closest(".lang__block")
        )
      ) {
        setShowLang(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div onClick={handleLang} className="lang__block">
      <span>{lng.toUpperCase()}</span>
      <IoIosArrowDown style={{ marginLeft: "5px" }} />
      <div className="lang" style={{ display: !showLang ? "none" : undefined }}>
        {languages.map((lang) => (
          <Link
            key={lang}
            href={path ? `/${lang + path}` : `/${lang}`}
            className="languages"
            onMouseEnter={() => handleHover(lang, true)}
            onMouseLeave={() => handleHover(lang, false)}
            style={{
              color:
                lng === lang || hoverStates[lang]
                  ? "rgb(68, 180, 255)"
                  : "rgb(100,100,100)",
            }}
          >
            <div className="lang__item">{lang.toUpperCase()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Language;
