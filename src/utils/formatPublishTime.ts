import { formatDistanceToNow } from 'date-fns';

export const formatPublishTime = (publishTime: Date) => {
  const text = formatDistanceToNow(new Date(publishTime), { addSuffix: true });
  const result = text.replace(/\babout\b/g, '');
  return result.trim();
};
