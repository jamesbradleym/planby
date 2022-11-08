import { differenceInMinutes, differenceInHours, differenceInCalendarDays, differenceInCalendarWeeks, differenceInCalendarMonths, differenceInCalendarQuarters, startOfDay, startOfWeek, startOfMonth, startOfQuarter, startOfYear, endOfDay, endOfWeek, endOfMonth, endOfQuarter, endOfYear } from "date-fns";

export function differenceInTime(endDateTime:Date, startDateTime:Date, timeStep:string) {
  switch (timeStep) {
    case "hour":
      return differenceInMinutes(endDateTime, startDateTime)/60;
    case "day":
      return differenceInHours(endDateTime, startDateTime)/24;
    case "week":
      return differenceInCalendarDays(endDateTime, startDateTime)/7;
    case "month":
      return differenceInCalendarWeeks(endDateTime, startDateTime)/4;
    case "quarter":
      return differenceInCalendarMonths(endDateTime, startDateTime)/4;
    case "quarter_":
      return differenceInCalendarQuarters(endDateTime, startDateTime);
    default:
      return differenceInHours(endDateTime, startDateTime);
  }
}

export function startOfTime(dateTime:Date, timeStep:string) {
  switch (timeStep) {
    case "hour":
      return startOfDay(dateTime);
    case "day":
      return startOfWeek(dateTime);
    case "week":
      return startOfMonth(dateTime);
    case "month":
      return startOfQuarter(dateTime);
    case "quarter":
      return startOfYear(dateTime);
    default:
      return startOfDay(dateTime);
  }
}

export function endOfTime(dateTime:Date, timeStep:string) {
  switch (timeStep) {
    case "hour":
      return endOfDay(dateTime);
    case "day":
      return endOfWeek(dateTime);
    case "week":
      return endOfMonth(dateTime);
    case "month":
      return endOfQuarter(dateTime);
    case "quarter":
      return endOfYear(dateTime);
    default:
      return endOfDay(dateTime);
  }
}
