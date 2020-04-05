import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";

// Store
import { store } from "./src/redux/store/Store";

// Route
import Routes from "./src/navigation/Routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
