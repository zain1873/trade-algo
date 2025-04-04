import React from "react";

function ForexData() {
  return (
    <div className="heatmap-container">
      <iframe
        title="Finviz Heatmap"
        src="https://finviz.com/map.ashx?t=sec"
        className="heatmap-iframe"
        width="100%"
        height="600"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default ForexData;
