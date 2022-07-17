export interface IBaseGraphCardConfig {
  xAxis?: {
    /**
     * Whether or not it's relevant to display the year in the xAxis ticks.
     * @default false
     */
    includeYear?: boolean;
    /**
     * Whether or not it's relevant to display the time in the xAxis ticks.
     * @default false
     */
    includeTime?: boolean;
    /**
     * Whether or not it's relevant to display the month in the xAxis ticks.
     * @default true
     */
    includeMonth?: boolean;
    /**
     * Whether or not it's relevant to display the day of the week in the xAxis ticks.
     * @default true
     */
    includeDayOfWeek?: boolean;
    /**
     * Whether or not it's relevant to display the day in the xAxis ticks.
     * @default true
     */
    includeDay?: boolean;
  };
  toolTip?: {
    /**
     * Whether or not it's relevant to display the year in the tooltip.
     * @default false
     */
    includeYear?: boolean;
    /**
     * Whether or not it's relevant to display the time in the tooltip.
     * @default false
     */
    includeTime?: boolean;
    /**
     * Whether or not it's relevant to display the day of the week in the tooltip.
     * @default true
     */
    includeDayOfWeek?: boolean;
    /**
     * Whether or not it's relevant to display the day in the tooltip.
     * @default true
     */
    includeDay?: boolean;
  };
}

export const DEFAULT_CONFIG: IBaseGraphCardConfig = {
  xAxis: {
    includeYear: false,
    includeMonth: true,
    includeDayOfWeek: true,
    includeTime: false,
    includeDay: true,
  },
  toolTip: {
    includeYear: false,
    includeDayOfWeek: true,
    includeTime: false,
    includeDay: true,
  },
};
