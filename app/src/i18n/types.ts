export type Lang = "ko" | "en";

/**
 * A piece of content authored in both Korean and English.
 * `T` defaults to string but supports nested arrays, ReactNode, etc.
 */
export type Localized<T = string> = {
  ko: T;
  en: T;
};
