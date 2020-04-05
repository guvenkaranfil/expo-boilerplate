import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

// themes
import { Colors } from "../themes";

const StyledInput = ({ formikKey, formikProps, ...input }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...input}
      />
      <Text style={styles.errorText}>{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
    </View>
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    borderStyle: "solid",
    height: 50,
    paddingLeft: 10,
    paddingRight: 24,
    fontSize: 14,
    color: Colors.lightBlack,
  },
  errorText: {
    paddingTop: 5,
    fontSize: 12,
    color: Colors.red,
  },
});
