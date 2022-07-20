export const enum CardTypes {
  'Graph' = 'Graph',
  'Info' = 'Info',
  'Search' = 'Search',
}

export interface BaseCardParams {
  isCustom?: boolean;
}

export interface CustomDialogFormParams {
  setCloseTrigger: (val: boolean) => void;
}
