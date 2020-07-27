import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import MineField from "./src/components/MineField";
import { createMinedBoard } from "./src/functions";

export default function App() {
  const rows = params.getRowsAmount();
  const columns = params.getColumnsAmount();
  const minesAmount = Math.ceil(columns * rows * params.difficultLevel);
  const [board, setBoard] = useState(
    createMinedBoard(rows, columns, minesAmount)
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <View style={styles.board}>
        <MineField board={board} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA",
  },
});
