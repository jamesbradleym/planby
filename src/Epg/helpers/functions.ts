import { differenceInHours, differenceInDays, differenceInWeeks, differenceInMonths, differenceInQuarters, startOfDay, startOfWeek, startOfMonth, startOfQuarter, startOfYear } from "date-fns";

export function differenceInTime(endDateTime:Date, startDateTime:Date, timeStep:string) {
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
