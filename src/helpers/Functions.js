import { Metrics } from "../themes";

function percantageCalculate(value) {
  return Math.ceil((Metrics.DEVICE_HEIGHT * ((value / 812) * 100)) / 100); // 812 is design screen height ( iPhoneX  )
}

export default { percantageCalculate };
