export const dateFormatter = (date: number | Date, locale = 'pt-br'): string =>
  new Intl.DateTimeFormat(locale).format(new Date(date));
