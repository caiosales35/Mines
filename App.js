import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import params from "./src/params";
import MineField from "./src/components/MineField";
import Header from "./src/components/Header";
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagUsed,
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

  createState = () => {
    setBoard(createMinedBoard(rows, columns, minesAmount));
    setLost(false);
    setWon(false);
  };

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

  onFlag = (row, column) => {
    const newBoard = cloneBoard(board);
    invertFlag(newBoard, row, column);
    const ifWon = wonGame(newBoard);
    if (ifWon) alert("Voce venceu!");
    setBoard(newBoard);
    setWon(ifWon);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        flagsLeft={minesAmount - flagUsed(board)}
        onNewGame={createState}
      />
      <View style={styles.board}>
        <MineField board={board} onOpenField={onField} onSelectField={onFlag} />
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
