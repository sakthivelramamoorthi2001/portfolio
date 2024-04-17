import english from "@i18n/en.json";
import spanish from "@i18n/es.json";

const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "en",
};

export const getI18n = ({
  currentLocale = "en",
}: {
  currentLocale?: string | undefined;
}) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  // if (currentLocale === LANGUAGES.SPANISH) return spanish;
  return english;
};
