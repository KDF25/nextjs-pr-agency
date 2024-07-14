import { getData } from "@/services/getData";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import FourthSection from "./components/fourthSection";
import ThirdSection from "./components/thirdSection";

export async function generateMetadata({ params: { lng } }) {
  const pageId = 3;
  const response = await getData(pageId, lng);
  return {
    title: response?.seo_title,
    description: response?.seo_description,
    keywords: response?.seo_keywords,
  };
}

export default async function WhyWe({ params: { lng } }) {
  const pageId = 3;
  const response = await getData(pageId, lng);
  return (
    <>
      <div>
        <div>
          <FirstSection section={response?.sections[0]} />
        </div>
        <div>
          <SecondSection section={response?.sections[1]} lng={lng} />
        </div>
        <div>
          <ThirdSection section={response?.sections[2]} lng={lng} />
        </div>
        <div>
          <FourthSection section={response?.sections[3]} lng={lng} />
        </div>
      </div>
    </>
  );
}
