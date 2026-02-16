import React from "react";
import "./App.css";
import musicIllustration from "./assets/image.png";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={musicIllustration} alt="Music Illustration" />
        </div>

        <div className="card-body">
          <h2>Order Summary</h2>
          <p className="description">
            You can now listen to millions of songs, audiobooks, and podcasts
            on any device anywhere you like!
          </p>

          <div className="plan-box">
            <div className="plan-info">
              <div className="music-icon"></div>
              <div>
                <h4>Annual Plan</h4>
                <span>$59.99/year</span>
              </div>
            </div>
            <button className="change-btn">Change</button>
          </div>

          <button className="payment-btn">Proceed to Payment</button>
          <button className="cancel-btn">Cancel Order</button>
        </div>
      </div>
    </div>
  )
}

export default App