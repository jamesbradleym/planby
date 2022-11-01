/// <reference types="react" />
import { ChannelWithPosiiton } from "../helpers/types";
interface ChannelProps<T> {
    channel: T;
    onClick?: (v: ChannelWithPosiiton) => void;
}
export declare function Channel<T extends ChannelWithPosiiton>({ channel, onClick, ...rest }: ChannelProps<T>): JSX.Element;
export {};
