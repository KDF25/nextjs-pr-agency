import { TheFooter } from "@/app/components/footer";
import { TheHeader } from "@/app/components/header/header";
import { ILangPageProps } from "@/types/user";
import "bootstrap/dist/css/bootstrap.css";
import { dir } from "i18next";
import { appWithTranslation } from 'next-i18next';
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { ReactNode } from "react";
import "../global.css";
import { languages } from "../i18n/settings";

interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt?: string;
    }[];
    locale: string;
    type: string;
  };
}

export const metadata: Metadata = {
  title: "Venkon Communications",
  description: "Пиар агентство",
  openGraph: {
    title: "Рекламное Агентство в Ташкенте | Venkon Communications",
    description:
      "Venkon Communications - пиар агентство полного цикла. Команда сильных специалистов и профессионалов своего дела помогут вам продвигать ваш бизнес с максимальной отдачей.",
    url: "https://vencom.uz",
    siteName: "Venkon Communication",
    images: [
      {
        url: "/logo-1.png",
        width: 800,
        height: 600,
      },
      {
        url: "/logo-1.png",
        width: 1800,
        height: 1600,
        alt: "Venkon Communications",
      },
    ],
    locale: "uz-UZ",
    type: "website",
  },
};

interface StaticParams {
  lng: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
  children: ReactNode;
  params: ILangPageProps;
}

const montserrat = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { lng },
}) => {
  return (
    <>
      <html lang={lng} dir={dir(lng)}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <style>{`@font-face { ${montserrat} }`}</style>
        </Head>
        <body>
          <main className="wrapper">
            <TheHeader lng={lng} />
            <div className="my-container">{children}</div>
            <TheFooter lng={lng} />
          </main>
        </body>
      </html>
    </>
  );
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <RootLayout params={{ lng: pageProps.lng, }} children={Component as unknown as ReactNode} />;
};

// export default appWithTranslation(MyApp);
export default RootLayout;

