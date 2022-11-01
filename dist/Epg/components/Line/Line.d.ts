/// <reference types="react" />
import { DateTime } from "../../helpers/types";
interface LineProps {
    height: number;
    startDate: DateTime;
    endDate: DateTime;
    dayWidth: number;
    hourWidth: number;
    sidebarWidth: number;
}
export declare function Line({ height, startDate, endDate, dayWidth, hourWidth, sidebarWidth, }: LineProps): JSX.Element | null;
export {};
