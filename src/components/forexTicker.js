import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme

const ForexTicker = () => {
  const [forexData, setForexData] = useState(null);

  useEffect(() => {
    const fetchForexData = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setForexData(response.data.rates);
      } catch (error) {
        console.error("Error fetching forex data:", error);
      }
    };

    fetchForexData();
    const intervalId = setInterval(fetchForexData, 60000); // Update every 60 seconds
    return () => clearInterval(intervalId);
  }, []);

  const settings = {
    dots: false,
    infinite: true, // Ensure the slider runs in an infinite loop
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed to 2 seconds
    pauseOnHover: false, // Ensure autoplay continues even when hovered over
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="forex-ticker-container">
      {forexData ? (
        <Slider {...settings}>
          <div className="forex-ticker-item">
            EUR: {forexData.EUR.toFixed(3)}
          </div>
          <div className="forex-ticker-item">
            GBP: {forexData.GBP.toFixed(3)}
          </div>
          <div className="forex-ticker-item">
            JPY: {forexData.JPY.toFixed(2)}
          </div>
          <div className="forex-ticker-item">
            AUD: {forexData.AUD.toFixed(3)}
          </div>
          {/* Duplicate the items for a seamless loop effect */}
          <div className="forex-ticker-item">
            EUR: {forexData.EUR.toFixed(3)}
          </div>
          <div className="forex-ticker-item">
            GBP: {forexData.GBP.toFixed(3)}
          </div>
          <div className="forex-ticker-item">
            JPY: {forexData.JPY.toFixed(2)}
          </div>
          <div className="forex-ticker-item">
            AUD: {forexData.AUD.toFixed(3)}
          </div>
        </Slider>
      ) : (
        <p>Loading forex data...</p>
      )}
    </div>
  );
};

export default ForexTicker;
