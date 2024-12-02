"use client";

import { Button, DefaultMantineColor, StyleProp } from "@mantine/core";

export interface AudioButtonProps {
  url: string;
  children?: React.ReactNode;
  bg?: StyleProp<DefaultMantineColor>;
  onClick?: () => void;
}

export default function AudioButton({
  url,
  children,
  bg,
  onClick,
}: Readonly<AudioButtonProps>) {
  return (
    <Button
      bg={bg}
      onClick={() => {
        if (onClick) {
          onClick();
        }

        const audio = new Audio(url);
        audio.play();
      }}
    >
      {children}
    </Button>
  );
}
