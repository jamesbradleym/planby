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
}

export function useLine({
  startDate,
  endDate,
  timeWidth,
  subTimeWidth,
  sidebarWidth,
}: useLineProps) {
  const initialState =
    getPositionX(
      startOfDay(new Date(startDate)),
      new Date(),
      startDate,
      endDate,
      subTimeWidth
    ) + sidebarWidth;
  const [positionX, setPositionX] = React.useState<number>(() => initialState);

  const isDayEnd = positionX <= timeWidth;
  const isScrollX = React.useMemo(() => (isDayEnd ? PROGRAM_REFRESH : null), [
    isDayEnd,
  ]);

  useInterval(() => {
    const offset = subTimeWidth / MINUTES_IN_HOUR;
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
      subTimeWidth
    );
    const newPositionX = positionX + sidebarWidth;
    setPositionX(newPositionX);
  }, [startDate, endDate, sidebarWidth, subTimeWidth]);

  return { positionX };
}
