/**
 * Retrieves the appropriate formatted time from a date object.
 * @param date - A Date object.
 * @returns - A string representing the number of hours in 12 hour format and minutes.
 */
export const getTime = (date: Date): string => {
  return `${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  } ${date.getHours() > 11 ? 'PM' : 'AM'}`;
};
