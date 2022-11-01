import React from "react";
import { DateTime } from "../helpers/types";
interface useLayoutProps {
    height?: number;
    width?: number;
    hourWidth: number;
    sidebarWidth: number;
    startDate: DateTime;
    endDate: DateTime;
}
export declare function useLayout({ height, width, startDate, endDate, hourWidth, sidebarWidth, }: useLayoutProps): {
    containerRef: React.RefObject<HTMLDivElement>;
    scrollBoxRef: React.RefObject<HTMLDivElement>;
    scrollX: number;
    scrollY: number;
    layoutWidth: number;
    layoutHeight: number;
    onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent> & {
        target: Element;
    }) => void;
    onScrollToNow: () => void;
    onScrollTop: (value?: number) => void;
    onScrollLeft: (value?: number) => void;
    onScrollRight: (value?: number) => void;
};
export {};
