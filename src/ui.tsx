import React from "react";
import { Box, Newline, Text } from "ink";
import SelectInput from "ink-select-input";
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
    label: "Website",
    value: urls.website,
  },
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
  <>
    <Box borderStyle="classic" borderColor="green" width={60} height={4}>
      <Text color="greenBright" padding-right={10}>
        Hello World! I'm Gen Tamura.<Newline />
        I'm a Web Frontend Developer in Japan.
      </Text>
    </Box>
    <Box flexDirection="column" padding={1}>
      <Box>
        <Text>Please select from the following:</Text>
      </Box>
      <Box>
        <SelectInput items={items} onSelect={(item) => actions(item.label)} itemComponent={ItemView} />
      </Box>
    </Box>
  </>
);
