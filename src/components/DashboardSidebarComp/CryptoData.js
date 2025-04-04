import React from 'react';

function CryptoData() {
    return(
        <div className="heatmap-container">
        <iframe
          title="Finviz Heatmap"
          src="https://finviz.com/crypto.ashx"
          className="heatmap-iframe"
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </div>
    )
}

export default CryptoData;