export const formatViewCount = (count: number) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 100000) {
    return (count / 100000).toFixed(1) + 'K';
  } else if (count >= 10000) {
    return (count / 10000).toFixed(1) + 'K';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K';
  } else {
    return count?.toString();
  }
};
