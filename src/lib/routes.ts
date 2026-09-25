import type { CaseSlug, Locale } from '../content/site';

export function homePath(locale: Locale): string {
  return locale === 'uk' ? '/' : '/en/';
}

export function casePath(locale: Locale, slug: CaseSlug): string {
  const prefix = locale === 'uk' ? '' : '/en';
  return `${prefix}/cases/${slug}/`;
}

export function alternatePath(locale: Locale, path: string): string {
  const english = locale === 'en';
  const normalized = path.startsWith('/') ? path : `/${path}`;

  if (english) return normalized.replace(/^\/en(?=\/|$)/, '') || '/';
  return normalized === '/' ? '/en/' : `/en${normalized}`;
}
