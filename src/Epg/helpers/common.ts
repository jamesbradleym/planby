import { useLayoutEffect, useEffect } from "react";
import { HOURS_IN_DAY } from "./variables";
import { differenceInTime, startOfTime } from "./functions"

type DateTime = string | number | Date;

type OmitObjectType = { [key: string]: any };
export const omit = (obj: OmitObjectType, ...props: string[]) => {
  const result = { ...obj };

  for (const property of props) {
    delete result[property];
  }

  return result;
};

export const generateArray = (num: number) => new Array(num).fill("");

type ProgramOptions = {
  position: { width: number; height: number; top: number; left: number };
};

export const getProgramOptions = <T extends ProgramOptions>(program: T) => {
  const { width, height, top, left } = program.position;
  return {
    ...program,
    position: { width, height, top, left },
  };
};

export const useIsomorphicLayoutEffect = () =>
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const getSubTimeWidth = (timeWidth: number, timeStep: string) => {
  switch (timeStep) {
    case "hour":
      return timeWidth / MINUTES_IN_HOUR;
    case "day":
      return timeWidth / HOURS_IN_DAY;
    case "week":
      return timeWidth / DAYS_IN_WEEK;
    case "month":
      return timeWidth / AVG_WEEKS_IN_MONTH;
    case "quarter":
      return timeWidth / MONTHS_IN_QUARTER;
    default:
      return timeWidth / MINUTES_IN_HOUR;
  }
}
}

export const getDate = (date: DateTime) => new Date(date);

const abs = (num: number) => Math.abs(num);
interface TimeWidth {
  timeWidth: number;
  startDate: DateTime;
  endDate: DateTime;
  timeStep: string;
  subTicks: number;
}
export const getTimeWidthResources = ({
  timeWidth,
  startDate,
  endDate,
  timeStep,
  subTicks
}: TimeWidth) => {
  const startDateTime = getDate(startDate);
  const endDateTime = getDate(endDate);

  if (endDateTime < startDateTime) {
    console.error(
      `Invalid endDate property. Value of endDate must be greater than startDate. Props: startDateTime: ${startDateTime}, endDateTime: ${endDateTime}`
    );
  }

  const offsetStartTimeRange = differenceInTime(
    startDateTime,
    startOfTime(startDateTime, timeStep),
    timeStep
  );

  const numberOfTicksPerRange = differenceInTime(endDateTime, startDateTime, timeStep)
  const numberOfTicksPerSubRange = subTicks;
  const subTimeWidth = Math.floor(timeWidth / numberOfTicksPerRange);
  const newTimeWidth = subTimeWidth * numberOfTicksPerRange;

  return {
    subTimeWidth: abs(subTimeWidth),
    timeWidth: abs(newTimeWidth),
    numberOfTicksPerRange: abs(numberOfTicksPerRange),
    numberOfTicksPerSubRange: abs(numberOfTicksPerSubRange),
    offsetStartTimeRange: abs(offsetStartTimeRange),
  };
};
