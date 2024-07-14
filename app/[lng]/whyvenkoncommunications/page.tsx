import { getData } from "@/services/getData";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import FourthSection from "./components/fourthSection";
import ThirdSection from "./components/thirdSection";
import { ILangPageProps } from "@/types/user";

export async function generateMetadata({
  params: { lng },
}: {
  params: ILangPageProps;
}) {
  const pageId = 3;
  const response = await getData(pageId, lng);
  return {
    title: response?.seo_title,
    description: response?.seo_description,
    keywords: response?.seo_keywords,
  };
}

export default async function WhyWe({
  params: { lng },
}: {
  params: ILangPageProps;
}) {
  const pageId = 3;
  const response = await getData(pageId, lng);
  const Sections = [FirstSection, SecondSection, ThirdSection, FourthSection];

  return (
    <>
      <div>
        {Sections.map((SectionComponent, index) => (
          <div key={index}>
            <SectionComponent section={response?.sections[index]} lng={lng} />
          </div>
        ))}
      </div>
    </>
  );
}
