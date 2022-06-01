import React, { useState } from "react";
import { SectionList, StyleSheet, Switch, Text, View } from "react-native";
import Pokemon, { PokemonProps } from "./Pokemon";
import pokemen from "./pokemen";

import usePersistence from "./hooks";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginBottom: 16,
    minWidth: 250,
    maxWidth: 500,
    paddingLeft: 12,
    paddingRight: 12,
  },
  environ: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: "auto",
    marginRight: "auto",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#444444",
  },
  pass: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  }
});

const SectionListBasics = () => {
  const sections: { title: string; data: PokemonProps[] }[] = [];
  for (const [k, v] of Object.entries(
    pokemen as Record<string, PokemonProps[]>
  )) {
    sections.push({ title: k, data: ([] as PokemonProps[]).concat(v) });
  }

  const { data, persist } = usePersistence();
  const boughtPass = data.pass ? data.pass.caught : false;

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 24,
        }}
      >
        Go Fest 2022 Checklist
      </Text>
      <View style={styles.pass}>
      <Text>Bought ticket?&nbsp;&nbsp;</Text>
      <Switch
        trackColor={{ false: "#aaa", true: "#cee" }}
        thumbColor={boughtPass ? "#188" : "#666"}
        onValueChange={() => persist({ name: 'pass', caught: !boughtPass } as PokemonProps)}
        value={boughtPass}
      />
      </View>
      <SectionList
        sections={sections}
        renderItem={({
          item: { name, shiny, incense, img },
          index,
        }: {
          item: PokemonProps;
          index: number;
        }) => {
          const current = data[name];
          if (incense && !boughtPass) return null;
          return (
            <Pokemon
              {...current}
              incense={incense}
              shinyable={shiny}
              name={name}
              img={img}
              darkBg={!!(index % 2)}
              persistData={persist}
            />
          );
        }}
        renderSectionHeader={({ section }) => (
          <View style={styles.environ}>
            <Text style={{ fontWeight: "bold" }}>{section.title}</Text>
          </View>
        )}
        renderSectionFooter={() => <View style={styles.divider}></View>}
        keyExtractor={(item) => item.name}
      />
      <Text style={{ padding: 16 }}>*: mon is only available for ticket holders through incense</Text>
    </View>
  );
};

export default SectionListBasics;
