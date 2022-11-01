import { Channel, Program } from "./interfaces";
import { Position, DateTime } from "./types";
export declare const getPositionX: (since: DateTime, till: DateTime, startDate: DateTime, endDate: DateTime, hourWidth: number) => number;
export declare const getChannelPosition: (channelIndex: number, itemHeight: number) => {
    top: number;
    height: number;
};
export declare const getProgramPosition: (program: Program, channelIndex: number, itemHeight: number, hourWidth: number, startDate: DateTime, endDate: DateTime) => {
    position: {
        width: number;
        height: number;
        top: number;
        left: number;
        edgeEnd: number;
    };
    data: {
        since: string;
        till: string;
        channelUuid: string;
        id: string;
        title: string;
        description: string;
        image: string;
    };
};
interface ConvertedPrograms {
    data: Program[];
    channels: Channel[];
    startDate: DateTime;
    endDate: DateTime;
    itemHeight: number;
    hourWidth: number;
}
export declare const getConvertedPrograms: ({ data, channels, startDate, endDate, itemHeight, hourWidth, }: ConvertedPrograms) => {
    position: {
        width: number;
        height: number;
        top: number;
        left: number;
        edgeEnd: number;
    };
    data: {
        since: string;
        till: string;
        channelUuid: string;
        id: string;
        title: string;
        description: string;
        image: string;
    };
}[];
export declare const getConvertedChannels: (channels: Channel[], itemHeight: number) => {
    position: {
        top: number;
        height: number;
    };
    uuid: string;
    logo: string;
}[];
export declare const getItemVisibility: (position: Position, scrollY: number, scrollX: number, containerHeight: number, containerWidth: number, itemOverscan: number) => boolean;
export declare const getSidebarItemVisibility: (position: Pick<Position, "top">, scrollY: number, containerHeight: number, itemOverscan: number) => boolean;
export {};
