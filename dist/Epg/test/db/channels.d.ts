interface BuildChannel {
    [key: string]: any;
}
export declare function buildChannel(overrides?: BuildChannel): {
    country: any;
    logo: any;
    provider: number;
    title: any;
    type: any;
    uuid: string;
    year: any;
};
export declare function buildChannelWithPosition(overrides?: BuildChannel): {
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
};
export {};
