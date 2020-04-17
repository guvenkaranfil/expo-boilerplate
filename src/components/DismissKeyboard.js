import React from "react";
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from "react-native";

const AppWrapper = ({ children }) => {
  return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>;
};

export default AppWrapper;

const styles = StyleSheet.create({});
