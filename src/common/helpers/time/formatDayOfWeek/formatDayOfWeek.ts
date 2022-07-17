/**
 * Formats a given day of the week id into a more human readable version.
 * @param id - An ID of the day of the week.
 * @returns
 */
export const formatDayOfWeek = (id: number) => {
  switch (id) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Invalid Day';
  }
};
