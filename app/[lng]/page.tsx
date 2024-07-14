import { getData } from "@/services/getData";
import FirstHome from "./components/firstHome";
import SecondHome from "./components/secondHome";
import ThirdHome from "./components/thirdHome";
import FourthHome from "./components/fourthHome";
import FifthHome from "./components/fifthHome";
import SixthHome from "./components/sixthHome";
import EighthHome from "./components/eighthHome";
import SeventhHome from "./components/seventhHome";
import { ILangPageProps } from "@/types/user";

export async function generateMetadata({
  params: { lng },
}: {
  params: ILangPageProps;
}) {
  const pageId = 2;
  const response = await getData(pageId, lng);
  return {
    title: response?.seo_title,
    description: response?.seo_description,
    keywords: response?.seo_keywords,
  };
}

export default async function Home({
  params: { lng },
}: {
  params: ILangPageProps;
}) {
  const pageId = 2;
  const response = await getData(pageId, lng);
  const Sections = [
    FirstHome,
    SecondHome,
    ThirdHome,
    FourthHome,
    FifthHome,
    SixthHome,
    SeventhHome,
  ];

  return (
    <>
      {Sections.map((SectionComponent, index) => (
        <div key={index}>
          <SectionComponent section={response?.sections[index]} lng={lng} />
        </div>
      ))}
      <div>
        <EighthHome lng={lng} />
      </div>
    </>
  );
}
