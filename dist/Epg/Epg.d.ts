import React from "react";
import { Theme } from "./helpers/interfaces";
interface EpgProps {
    width?: number;
    height?: number;
    isRTL?: boolean;
    isSidebar: boolean;
    isTimeline?: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
    loader?: React.ReactNode;
    theme: Theme;
    globalStyles?: string;
    sidebarWidth: number;
}
export declare const Epg: React.ForwardRefExoticComponent<EpgProps & React.RefAttributes<HTMLDivElement>>;
export {};
