export enum languageEnum {
    ru = "ru",
    uz = "uz",
    en = "en"
}

export const fallbackLng = languageEnum.ru;
export const languages: languageEnum[] = [fallbackLng, languageEnum.uz, languageEnum.en];


