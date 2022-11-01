/// <reference types="react" />
import { Program as ProgramType } from "../helpers/interfaces";
import { BaseTimeFormat } from "../helpers/types";
import { ProgramItem } from "../helpers/types";
interface ProgramProps<T> {
    isRTL?: boolean;
    isBaseTimeFormat: BaseTimeFormat;
    program: T;
    onClick?: (v: ProgramType) => void;
}
export declare function Program<T extends ProgramItem>({ program, onClick, ...rest }: ProgramProps<T>): JSX.Element;
export {};
