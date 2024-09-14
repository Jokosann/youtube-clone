import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

export const formatPublishTime = (publishTime: Date | string) => {
  const text = formatDistanceToNow(new Date(publishTime), { addSuffix: true });
  const result = text.replace(/\babout\b/g, '');
  return result.trim();
};

export const formatPublishTimeDetail = (publishTime: string) => {
  const date = parseISO(publishTime);
  return format(date, 'd MMM yyyy', { locale: id });
};
