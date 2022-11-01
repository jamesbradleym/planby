import { BaseTimeFormat } from "../helpers/types";
export declare function useTimeline(numberOfHoursInDay: number, isBaseTimeFormat: BaseTimeFormat): {
    time: any[];
    dividers: any[];
    formatTime: (index: number) => string;
};
