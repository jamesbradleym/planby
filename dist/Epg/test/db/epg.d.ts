export declare const sinceAndTillTimes: {
    since: string;
    till: string;
}[];
interface BuildProgram {
    [key: string]: any;
}
export declare function buildProgram(overrides?: BuildProgram): {
    id: string;
    description: any;
    title: any;
    since: string;
    till: string;
    channelUuid: string;
    image: any;
    country: any;
    genre: any;
    rating: any;
};
export interface BuildProgramWithPosition {
    overrides?: BuildProgram;
    program?: BuildProgram;
}
export declare function buildProgramWithPosition({ overrides, program, }?: BuildProgramWithPosition): {
    data: {
        id: string;
        description: any;
        title: any;
        since: string;
        till: string;
        channelUuid: string;
        image: any;
        country: any;
        genre: any;
        rating: any;
    } | {
        id: string;
        description: any;
        title: any;
        since: string;
        till: string;
        channelUuid: string;
        image: any;
        country: any;
        genre: any;
        rating: any;
    };
    position: {
        height: any;
        left: any;
        top: any;
        width: any;
    } | {
        height: any;
        left: any;
        top: any;
        width: any;
    };
};
export declare function buildEpgWithPosition(): {
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
export {};
