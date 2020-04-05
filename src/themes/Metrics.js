import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
};

export default metrics;
