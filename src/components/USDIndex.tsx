import React from 'react';

const USDIndex: React.FC = () => {
  return (
    <div className="card-content">
      <div className="card-header">
        <div className="metric-icon dollar-icon">💵</div>
        <div>
          <h3>US Dollar Index</h3>
          <p className="card-subtitle">DXY strength indicator</p>
        </div>
      </div>
      <div className="metric-container">
        <div className="circular-progress">
          <svg className="progress-ring" width="120" height="120">
            <circle
              className="progress-ring-circle-bg"
              cx="60"
              cy="60"
              r="50"
            />
            <circle
              className="progress-ring-circle"
              cx="60"
              cy="60"
              r="50"
              style={{
                strokeDasharray: '314',
                strokeDashoffset: '94'
              }}
            />
          </svg>
          <div className="progress-value">103.42</div>
        </div>
        <div className="metric-details">
          <div className="metric-label">Index Value</div>
          <div className="metric-change negative">-0.83 (-0.8%)</div>
        </div>
      </div>
    </div>
  );
};

export default USDIndex;