"use client";

import FirstSection from "@/app/[lng]/whyvenkoncommunications/components/firstSection";
import FourthSection from "@/app/[lng]/whyvenkoncommunications/components/fourthSection";
import SecondSection from "@/app/[lng]/whyvenkoncommunications/components/secondSection";
import ThirdSection from "@/app/[lng]/whyvenkoncommunications/components/thirdSection";
import { languageEnum, languages } from "@/app/i18n/settings";
import { getData } from "@/services/getData";
import { IUserData } from "@/types/user";
import { useContext, useEffect, useState } from "react";
import SeoAdmin from "../components/seoAdmin";
import { AuthContext } from "../context";

export default function WhyUsAdmin() {
  const { isAuth } = useContext(AuthContext);
  const [data, setData] = useState<{ [x: string]: IUserData }[]>([]);
  const pageId = 3;
  const Sections = [FirstSection, SecondSection, ThirdSection, FourthSection];

  useEffect(() => {
    const fetchData = async () => {
      const promises = languages.map((lang) =>
        getData(pageId, lang).then((data) => ({ [lang]: data }))
      );
      const results = await Promise.all(promises);
      setData(results);
    };
    fetchData();
  }, []);

  return (
    <>
      {isAuth ? (
        <div>
          {data.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <div
                style={{
                  marginBottom: "20px",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                SEO | Why us page
              </div>
              {languages.map((lang, index) => (
                <SeoAdmin
                  key={index}
                  seo={data[index]?.[lang]}
                  lng={languageEnum[lang]}
                  pageId={pageId}
                />
              ))}
              <div>
                <div
                  style={{
                    marginBottom: "20px",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                >
                  Content | Why us page
                </div>
                {Sections.map((SectionComponent, secIndex) => (
                  <div key={secIndex}>
                    {languages.map((lang, index) => (
                      <SectionComponent
                        key={index}
                        lng={languageEnum[lang]}
                        pageId={pageId}
                        section={data[index]?.[lang]?.sections[secIndex]}
                        isAdmin={isAuth}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>Вы не админ...</div>
      )}
    </>
  );
}
