import * as React from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";
import BigText from "ink-big-text";
import open from "open/index";

const urls = {
  website: "https://gentamura.com",
  twitter: "https://twitter.com/gentamura84",
  github: "https://github.com/gentamura",
  qiita: "https://qiita.com/gentamura84",
  teratail: "https://teratail.com/users/gentamura#reply",
  note: "https://note.com/gentamura84",
  linkedin: "https://www.linkedin.com/in/gentamura/",
};

const items = [
  {
    label: "GitHub",
    value: urls.github,
  },
  {
    label: "Twitter",
    value: urls.twitter,
  },
  {
    label: "Qiita",
    value: urls.qiita,
  },
  {
    label: "teratail",
    value: urls.teratail,
  },
  {
    label: "note",
    value: urls.note,
  },
  {
    label: "LinkedIn",
    value: urls.linkedin,
  },
  {
    label: "Quit",
    value: "quit",
  },
];

const actions = async (key: string) => {
  if (key === "Quit") process.exit();

  const url = urls[key.toLocaleLowerCase()];
  await open(url);
};

const ItemView = ({ label, isSelected }) => (
  <Text color={isSelected ? "rgb(0, 128, 255)" : "rgb(255, 255, 255)"} bold={isSelected}>
    {label}
  </Text>
);

export default () => (
  <Box flexDirection="column" padding={1}>
    <Box>
      <BigText color="#199861" text="I'm|a Web FrontEnd|Engineer." />
    </Box>
    <Box>
      <SelectInput items={items} onSelect={(item) => actions(item.label)} itemComponent={ItemView} />
    </Box>
  </Box>
);
