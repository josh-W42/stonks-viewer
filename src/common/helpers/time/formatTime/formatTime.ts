/**
 * Retrieves the appropriate formatted time from a date object.
 * @param date - A Date object.
 * @returns - A string representing the number of hours in 12 hour format and minutes.
 */
export const formatTime = (date: Date): string => {
  let output = '';

  if (date.getHours() > 12) {
    output += `${date.getHours() - 12}`;
  } else {
    output += date.getHours();
  }

  if (date.getMinutes() < 10) {
    output += `:0${date.getMinutes()}`;
  } else {
    output += `:${date.getMinutes()}`;
  }

  if (date.getHours() > 11) {
    output += ' PM';
  } else {
    output += ' AM';
  }

  return output;
};
