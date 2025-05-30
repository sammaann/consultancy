const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  ja: () => import("../dictionaries/ja.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Default to 'en' if the locale is not supported
  if (locale !== "en" && locale !== "ja") {
    locale = "en"
  }
  return dictionaries[locale as "en" | "ja"]()
}
