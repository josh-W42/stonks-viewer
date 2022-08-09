import { formatMonth, formatDayOfWeek, formatTime } from '../../../../helpers';
import { IBaseGraphCardConfig } from './config';

/**
 * Formats time for the XAxis in a BaseGraphCardContent Component for a given configuration.
 * @param dateString - A string related to dates / time.
 * @param config - The config of the BaseGraphCardContent Component.
 * @returns A Formatted date and time string.
 */
export const formatAxisTime = (
  dateString: string,
  config: IBaseGraphCardConfig
) => {
  const date = new Date(dateString);

  let output = '';

  if (config?.xAxis?.includeMonth) {
    output += formatMonth(date.getMonth());
  }

  if (config.toolTip?.includeDay) {
    output += ` ${date.getDate()}`;
  }

  if (config?.xAxis?.includeYear) {
    output += ` ${date.getFullYear()}`;
  }

  if (config?.xAxis?.includeTime) {
    output += ` - ${formatTime(date)}`;
  }

  return output;
};

/**
 * Formats time for the tooltip in a BaseGraphCardContent Component for a given configuration.
 * @param dateString - A string related to dates / time.
 * @param config - The config of the BaseGraphCardContent Component.
 * @returns A Formatted date and time string.
 */
export const formatToolTipTime = (
  dateString: string,
  config: IBaseGraphCardConfig
) => {
  const date = new Date(dateString);

  let output = '';

  if (config?.toolTip?.includeDayOfWeek) {
    output += `${formatDayOfWeek(date.getDay())} - `;
  }

  output += `${formatMonth(date.getMonth())}`;

  if (config.toolTip?.includeDay) {
    output += ` ${date.getDate()}`;
  }

  if (config?.toolTip?.includeYear) {
    output += ` ${date.getFullYear()}`;
  }

  if (config?.toolTip?.includeTime) {
    output += ` - ${formatTime(date)}`;
  }

  return output;
};
