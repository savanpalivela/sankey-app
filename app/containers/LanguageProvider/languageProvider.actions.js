/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './languageProvider.constants';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
