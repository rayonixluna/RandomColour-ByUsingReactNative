import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const [large, setLarge] = useState(0);

  const [item, setitem] = useState("item");
  const [squares, setSquares] = useState([false]);
  const [litem, setLitem] = useState("item");

  function changeCounter(value) {
    if (value === "increment") {
      setSquares([...squares, <Square />]);
      setCount((count) => count + 1);

      if (count === 1) {
        setitem((item) => "items");
      }

      if (count === large) {
        setLarge((large) => count + 1);
        console.log(count);
        if (large === 1) {
          setLitem((litem) => "items");
        }
      }
    } else if (value === "decrement") {
      if (count > 0) {
        setSquares(squares.filter((v, i) => i !== squares.length - 1));
        setCount((count) => count - 1);

        if (count === 2) {
          setitem((item) => "item");
        }
      }
    }
  }

  return (
    <>
      <View style={{ paddingTop: StatusBar.currentHeight }} />
      <View style={[styles.containerScroll]}>
        <ScrollView>{squares.map((elem) => elem)}</ScrollView>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.fontView}>
          <Text style={styles.viewText}>Current : </Text>
          <Text style={styles.viewText}>{count}</Text>
          <Text style={styles.viewText}> {item}</Text>
        </View>

        <View style={styles.fontView}>
          <Text style={styles.viewText}>Largest : </Text>
          <Text style={styles.viewText}>{large}</Text>
          <Text style={styles.viewText}> {litem}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.containerRow}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => changeCounter("decrement")}
          >
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() => changeCounter("increment")}
          >
            <Text style={styles.buttonText}>Push</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    height: "83.5%"
  },
  containerRow: {
    flexDirection: "row"
  },
  container: {
    justifyContent: "flex-end"
  },

  button1: {
    alignItems: "center",
    backgroundColor: "#FF0000",
    padding: 30,
    width: "50%"
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#00FF00",
    padding: 30,
    width: "50%"
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
    fontSize: 16
  },
  fontView: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "center"
  },
  viewText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16
  }
});

const Square = () => {
  const [cName] = useState(RandomColor());

  const createAlert = () =>
    Alert.alert("Colour", "This is a " + cName + " colour.", [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]);

  return (
    <TouchableOpacity onPress={createAlert}>
      <View
        style={{
          width: "100%",
          height: 40,
          padding: 10,
          backgroundColor: cName
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            textAlignVertical: "auto"
          }}
        >
          {cName}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RandomColor = () => {
  const colours = [
    "lightseagreen",
    "firebrick",
    "lightpink",
    "maroon",
    "cornflowerblue",
    "burlywood",
    "darkslateblue",
    "lightcoral",
    "orange",
    "darksalmon"
  ];
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  var randomColour = colours[Math.floor(random(1, colours.length + 1)) - 1];
  console.log(randomColour);

  return randomColour;
};

export default App;
