"use client";

import { DefaultMantineColor, StyleProp } from "@mantine/core";
import AudioButton, { AudioButtonProps } from "./audio-button";
import { useState } from "react";

interface Props {
  minButtonSize: string;
  buttonProps: AudioButtonProps[];
  rememberLastPlayed?: boolean;
  lastPlayedBg?: StyleProp<DefaultMantineColor>;
}

export default function AudioButtonGrid({
  minButtonSize,
  rememberLastPlayed,
  buttonProps,
  lastPlayedBg,
}: Readonly<Props>) {
  const [lastPlayed, setLastPlayed] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minButtonSize}, 1fr))`,
        gap: "1em",
      }}
    >
      {buttonProps.map(props => {
        const bg =
          rememberLastPlayed && lastPlayed === props.url
            ? lastPlayedBg
            : props.bg;
        const newProps = { ...props, bg };

        return (
          <AudioButton
            key={props.url}
            {...newProps}
            onClick={() => {
              setLastPlayed(props.url);
            }}
          />
        );
      })}
    </div>
  );
}
