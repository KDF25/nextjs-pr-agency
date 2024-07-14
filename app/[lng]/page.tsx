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

  return (
    <>
      <div>
        <FirstHome section={response?.sections[0]} lng={lng} />
      </div>
      <div>
        <SecondHome section={response?.sections[1]} lng={lng} />
      </div>
      <div>
        <ThirdHome section={response?.sections[2]} lng={lng} />
      </div>
      <div>
        <FourthHome section={response?.sections[3]} lng={lng} />
      </div>
      <div>
        <FifthHome section={response?.sections[4]} lng={lng} />
      </div>
      <div>
        <SixthHome section={response?.sections[5]} lng={lng} />
      </div>
      <div>
        <SeventhHome section={response?.sections[6]} lng={lng} />
      </div>
      <div>
        <EighthHome lng={lng} />
      </div>
    </>
  );
}
