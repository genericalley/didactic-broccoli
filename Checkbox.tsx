import { Pressable, Image } from "react-native";
import React from "react";

import caught from "./assets/caught.png";
import shiny from "./assets/shiny.png";
import raid from "./assets/raid.png";

const IMAGES = { caught, shiny, raid };

export const CHECK_SIZE = 36;

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
  label: "caught" | "shiny" | "raid";
};

const Checkbox = ({ checked, onPress, label }: CheckboxProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={IMAGES[label]}
        style={{
          width: CHECK_SIZE,
          height: CHECK_SIZE,
          opacity: checked ? 1 : 0.25,
        }}
      />
    </Pressable>
  );
};

export default Checkbox;
