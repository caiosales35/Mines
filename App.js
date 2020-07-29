import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import params from "./src/params";
import MineField from "./src/components/MineField";
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
} from "./src/functions";

export default function App() {
  const rows = params.getRowsAmount();
  const columns = params.getColumnsAmount();
  const minesAmount = Math.ceil(columns * rows * params.difficultLevel);
  const [board, setBoard] = useState(
    createMinedBoard(rows, columns, minesAmount)
  );
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  onField = (row, column) => {
    const newBoard = cloneBoard(board);
    openField(newBoard, row, column);
    const ifLost = hadExplosion(newBoard);
    const ifWon = wonGame(newBoard);
    if (ifLost) {
      showMines(newBoard);
      alert("Derrota!");
    }
    if (ifWon) {
      alert("Voce venceu!");
    }
    setBoard(newBoard);
    setWon(ifWon);
    setLost(ifLost);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <View style={styles.board}>
        <MineField board={board} onOpenField={onField} />
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
