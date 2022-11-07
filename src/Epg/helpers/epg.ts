import { getTime } from "date-fns";

// Import interfaces
import { Channel, Program } from "./interfaces";

// Import types
import { ProgramWithPosition, Position, DateTime } from "./types";

// Import variables
// import { MINUTES_IN_HOUR, HOURS_IN_DAY, DAYS_IN_WEEK, AVG_WEEKS_IN_MONTH, MONTHS_IN_QUARTER } from "./variables";

// Import functions
import { differenceInTime } from "./functions";

// Import time heleprs
import {
  formatTime,
  roundToMinutes,
  isYesterday as isYesterdayTime,
} from "./time";
import { getDate } from "./common";

// -------- Program width --------
// const getItemDiffWidth = (diff: number, subTimeWidth: number, timeStep: string) => {
//   console.log(diff, subTimeWidth, timeStep);
//   switch (timeStep) {
//     case "hour":
//       return (diff * subTimeWidth) / MINUTES_IN_HOUR;
//     case "day":
//       return (diff * subTimeWidth) / HOURS_IN_DAY;
//     case "week":
//       return (diff * subTimeWidth) / DAYS_IN_WEEK;
//     case "month":
//       return (diff * subTimeWidth) / AVG_WEEKS_IN_MONTH;
//     case "quarter":
//       return (diff * subTimeWidth) / MONTHS_IN_QUARTER;
//     default:
//       return (diff * subTimeWidth) / MINUTES_IN_HOUR;
//   }
// }

export const getPositionX = (
  since: DateTime,
  till: DateTime,
  startDate: DateTime,
  endDate: DateTime,
  subTimeWidth: number,
  timeStep: string
) => {
  const isTomorrow = getTime(getDate(till)) > getTime(getDate(endDate));
  const isYesterday = getTime(getDate(since)) < getTime(getDate(startDate));

  // When time range is set to 1 hour and program time is greater than 1 hour
  if (isYesterday && isTomorrow) {
    const diffTime = differenceInTime(
      roundToMinutes(getDate(endDate)),
      getDate(startDate),
      timeStep
    );
    return diffTime * subTimeWidth;
    // return getItemDiffWidth(diffTime, subTimeWidth, timeStep);
  }

  if (isYesterday) {
    const diffTime = differenceInTime(
      roundToMinutes(getDate(till)),
      getDate(startDate),
      timeStep
    );
    return diffTime * subTimeWidth;
    // return getItemDiffWidth(diffTime, subTimeWidth, timeStep);
  }

  if (isTomorrow) {
    const diffTime = differenceInTime(
      getDate(endDate),
      roundToMinutes(getDate(since)),
      timeStep
    );

    if (diffTime < 0) return 0;
    return diffTime * subTimeWidth;
    // return getItemDiffWidth(diffTime, subTimeWidth, timeStep);
  }

  const diffTime = differenceInTime(
    roundToMinutes(getDate(till)),
    roundToMinutes(getDate(since)),
    timeStep
  );
  console.log(since, till, diffTime, subTimeWidth);
  return diffTime * subTimeWidth;
  // return getItemDiffWidth(diffTime, subTimeWidth, timeStep);
};

// -------- Channel position in the Epg --------
export const getChannelPosition = (
  channelIndex: number,
  itemHeight: number
) => {
  const top = itemHeight * channelIndex;
  const position = {
    top,
    height: itemHeight,
  };
  return position;
};
// -------- Program position in the Epg --------
export const getProgramPosition = (
  program: Program,
  channelIndex: number,
  itemHeight: number,
  subTimeWidth: number,
  startDate: DateTime,
  endDate: DateTime,
  timeStep: string
) => {
  const item = {
    ...program,
    since: formatTime(program.since),
    till: formatTime(program.till),
  };
  const isYesterday = isYesterdayTime(item.since, startDate);
  console.log("width:");
  let width = getPositionX(
    item.since,
    item.till,
    startDate,
    endDate,
    subTimeWidth,
    timeStep
  );
  const top = itemHeight * channelIndex;
  console.log("left:");
  let left = getPositionX(startDate, item.since, startDate, endDate, subTimeWidth, timeStep);
  const edgeEnd = getPositionX(
    startDate,
    item.till,
    startDate,
    endDate,
    subTimeWidth,
    timeStep
  );

  if (isYesterday) left = 0;
  // If item has negative top position, it means that it is not visible in this day
  if (top < 0) width = 0;

  const position = {
    width,
    height: itemHeight,
    top,
    left,
    edgeEnd,
  };
  return { position, data: item };
};

// -------- Converted programs with position data --------
interface ConvertedPrograms {
  data: Program[];
  channels: Channel[];
  startDate: DateTime;
  endDate: DateTime;
  itemHeight: number;
  subTimeWidth: number;
  timeStep: string;
}
export const getConvertedPrograms = ({
  data,
  channels,
  startDate,
  endDate,
  itemHeight,
  subTimeWidth,
  timeStep,
}: ConvertedPrograms) =>
  data.map((next) => {
    const channelIndex = channels.findIndex(
      ({ uuid }) => uuid === next.channelUuid
    );
    return getProgramPosition(
      next,
      channelIndex,
      itemHeight,
      subTimeWidth,
      startDate,
      endDate,
      timeStep
    );
  }, [] as ProgramWithPosition[]);

// -------- Converted channels with position data --------
export const getConvertedChannels = (channels: Channel[], itemHeight: number) =>
  channels.map((channel, index) => ({
    ...channel,
    position: getChannelPosition(index, itemHeight),
  }));

// -------- Dynamic virtual program visibility in the EPG --------
export const getItemVisibility = (
  position: Position,
  scrollY: number,
  scrollX: number,
  containerHeight: number,
  containerWidth: number,
  itemOverscan: number
) => {
  if (position.width <= 0) {
    return false;
  }

  if (scrollY > position.top + itemOverscan * 3) {
    return false;
  }

  if (scrollY + containerHeight <= position.top) {
    return false;
  }

  if (
    scrollX + containerWidth >= position.left &&
    scrollX <= position.edgeEnd
  ) {
    return true;
  }

  return false;
};

export const getSidebarItemVisibility = (
  position: Pick<Position, "top">,
  scrollY: number,
  containerHeight: number,
  itemOverscan: number
) => {
  if (scrollY > position.top + itemOverscan * 3) {
    return false;
  }

  if (scrollY + containerHeight <= position.top) {
    return false;
  }

  return true;
};
