import styled from "@emotion/styled/macro";
import { Theme } from "../helpers";

// Import heleprs
import { ITEM_HEIGHT } from "../helpers";

export const TimelineTime = styled.span<{
  theme?: Theme;
  isBaseTimeFormat?: boolean;
  isRTL?: boolean;
}>`
  color: ${({ theme }) => theme.text.grey[300]};
  position: absolute;
  top: 18px;
  left: ${({ isRTL, isBaseTimeFormat }) =>
    isRTL && isBaseTimeFormat ? "-32" : "-18"}px;

  ${({ isRTL }) => isRTL && `transform: scale(-1,1)`};
`;

export const TimelineDividers = styled.div<{ count: number; }>`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ count }) => count}, 1fr);
  align-items: end;
  padding-bottom: 6px;
  color: red;
`;

export const TimelineDivider = styled.div<{ width: number; count: number; theme?: Theme }>`
  background: ${({ theme }) => theme.timeline.divider.bg};
  height: 10px;
  width: 1px;
  margin-right: ${({ width, count }) => (width - count) / count}px;
`;

export const TimelineWrapper = styled.div<{
  isSidebar: boolean;
  timeWidth: number;
  sidebarWidth: number;
  theme?: Theme;
}>`
  position: sticky;
  top: 0;
  left: ${({ isSidebar, sidebarWidth }) => (isSidebar ? sidebarWidth : 0)}px;
  z-index: 5;
  display: flex;
  height: ${ITEM_HEIGHT - 20}px;
  width: ${({ timeWidth }) => timeWidth}px;
  background: ${({ theme }) => theme.primary[900]};
`;

export const TimelineBox = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  font-size: 14px;
  position: relative;

  &:first-of-type {
    ${TimelineTime} {
      left: 0px;
    }
  }
`;
