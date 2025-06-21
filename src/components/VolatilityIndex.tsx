import React from 'react';

const VolatilityIndex: React.FC = () => {
  return (
    <div className="card-content">
      <div className="card-header">
        <div className="metric-icon volatility-icon">📊</div>
        <div>
          <h3>Volatility Index</h3>
          <p className="card-subtitle">Market uncertainty measure</p>
        </div>
      </div>
      <div className="metric-container">
        <div className="metric-visual volatility-visual">
          <div className="pulse-ring"></div>
          <div className="metric-value-large">23.4</div>
        </div>
        <div className="metric-details">
          <div className="metric-label">Current Level</div>
          <div className="metric-change negative">+2.1% from yesterday</div>
        </div>
      </div>
    </div>
  );
};

export default VolatilityIndex;