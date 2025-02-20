import * as React from "react";
import { isToday } from "date-fns";

// Import types
import { DateTime } from "../../helpers/types";

// Import styles
import { LineStyled } from "../../styles";

// Import components
import { useLine } from "./useLine";

interface LineProps {
  height: number;
  startDate: DateTime;
  endDate: DateTime;
  timeWidth: number;
  subTimeWidth: number;
  sidebarWidth: number;
  timeStep: string;
}

const { Box } = LineStyled;

export function Line({
  height,
  startDate,
  endDate,
  timeWidth,
  subTimeWidth,
  sidebarWidth,
  timeStep,
}: LineProps) {
  const { positionX } = useLine({
    startDate,
    endDate,
    timeWidth,
    subTimeWidth,
    sidebarWidth,
    timeStep,
  });

  const date = new Date(startDate);
  if (!isToday(date)) return null;

  return <Box height={height} left={positionX} />;
}
