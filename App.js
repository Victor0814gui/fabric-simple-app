import React, { useState, useRef } from "react";
import { Text,View,TextInput,Animated, StyleSheet } from "react-native";

export default function App(props) {
  const animation = useRef(new Animated.Value(10)).current;
  const [onHover,setOnHover] = useState(false);

  const onMouseEnter = () => {
    // setOnHover(true);
    Animated.timing(animation,{
      useNativeDriver: false,
      duration: 200,
      toValue: 24,
    }).start();
  };

  const onMouseLeave = () => {
    // setOnHover(false);
    Animated.timing(animation,{
      useNativeDriver: false,
      duration: 200,
      toValue: 10,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.box,
          {
            shadowOffset: {
              width: animation,
              height: animation,
            },
          }
        ]} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Text style={styles.text}>Hello World</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  text:{
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 21,
  },
  box:{
    padding: 21,
    height: 100,
    width: 200,
    backgroundColor: "#d9d9d9",
    shadowColor: "#000",
    shadowOffset: {
      width: -12,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 21,
  },
})