import { DateTime as DateRangeTime } from "./types";
declare type DateTime = number | string | Date;
export declare const getLiveStatus: (since: DateTime, till: DateTime) => boolean;
export declare const formatTime: (date: DateTime) => string;
export declare const roundToMinutes: (date: DateTime) => Date;
export declare const isYesterday: (since: DateTime, startDate: DateTime) => boolean;
export declare const isFutureTime: (date: DateTime) => boolean;
export declare const getTimeRangeDates: (startDate: DateRangeTime, endDate: DateRangeTime) => {
    startDate: DateRangeTime;
    endDate: DateRangeTime;
};
export {};
