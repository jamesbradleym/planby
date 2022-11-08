import * as React from "react";

// Import interfaces
import { ChannelWithPosiiton } from "../helpers/types";

// Import styles
import { ChannelStyled } from "../styles";

interface ChannelProps<T> {
  channel: T;
  onClick?: (v: ChannelWithPosiiton) => void;
}

const { ChannelBox, ChannelLogo } = ChannelStyled;

export function Channel<T extends ChannelWithPosiiton>({
  channel,
  onClick,
  ...rest
}: ChannelProps<T>) {
  const { position, logo } = channel;
  const logoComp = isValidHttpUrl(logo) ? <ChannelLogo src={logo} alt="Logo" /> : logo;
  return (
    <ChannelBox
      data-testid="sidebar-item"
      onClick={() => onClick?.(channel)}
      {...position}
      {...rest}
    >
      {logoComp}
    </ChannelBox>
  );
}

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
