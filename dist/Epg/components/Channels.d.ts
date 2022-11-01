import * as React from "react";
import { ChannelWithPosiiton } from "../helpers/types";
interface ChannelsProps {
    isTimeline: boolean;
    isRTL: boolean;
    isChannelVisible: (position: any) => boolean;
    channels: ChannelWithPosiiton[];
    scrollY: number;
    sidebarWidth: number;
    renderChannel?: (v: {
        channel: ChannelWithPosiiton;
    }) => React.ReactNode;
}
export declare function Channels(props: ChannelsProps): JSX.Element;
export {};
