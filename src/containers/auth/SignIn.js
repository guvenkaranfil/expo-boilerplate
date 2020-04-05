import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Button } from "react-native";

// components
import { StyledInput } from "../../components";

// Formik
import { Formik } from "formik";

// redux
import { connect } from "react-redux";
import UserActions from "../../redux/UserRedux";

// validations
import { SignInValidation } from "../../validations";

// themes
import { CommonStyles } from "../../themes";

const SignIn = ({ user, loginRequest }) => {
  //* Example of How to access Redux :)
  // React.useEffect(() => {
  //   console.log("user => ", user);
  //   loginRequest("email", "passwrd");
  // }, []);

  const signUp = ({ email }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "a@a.com") {
          reject(new Error("You playin' with that fake email address."));
        }
        resolve(true);
      }, 1000);
    });

  return (
    <View style={CommonStyles.container}>
      <Formik
        initialValues={{
          email: "guvenkaranfil235@gmail.com",
          password: "123456",
          confirmPassword: "123456",
        }}
        onSubmit={(values, actions) => {
          signUp({ email: values.email })
            .then(() => {
              alert(JSON.stringify(values));
            })
            .catch((error) => {
              actions.setFieldError("general", error.message);
            })
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
        validationSchema={SignInValidation}
      >
        {(formikProps) => (
          <React.Fragment>
            <StyledInput
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="johndoe@example.com"
              autoFocus
            />

            <StyledInput
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              placeholder="password"
              secureTextEntry
            />

            <StyledInput
              label="Confirm Password"
              formikProps={formikProps}
              formikKey="confirmPassword"
              placeholder="confirm password"
              secureTextEntry
            />

            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <React.Fragment>
                <Button title="Submit" onPress={formikProps.handleSubmit} />
                <Text style={{ color: "red" }}>{user.loginRequestError && user.loginRequestError}</Text>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </Formik>
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
