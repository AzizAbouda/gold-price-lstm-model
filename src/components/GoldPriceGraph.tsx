import React from 'react';

const GoldPriceGraph: React.FC = () => {
  return (
    <div className="card-content large-chart">
      <div className="card-header">
        <div className="metric-icon gold-icon">🥇</div>
        <div className="chart-title-section">
          <h3>Gold Price Chart</h3>
          <p className="card-subtitle">USD per troy ounce • Last 30 days</p>
        </div>
        <div className="current-price-section">
          <div className="current-price">$2,347.50</div>
          <div className="metric-change positive">+$28.40 (+1.2%)</div>
        </div>
      </div>
      
      <div className="large-chart-container">
        <div className="chart-grid">
          {/* Price levels */}
          <div className="price-levels">
            <span>$2,400</span>
            <span>$2,350</span>
            <span>$2,300</span>
            <span>$2,250</span>
            <span>$2,200</span>
          </div>
          
          {/* Main chart area */}
          <div className="price-chart-large">
            <svg className="chart-svg" viewBox="0 0 600 200">
              {/* Grid lines */}
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              
              {[0, 1, 2, 3, 4].map(i => (
                <line
                  key={i}
                  x1="0"
                  y1={40 * i + 10}
                  x2="600"
                  y2={40 * i + 10}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              ))}
              
              {/* Chart area fill */}
              <path
                d="M 0 120 Q 60 100 120 110 T 240 95 T 360 105 T 480 85 T 600 90 L 600 190 L 0 190 Z"
                fill="url(#goldGradient)"
                className="chart-area"
              />
              
              {/* Chart line */}
              <path
                d="M 0 120 Q 60 100 120 110 T 240 95 T 360 105 T 480 85 T 600 90"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="3"
                strokeLinecap="round"
                className="chart-line"
              />
              
              {/* Data points */}
              {[
                { x: 0, y: 120 },
                { x: 120, y: 110 },
                { x: 240, y: 95 },
                { x: 360, y: 105 },
                { x: 480, y: 85 },
                { x: 600, y: 90 }
              ].map((point, i) => (
                <circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="#D4AF37"
                  className="chart-point"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </svg>
          </div>
        </div>
        
        {/* Time labels */}
        <div className="time-labels">
          <span>30d ago</span>
          <span>24d</span>
          <span>18d</span>
          <span>12d</span>
          <span>6d</span>
          <span>Today</span>
        </div>
      </div>
      
      {/* Chart stats */}
      <div className="chart-stats">
        <div className="stat-item">
          <span className="stat-label">24h High</span>
          <span className="stat-value">$2,365.20</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">24h Low</span>
          <span className="stat-value">$2,331.80</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">24h Volume</span>
          <span className="stat-value">2.4M oz</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Market Cap</span>
          <span className="stat-value">$12.8T</span>
        </div>
      </div>
    </div>
  );
};

export default GoldPriceGraph;