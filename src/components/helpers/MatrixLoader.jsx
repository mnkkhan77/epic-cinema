import { useRef, useEffect } from "react";

const renderMatrix = (canvas, color) => {
  let context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const alphabet = katakana + latin + nums;

  const fontSize = 16;
  const minColumns = 20; // minimum number of columns
  const maxColumns = 100; // maximum number of columns
  let columns = Math.floor(canvas.width / fontSize);
  columns = Math.max(columns, minColumns); // at least minColumns
  columns = Math.min(columns, maxColumns); // at most maxColumns

  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const render = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)"; // black w a tiny bit of alpha
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = color ? color : "#0F0";
    context.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      // randomize the string of characters to render
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };
  return render;
};

const MatrixLoader = ({ width, height, color, position }) => {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const render = renderMatrix(canvas, color);
    const intervalId = setInterval(render, 30);
    return () => clearInterval(intervalId);
  }, [color]);

  return (
    <div style={{ width, height, position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: position,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Something went wrong
      </div>
    </div>
  );
};

export default MatrixLoader;
