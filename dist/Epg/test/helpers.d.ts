declare type Overrides = {
    [key: string]: any;
};
export declare function getLayoutProps(overrides?: Overrides, sliceNumber?: number): {
    programs: {
        data: {
            id: any;
            description: any;
            title: any;
            channelUuid: string;
            image: any;
            country: any;
            genre: any;
            rating: any;
            since: string;
            till: string;
        };
        position: {
            height: any;
            left: any;
            top: any;
            width: any;
        };
    }[];
    channels: {
        position: {
            top: number;
            height: number;
        };
        country: any;
        logo: any;
        provider: number;
        title: any;
        type: any;
        uuid: string;
        year: any;
    }[];
    scrollY: number;
    startDate: string;
    endDate: string;
    dayWidth: number;
    hourWidth: number;
    numberOfHoursInDay: number;
    offsetStartHoursRange: number;
    sidebarWidth: number;
    itemHeight: number;
    isSidebar: boolean;
    isTimeline: boolean;
    isLine: boolean;
    isBaseTimeFormat: boolean;
    isProgramVisible: () => boolean;
    isChannelVisible: () => boolean;
    onScroll: () => void;
};
export declare const getTestTimeDate: (h?: string, m?: string, s?: string) => string;
export {};
