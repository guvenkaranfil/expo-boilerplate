// Font Family Types
const type = {
  Light: "RobotoLight",
  Regular: "RobotoRegular",
  RobotoRobotoBold: "RobotoBold",
  Black: "RobotoBlack",
};

// Font Sizes
const size = {
  h1: 30,
  h2: 16,
  h3: 14,
  h4: 13,
  h5: 12,
  h6: 10,
  input: 16,
  bold: 16,
  medium: 14,
  regular: 13,
  small: 12,
  tiny: 10,
};

// Styles
const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontWeight: "bold",
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
  },
};

export default {
  type,
  size,
  style,
};
