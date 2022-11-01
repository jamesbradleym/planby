import { ProgramItem, BaseTimeFormat } from "../helpers/types";
interface useProgramProps<T> {
    program: T;
    isRTL?: boolean;
    isBaseTimeFormat: BaseTimeFormat;
    minWidth?: number;
}
export declare function useProgram<T extends ProgramItem>({ isRTL, isBaseTimeFormat, program, minWidth, }: useProgramProps<T>): {
    isLive: boolean;
    isMinWidth: boolean;
    isRTL: boolean;
    formatTime: (date: string | number | Date, formatType?: string) => string;
    set12HoursTimeFormat: () => string;
    setDayMonthFormat: () => string;
    getRTLSinceTime: (since: string | number | Date) => string | number | Date;
    getRTLTillTime: (till: string | number | Date) => string | number | Date;
    styles: {
        width: number;
        position: {
            [x: string]: any;
        };
    };
};
export {};
