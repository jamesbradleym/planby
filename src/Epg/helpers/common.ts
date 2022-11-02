import { useLayoutEffect, useEffect } from "react";
import { differenceInHours, differenceInDays, differenceInWeeks, differenceInMonths, differenceInQuarters, startOfDay, startOfWeek, startOfMonth, startOfQuarter, startOfYear } from "date-fns";
import { HOURS_IN_DAY } from "./variables";

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

export const getSubTimeWidth = (timeWidth: number) => timeWidth / HOURS_IN_DAY;

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

  function startOfTime(dateTime, timeStep) {
    switch (timeStep) {
      case "hour":
        return startOfDay(endDateTime, startDateTime);
      case "day":
        return startOfWeek(endDateTime, startDateTime);
      case "week":
        return startOfMonth(endDateTime, startDateTime);
      case "month":
        return startOfQuarter(endDateTime, startDateTime);
      case "quarter":
        return startOfYear(endDateTime, startDateTime);
      default:
        return differenceInHours(endDateTime, startDateTime);
    }
  }

  function differenceInTime(endDateTime, startDateTime, timeStep) {
    switch (timeStep) {
      case "hour":
        return differenceInHours(endDateTime, startDateTime);
      case "day":
        return differenceInDays(endDateTime, startDateTime);
      case "week":
        return differenceInWeeks(endDateTime, startDateTime);
      case "month":
        return differenceInMonths(endDateTime, startDateTime);
      case "quarter":
        return differenceInQuarters(endDateTime, startDateTime);
      default:
        return differenceInHours(endDateTime, startDateTime);
    }
  }

  const offsetStartTimeRange = differenceInTime(
    startDateTime,
    startOfTime(startDateTime, timeStep),
    timeStep
  );

  const numberOfTicksPerRange = differenceInTime(endDateTime, startDateTime, timeStep)
  const numberOfSubTicksPerRange = subTicks;
  const subTimeWidth = Math.floor(timeWidth / numberOfTicksPerRange);
  const newTimeWidth = subTimeWidth * numberOfTicksPerRange;

  return {
    subTimeWidth: abs(subTimeWidth),
    timeWidth: abs(newTimeWidth),
    numberOfTicksPerRange: abs(numberOfTicksPerRange),
    numberOfSubTicksPerRange: abs(numberOfTicksSubPerRange),
    offsetStartTimeRange: abs(offsetStartTimeRange),
  };
};
