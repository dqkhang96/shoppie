import I18n from "i18n-js";

import en from '../config/locales/en';
import vi from '../config/locales/vi';


const CustomI18n = I18n;


export const changeLanguage=(lang)=>{
  CustomI18n.locale=lang
}
CustomI18n.fallbacks = true;
CustomI18n.translations = {
  en,
  vi,
};

export default CustomI18n;