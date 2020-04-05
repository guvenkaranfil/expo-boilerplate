import React from "react";
import { StyleSheet, Text, View } from "react-native";

// redux
import { connect } from "react-redux";
import UserActions from "../../redux/UserRedux";

// themes
import { CommonStyles } from "../../themes";

const SignIn = ({ user, loginRequest }) => {
  //* Example of How to access Redux :)
  // React.useEffect(() => {
  //   console.log("user => ", user);
  //   loginRequest("email", "passwrd");
  // }, []);
  return (
    <View style={CommonStyles.container}>
      <Text>SignIn</Text>
    </View>
  );
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (email, password) => dispatch(UserActions.loginRequest(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({});
