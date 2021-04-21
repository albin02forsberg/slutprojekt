import React, { useEffect, useState } from "react";

function Canvas() {
  const [src, setSrc] = useState(
    "http://localhost:3001/public/images/pitch.png"
  );

  useEffect(() => {
    let canvas = document.getElementById("board");
    let img = new Image();
    img.src = src;

    img.onload = () => {
      canvas.height = img.height;
      canvas.width = img.width;
      canvas.getContext("2d").clearRect(0, 0, img.width, img.height);
      canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);
    };
  }, [src]);

  return (
    <div className="board">
      <h2>Board</h2>
      <canvas id="board"></canvas>
      <div className="btn-group">
        <button className="btn btn-primary">
          <i class="fas fa-times"></i>
        </button>
        <button className="btn btn-primary">
          <i class="far fa-circle"></i>
        </button>
        <button className="btn btn-primary">X med boll</button>
        <button className="btn btn-primary">Mv</button>
        <button className="btn btn-primary">Korna</button>
      </div>
    </div>
  );
}

export default Canvas;
