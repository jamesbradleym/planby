import React from "react";
import { ProgramItem, ChannelWithPosiiton, DateTime, Position, BaseTimeFormat } from "../helpers/types";
interface RenderTimeline {
    isBaseTimeFormat: BaseTimeFormat;
    isSidebar: boolean;
    isRTL: boolean;
    sidebarWidth: number;
    hourWidth: number;
    numberOfHoursInDay: number;
    offsetStartHoursRange: number;
    dayWidth: number;
}
interface LayoutProps {
    programs: ProgramItem[];
    channels: ChannelWithPosiiton[];
    startDate: DateTime;
    endDate: DateTime;
    scrollY: number;
    dayWidth: number;
    hourWidth: number;
    numberOfHoursInDay: number;
    offsetStartHoursRange: number;
    sidebarWidth: number;
    itemHeight: number;
    onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent> & {
        target: Element;
    }) => void;
    isRTL?: boolean;
    isBaseTimeFormat?: BaseTimeFormat;
    isSidebar?: boolean;
    isTimeline?: boolean;
    isLine?: boolean;
    isProgramVisible: (position: Position) => boolean;
    isChannelVisible: (position: Pick<Position, "top">) => boolean;
    renderProgram?: (v: {
        program: ProgramItem;
        isRTL: boolean;
        isBaseTimeFormat: BaseTimeFormat;
    }) => React.ReactNode;
    renderChannel?: (v: {
        channel: ChannelWithPosiiton;
    }) => React.ReactNode;
    renderTimeline?: (v: RenderTimeline) => React.ReactNode;
}
export declare const Layout: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
export {};
