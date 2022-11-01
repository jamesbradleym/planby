import { DateTime } from "../../helpers/types";
interface useLineProps {
    startDate: DateTime;
    endDate: DateTime;
    dayWidth: number;
    hourWidth: number;
    sidebarWidth: number;
}
export declare function useLine({ startDate, endDate, dayWidth, hourWidth, sidebarWidth, }: useLineProps): {
    positionX: number;
};
export {};
