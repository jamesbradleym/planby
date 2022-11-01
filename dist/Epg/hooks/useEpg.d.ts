import React from "react";
import { Channel, Program, Theme } from "../helpers/interfaces";
import { DateTime, BaseTimeFormat, Position } from "../helpers/types";
interface useEpgProps {
    channels: Channel[];
    epg: Program[];
    width?: number;
    height?: number;
    startDate?: DateTime;
    endDate?: DateTime;
    isBaseTimeFormat?: BaseTimeFormat;
    isSidebar?: boolean;
    isTimeline?: boolean;
    isRTL?: boolean;
    isLine?: boolean;
    theme?: Theme;
    globalStyles?: string;
    dayWidth?: number;
    sidebarWidth?: number;
    itemHeight?: number;
    itemOverscan?: number;
}
export declare function useEpg({ channels: channelsEpg, epg, startDate: startDateInput, endDate: endDateInput, isRTL, isBaseTimeFormat, isSidebar, isTimeline, isLine, theme: customTheme, globalStyles, dayWidth: customDayWidth, sidebarWidth, itemHeight, itemOverscan, width, height, }: useEpgProps): {
    getEpgProps: () => {
        isRTL: boolean;
        isSidebar: boolean;
        isLine: boolean;
        isTimeline: boolean;
        width: number | undefined;
        height: number | undefined;
        sidebarWidth: number;
        ref: React.RefObject<HTMLDivElement>;
        theme: Theme;
        globalStyles: string | undefined;
    };
    getLayoutProps: () => {
        ref: React.RefObject<HTMLDivElement>;
        numberOfHoursInDay: number;
        offsetStartHoursRange: number;
        programs: {
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
        channels: {
            position: {
                top: number;
                height: number;
            };
            uuid: string;
            logo: string;
        }[];
        startDate: DateTime;
        endDate: DateTime;
        scrollY: number;
        onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent> & {
            target: Element;
        }) => void;
        isRTL: boolean;
        isBaseTimeFormat: boolean;
        isSidebar: boolean;
        isTimeline: boolean;
        isLine: boolean;
        isProgramVisible: (position: Position) => boolean;
        isChannelVisible: (position: Pick<Position, "top">) => boolean;
        dayWidth: number;
        hourWidth: number;
        sidebarWidth: number;
        itemHeight: number;
    };
    onScrollToNow: () => void;
    onScrollTop: (value?: number) => void;
    onScrollLeft: (value?: number) => void;
    onScrollRight: (value?: number) => void;
    scrollY: number;
    scrollX: number;
};
export {};
