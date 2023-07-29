// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import {I18n} from 'i18n-js';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';
export const translationGetters = {
  'es-US': () => require('./translations/es.json'),
  'en-US': () => require('./translations/en.json'),
  'fr-FR': () => require('./translations/fr.json'),
};

const i18n = new I18n({});

export const FCLocalized = memoize(
  (key: any, config: any) =>
    i18n.t(key, config).includes('missing') ? key : i18n.t(key, config),
  (key: any, config: any) => (config ? key + JSON.stringify(config) : key),
);
export const init = () => {
    
  let localeLanguageTag = Localization.locale;
  let isRTL = Localization.isRTL;
  FCLocalized.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    [localeLanguageTag]: translationGetters[localeLanguageTag](),
  };
  i18n.locale = localeLanguageTag;
};