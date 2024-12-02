import { Divider, rem, Stack, Text, Title } from "@mantine/core";
import { headers } from "next/headers";
import AudioButtonGrid from "./components/audio-button-grid";

const hypervowelIds = Array.from({ length: 33 }, (_, i) => i + 1);
const standardVowels = ["bad", "bead", "bed", "bid", "bod", "booed", "bud"];

export default async function Home() {
  const headersList = await headers();
  const viewport = headersList.get("x-viewport");

  return (
    <Stack p={rem(32)}>
      <Title>Squib Helper</Title>
      <Text>Helper website for Phon Phon squib</Text>
      {viewport === "mobile" && (
        <Text c="red">
          Note: if you&apos;re on mobile, you might need to take your phone off
          silent
        </Text>
      )}
      <Divider />
      <Title order={3}>Hypervowels</Title>
      <AudioButtonGrid
        buttonProps={hypervowelIds.map(id => ({
          url: `/hypervowels/${id}.wav`,
          bg: "blue",
          children: <Text>{id}</Text>,
        }))}
        lastPlayedBg="green"
        minButtonSize="4em"
        rememberLastPlayed
      />
      <Title order={3}>Standard Vowels</Title>
      <AudioButtonGrid
        buttonProps={standardVowels.map(vowel => ({
          url: `/standard-vowels/${vowel}.wav`,
          bg: "red",
          children: <Text>{vowel}</Text>,
        }))}
        minButtonSize="6em"
      />
    </Stack>
  );
}
