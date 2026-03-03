export function dateFormatter(date: Date | number, lang = 'en'): string {
  return new Intl.DateTimeFormat(lang === 'pt-br' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
