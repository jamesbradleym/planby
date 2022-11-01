import { Program, Channel } from "./interfaces";
export declare type Position = {
    width: number;
    height: number;
    top: number;
    left: number;
    edgeEnd: number;
};
export declare type ProgramWithPosition = {
    position: Position;
    data: Program;
};
export declare type ProgramItem = {
    position: Omit<Position, "edgeEnd">;
    data: Program;
};
export declare type ChannelWithPosiiton = Channel & {
    position: Pick<Position, "top" | "height">;
};
export declare type DateTime = string | Date;
export declare type BaseTimeFormat = boolean;
