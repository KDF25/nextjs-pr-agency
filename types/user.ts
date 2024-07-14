import { languageEnum } from "@/app/i18n/settings";

export interface IUserData {
    id: number;
    name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    sections: ISection[];
  }
  
export interface ISection {
    id: number;
    name: string;
    blocks: IBlock[];
  }
  
  interface IBlock {
    id: number;
    name: string;
    files: IFile[];
    texts: IText[];
  }
  
  interface IFile {
    id: number;
    url: string;
    alts: IAlt[];
  }
  
  interface IAlt {
    id: number;
    text: string;
    language: languageEnum
  }
  
  interface IText {
    id: number;
    text: string;
    language: languageEnum
  }
  

 export interface IMailData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
  }

export interface ILangPageProps {
  lng: languageEnum
}

export interface IHomePageProps {
  section: ISection;
  isAdmin?: boolean;
  pageId?: number;
  lng: languageEnum;
}