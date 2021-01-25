import {TextArea} from "./components/Style.js";
import "./App.css";
import {useState} from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {

  const [textStyle, setStyle] = useState("");
  const [textColor, setColor] = useState("");

  const styling = () => {
    setStyle(textStyle);
  }

  const coloring = () => {
    setColor(textColor);
  }

  const stylingBoxes = stylings.map((style) => (
    <button className="btn btn-light" style={styles[style]} key={style} textStyle = {style} onClick={styling(textStyle)}>
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      textColor = {color}
      onClick={coloring(textColor)}
    />
  ));


  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <TextArea />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
