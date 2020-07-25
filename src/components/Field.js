import React from "react";
import { View, StyleSheet, Text } from "react-native";
import params from "../params";

export default (props) => {
  const { mined, opened, nearMines } = props;

  const styleField = [style.field];
  // outros estilos
  if (opened) styleField.push(style.opened);
  if (styleField.length === 1) styleField.push(style.regular);

  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = "#2A28D7";
    if (nearMines == 2) color = "#2B520F";
    if (nearMines > 2 && nearMines < 6) color = "#F9060A";
    if (nearMines >= 6) color = "#F221A9";
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[style.label, { color: color }]}>{nearMines}</Text>
      ) : (
        false
      )}
    </View>
  );
};

const style = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#CCC",
    borderTopColor: "#CCC",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: params.fontSize,
  },
});
