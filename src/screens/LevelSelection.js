import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";

export default (props) => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={style.frame}>
        <View style={style.container}>
          <Text style={style.title}>Selecione o Nivel</Text>
          <TouchableOpacity
            style={[style.button, style.bgEasy]}
            onPress={() => props.onLevelSelect(0.1)}
          >
            <Text style={style.buttonLevel}>Facil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.button, style.bgNormal]}
            onPress={() => props.onLevelSelect(0.2)}
          >
            <Text style={style.buttonLevel}>Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.button, style.bgHard]}
            onPress={() => props.onLevelSelect(0.3)}
          >
            <Text style={style.buttonLevel}>Dificil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  container: {
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLevel: {
    fontSize: 20,
    color: "#EEE",
    fontWeight: "bold",
  },
  bgEasy: {
    backgroundColor: "#49b65d",
  },
  bgNormal: {
    backgroundColor: "#2765F7",
  },
  bgHard: {
    backgroundColor: "#F26337",
  },
});
