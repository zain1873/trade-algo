import React from "react";


function SearchTicker() {
  return (
    <div class="container">
      <div class="row">
        <div className="col position-relative search-main">
          <input
            type="text"
            className="search_bar"
            placeholder="Trade GPT Search Tickers"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default SearchTicker;


