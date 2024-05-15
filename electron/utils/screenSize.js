import { screen } from "electron";
export default function screenSize() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  return {
    // width: width,
    // height: height,
    width: 800,
    height: 600,
  };
}
