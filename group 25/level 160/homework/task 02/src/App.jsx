import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        
        <div className="left">
          <h4>Your Result</h4>

          <div className="score-circle">
            <h1>76</h1>
            <p>of 100</p>
          </div>

          <h2>Great</h2>
          <p className="left-text">
            You scored higher than 65% of the people who have taken
            these tests.
          </p>
        </div>

        <div className="right">
          <h3>Summary</h3>

          <div className="summary-item reaction">
            <span>⚡ Reaction</span>
            <span><b>80</b> / 100</span>
          </div>

          <div className="summary-item memory">
            <span>🧠 Memory</span>
            <span><b>92</b> / 100</span>
          </div>

          <div className="summary-item verbal">
            <span>💬 Verbal</span>
            <span><b>61</b> / 100</span>
          </div>

          <div className="summary-item visual">
            <span>👁 Visual</span>
            <span><b>73</b> / 100</span>
          </div>

          <button className="continue-btn">Continue</button>
        </div>

      </div>
    </div>
  )
}

export default App