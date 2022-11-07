import { format, add } from "date-fns";

// Import types
import { BaseTimeFormat, DateTime } from "../helpers/types";

// Import helpers
import { TIME_FORMAT, generateArray, startOfTime } from "../helpers";

export function useTimeline(
  numberOfTicksPerRange: number,
  numberOfTicksPerSubRange: number,
  isBaseTimeFormat: BaseTimeFormat
) {
  const time = generateArray(numberOfTicksPerRange);
  const dividers = generateArray(numberOfTicksPerSubRange);

  const formatTime = (startDate: DateTime, index: number, timeStep: string) => {
    startDate = startOfTime(startDate, timeStep);
    switch (timeStep) {
      case "hour": {
        const time = index < 10 ? `0${index}` : index;

        if (isBaseTimeFormat) {
          const date = new Date(`${startDate}T${time}:00:00`);
          const timeFormat = format(date, TIME_FORMAT.BASE_HOURS_TIME);
          return timeFormat.toLowerCase().replace(/\s/g, "");
        }

        return `${time}:00`;
      }
      case "day": {
        const result = add(new Date(startDate), {
          years: 0,
          months: 0,
          weeks: 0,
          days: index,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        const timeFormat = format(result, TIME_FORMAT.MONTH_DAY);
        return timeFormat.toLowerCase().replace(/\s/g, "");
      }
      case "week": {
        const result = add(new Date(startDate), {
          years: 0,
          months: 0,
          weeks: index,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        const timeFormat = format(result, TIME_FORMAT.MONTH_DAY);
        return timeFormat.toLowerCase().replace(/\s/g, "");
      }
      case "month": {
        const result = add(new Date(startDate), {
          years: 0,
          months: index,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        const timeFormat = format(result, TIME_FORMAT.MONTH_DAY_YEAR);
        return timeFormat.toLowerCase().replace(/\s/g, "");
      }
      case "quarter": {
        const result = add(new Date(startDate), {
          years: 0,
          months: index*3,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        const timeFormat = format(result, TIME_FORMAT.MONTH_DAY_YEAR);
        return timeFormat.toLowerCase().replace(/\s/g, "");
      }
      default: {
        const date = new Date();
        const baseDate = format(date, TIME_FORMAT.DATE);
        const time = index < 10 ? `0${index}` : index;

        if (isBaseTimeFormat) {
          const date = new Date(`${baseDate}T${time}:00:00`);
          const timeFormat = format(date, TIME_FORMAT.BASE_HOURS_TIME);
          return timeFormat.toLowerCase().replace(/\s/g, "");
        }

        return `${time}:00`;
      }
    }
  }

  return { time, dividers, formatTime };
}
