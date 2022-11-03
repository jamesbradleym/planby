import * as React from "react";

// Import types
import { BaseTimeFormat, DateTime } from "../helpers/types";

// Import styles
import { TimelineStyled } from "../styles";

// Import hooks
import { useTimeline } from "../hooks";

const {
  TimelineWrapper,
  TimelineBox,
  TimelineTime,
  TimelineDividers,
  TimelineDivider,
} = TimelineStyled;

interface TimelineProps {
  isRTL?: boolean;
  isBaseTimeFormat: BaseTimeFormat;
  isSidebar: boolean;
  timeWidth: number;
  subTimeWidth: number;
  numberOfTicksPerRange: number;
  numberOfTicksPerSubRange: number;
  offsetStartTimeRange: number;
  sidebarWidth: number;
  timeStep: string;
  startDate: DateTime;
}

export function Timeline({
  isRTL,
  isBaseTimeFormat,
  isSidebar,
  timeWidth,
  subTimeWidth,
  numberOfTicksPerRange,
  numberOfTicksPerSubRange,
  offsetStartTimeRange,
  sidebarWidth,
  timeStep,
  startDate,
}: TimelineProps) {
  const { time, dividers, formatTime } = useTimeline(
    numberOfTicksPerRange,
    numberOfTicksPerSubRange,
    timeStep,
    isBaseTimeFormat
  );

  const renderTime = (index: number) => (
    <TimelineBox data-testid="timeline-item" key={index} width={subTimeWidth}>
      <TimelineTime isBaseTimeFormat={isBaseTimeFormat} isRTL={isRTL}>
        {formatTime(startDate, index + offsetStartTimeRange)}
      </TimelineTime>
      <TimelineDividers>{renderDividers()}</TimelineDividers>
    </TimelineBox>
  );

  const renderDividers = () =>
    dividers.map((_, index) => (
      <TimelineDivider key={index} width={subTimeWidth} />
    ));

  return (
    <TimelineWrapper
      data-testid="timeline"
      timeWidth={timeWidth}
      sidebarWidth={sidebarWidth}
      isSidebar={isSidebar}
    >
      {time.map((_, index) => renderTime(index))}
    </TimelineWrapper>
  );
}
