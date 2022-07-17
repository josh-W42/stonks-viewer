export const enum GraphTimeIds {
  'IntraDay',
  'Daily',
  'Weekly',
  'Monthly',
}

export interface IRecord {
  date?: string;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  volume?: number;
}

export interface IRecordMetadata {
  about: string;
  symbol: string;
  lastRefreshed: string;
  timeZone: string;
}

export interface IRecordContainer {
  metadata?: IRecordMetadata;
  records?: IRecord[];
}

export interface DailyResponse {
  GetDailyRecordsGQL: IRecordContainer;
}

export interface WeeklyResponse {
  GetWeeklyRecordsGQL: IRecordContainer;
}

export interface MonthlyResponse {
  GetMonthlyRecordsGQL: IRecordContainer;
}

export interface IntraDayResponse {
  GetOneMinRecordsGQL?: IRecordContainer;
  GetFiveMinRecordsGQL?: IRecordContainer;
  GetFifteenMinRecordsGQL?: IRecordContainer;
  GetThirtyMinRecordsGQL?: IRecordContainer;
  GetHourRecordsGQL?: IRecordContainer;
}

export const enum IntraDayIntervalTypes {
  '1min' = '1min',
  '5min' = '5min',
  '15min' = '15min',
  '30min' = '30min',
  '60min' = '60min',
}
