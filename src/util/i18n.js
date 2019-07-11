import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "../config/locales/en";
import vi from "../config/locales/vi";

const CustomI18n = I18n;
const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  CustomI18n.locale = locales[0].languageTag;
  console.error(CustomI18n.locale)
}

CustomI18n.fallbacks = true;
CustomI18n.translations = {
  en,
  vi,
};

export default CustomI18n;