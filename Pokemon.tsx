import React, { useState, FC } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Checkbox, { CHECK_SIZE } from "./Checkbox";

const styles = StyleSheet.create({
  checkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 8,
  },
  pokemonName: {
    width: 150,
    flexShrink: 0,
    flexGrow: 1,
  },
  placeholder: {
    width: CHECK_SIZE,
  },
});

export type PokemonProps = {
  shiny: boolean;
  name: string;
  caught?: boolean;
  img?: ImageSourcePropType;
  incense?: boolean;
};

type Props = PokemonProps & {
  darkBg: boolean;
  persistData: (newData: PokemonProps) => void;
  shinyable: boolean;
};

const Pokemon: FC<Props> = ({
  caught,
  shiny,
  name,
  incense,
  img,
  darkBg,
  persistData,
  shinyable,
}: Props) => {
  let backgroundColor = darkBg ? "#eee" : "#fff";
  if (incense) {
    backgroundColor = "#ff9";
  }
  return (
    <View style={[styles.checkContainer, { backgroundColor }]}>
      <Image
        source={img as ImageSourcePropType}
        style={{ width: 68, height: 56 }}
      />
      <Text style={styles.pokemonName}>
        {name}
        {incense && "*"}
      </Text>
      <Checkbox
        checked={!!caught}
        onPress={() => persistData({ caught: !caught, name, shiny })}
        label="caught"
      />
      {shinyable ? (
        <Checkbox
          checked={!!shiny}
          onPress={() => persistData({ shiny: !shiny, name, caught })}
          label="shiny"
        />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

export default Pokemon;
