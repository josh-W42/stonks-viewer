export const formatNewsDate = (val: string): string => {
  const dateArray: string[] = [];
  for (let i = 0; i < val.length; i++) {
    if (i === 4) {
      dateArray.push('-');
    }

    if (i === 6) {
      dateArray.push('-');
    }

    if (i === 11) {
      dateArray.push(':');
    }

    if (i === 13) {
      dateArray.push(':');
    }

    dateArray.push(val[i]);
  }

  const date = new Date(dateArray.join(''));
  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
};
