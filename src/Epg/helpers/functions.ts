import { differenceInHours, differenceInCalendarDays, differenceInCalendarWeeks, differenceInCalendarMonths, differenceInCalendarQuarters, startOfDay, startOfWeek, startOfMonth, startOfQuarter, startOfYear, endOfDay, endOfWeek, endOfMonth, endOfQuarter, endOfYear } from "date-fns";

export function differenceInTime(endDateTime:Date, startDateTime:Date, timeStep:string) {
  switch (timeStep) {
    case "hour":
      return differenceInHours(endDateTime, startDateTime);
    case "day":
      return differenceInCalendarDays(endDateTime, startDateTime);
    case "week":
      return differenceInCalendarWeeks(endDateTime, startDateTime);
    case "month":
      return differenceInCalendarMonths(endDateTime, startDateTime);
    case "quarter":
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
