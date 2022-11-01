import { useLayoutEffect } from "react";
declare type DateTime = string | number | Date;
declare type OmitObjectType = {
    [key: string]: any;
};
export declare const omit: (obj: OmitObjectType, ...props: string[]) => {
    [x: string]: any;
};
export declare const generateArray: (num: number) => any[];
declare type ProgramOptions = {
    position: {
        width: number;
        height: number;
        top: number;
        left: number;
    };
};
export declare const getProgramOptions: <T extends ProgramOptions>(program: T) => T & {
    position: {
        width: number;
        height: number;
        top: number;
        left: number;
    };
};
export declare const useIsomorphicLayoutEffect: () => typeof useLayoutEffect;
export declare const getHourWidth: (dayWidth: number) => number;
export declare const getDate: (date: DateTime) => Date;
interface DayWidth {
    dayWidth: number;
    startDate: DateTime;
    endDate: DateTime;
}
export declare const getDayWidthResources: ({ dayWidth, startDate, endDate, }: DayWidth) => {
    hourWidth: number;
    dayWidth: number;
    numberOfHoursInDay: number;
    offsetStartHoursRange: number;
};
export {};
