import React from "react";
import { startOfDay } from "date-fns";

// Import types
import { DateTime } from "../../helpers/types";

// Import helpers
import { MINUTES_IN_HOUR, PROGRAM_REFRESH, getPositionX } from "../../helpers";

// Import hooks
import { useInterval } from "../../hooks";

interface useLineProps {
  startDate: DateTime;
  endDate: DateTime;
  timeWidth: number;
  subTimeWidth: number;
  sidebarWidth: number;
  timeStep: string;
}

export function useLine({
  startDate,
  endDate,
  timeWidth,
  subTimeWidth,
  sidebarWidth,
  timeStep,
}: useLineProps) {
  const initialState =
    getPositionX(
      startOfDay(new Date(startDate)),
      new Date(),
      startDate,
      endDate,
      subTimeWidth,
      timeStep
    ) + sidebarWidth;
  const [positionX, setPositionX] = React.useState<number>(() => initialState);

  const isDayEnd = positionX <= timeWidth;
  const isScrollX = React.useMemo(() => (isDayEnd ? PROGRAM_REFRESH : null), [
    isDayEnd,
  ]);

  useInterval(() => {
    const offset = () => {
      switch (timeStep) {
        case "hour":
          return subTimeWidth / MINUTES_IN_HOUR;
        case "day":
          return subTimeWidth /  HOURS_IN_DAY;
        case "week":
          return subTimeWidth /  DAYS_IN_WEEK;
        case "month":
          return subTimeWidth / AVG_WEEKS_IN_MONTH;
        case "quarter":
          return subTimeWidth /  MONTHS_IN_QUARTER;
        default:
          return subTimeWidth /  MINUTES_IN_HOUR;
      }
    }
    const positionOffset = offset * 2;
    setPositionX((prev) => prev + positionOffset);
  }, isScrollX);

  React.useEffect(() => {
    const date = new Date(startDate);
    const positionX = getPositionX(
      startOfDay(date),
      new Date(),
      startDate,
      endDate,
      subTimeWidth,
      timeStep,
    );
    const newPositionX = positionX + sidebarWidth;
    setPositionX(newPositionX);
  }, [startDate, endDate, sidebarWidth, subTimeWidth, timeStep]);

  return { positionX };
}
