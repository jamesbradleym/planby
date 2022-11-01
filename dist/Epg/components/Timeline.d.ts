/// <reference types="react" />
import { BaseTimeFormat } from "../helpers/types";
interface TimelineProps {
    isRTL?: boolean;
    isBaseTimeFormat: BaseTimeFormat;
    isSidebar: boolean;
    dayWidth: number;
    hourWidth: number;
    numberOfHoursInDay: number;
    offsetStartHoursRange: number;
    sidebarWidth: number;
}
export declare function Timeline({ isRTL, isBaseTimeFormat, isSidebar, dayWidth, hourWidth, numberOfHoursInDay, offsetStartHoursRange, sidebarWidth, }: TimelineProps): JSX.Element;
export {};
