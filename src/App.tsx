import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced components with modern animations
  const VolatilityIndex = () => (
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

  const GoldPriceGraph = () => (
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

  const USIndexGraph = () => (
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          margin: 0;
          padding: 0;
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-50px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(50px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.8);
          }
          to { 
            opacity: 1; 
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes pulseRing {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes chartBarGrow {
          from { height: 0; }
          to { height: var(--bar-height); }
        }

        @keyframes progressFill {
          from { stroke-dashoffset: 314; }
          to { stroke-dashoffset: var(--progress-offset); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
        }

        .main-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }

        .main-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
          animation: ${isLoaded ? 'fadeInUp 0.8s ease-out both' : 'none'};
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .logo {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #D4AF37, #B8860B);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
          animation: ${isLoaded ? 'float 3s ease-in-out infinite' : 'none'};
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
        }

        .title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: white;
          margin: 0;
          background: linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        }

        .subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 1rem;
          line-height: 1.6;
        }

        .live-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #10b981;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .right-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .data-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .data-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }

        .data-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .card-content {
          padding: 2rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .card-header h3 {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
        }

        .card-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
          margin: 0.25rem 0 0 0;
        }

        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .volatility-icon {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .gold-icon {
          background: linear-gradient(135deg, #D4AF37, #B8860B);
        }

        .dollar-icon {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .metric-container {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .metric-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .volatility-visual {
          width: 120px;
          height: 120px;
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #ef4444;
          border-radius: 50%;
          animation: pulseRing 2s infinite;
        }

        .metric-value-large {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ef4444;
          z-index: 1;
        }

        .large-chart {
          padding: 2rem;
        }

        .gold-chart-card {
          min-height: 500px;
        }

        .chart-title-section {
          flex: 1;
        }

        .current-price-section {
          text-align: right;
        }

        .current-price {
          font-size: 2.5rem;
          font-weight: 800;
          color: #D4AF37;
          margin-bottom: 0.5rem;
        }

        .large-chart-container {
          margin-top: 2rem;
        }

        .chart-grid {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .price-levels {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          padding: 10px 0;
          min-width: 60px;
        }

        .price-chart-large {
          flex: 1;
          height: 200px;
        }

        .chart-svg {
          width: 100%;
          height: 100%;
        }

        .chart-area {
          animation: chartAreaFill 2s ease-out both;
        }

        .chart-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: chartLineDraw 2s ease-out 0.5s both;
        }

        .chart-point {
          opacity: 0;
          animation: chartPointAppear 0.5s ease-out both;
        }

        .time-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 1rem;
          padding: 0 1rem;
        }

        .chart-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-item {
          text-align: center;
        }

        .stat-label {
          display: block;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        @keyframes chartAreaFill {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes chartLineDraw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes chartPointAppear {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }

        .circular-progress {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .progress-ring {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .progress-ring-circle-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 8;
        }

        .progress-ring-circle {
          fill: none;
          stroke: #10b981;
          stroke-width: 8;
          stroke-linecap: round;
          animation: progressFill 2s ease-out both;
        }

        .progress-value {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5rem;
          font-weight: 700;
          color: #10b981;
        }

        .metric-details {
          flex: 1;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 800;
          color: #D4AF37;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .metric-change {
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          display: inline-block;
        }

        .metric-change.positive {
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
        }

        .metric-change.negative {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .estimation-section {
          display: flex;
          justify-content: center;
          animation: ${isLoaded ? 'scaleIn 1.2s ease-out both' : 'none'};
        }

        .estimation-card {
          display: block;
          background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
          border-radius: 24px;
          padding: 3rem 4rem;
          text-decoration: none;
          color: white;
          max-width: 600px;
          width: 100%;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: ${isLoaded ? 'glow 4s ease-in-out infinite' : 'none'};
        }

        .estimation-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .estimation-card:hover::before {
          left: 100%;
        }

        .estimation-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 80px rgba(212, 175, 55, 0.4);
        }

        .estimation-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: ${isLoaded ? 'float 2s ease-in-out infinite' : 'none'};
        }

        .estimation-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        .estimation-description {
          font-size: 1.125rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .estimation-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .estimation-card:hover .arrow {
          transform: translateX(10px);
        }

        .footer {
          text-align: center;
          margin-top: 4rem;
          padding: 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          animation: ${isLoaded ? 'fadeInUp 1.4s ease-out both' : 'none'};
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          
          .right-column {
            order: -1;
          }
          
          .chart-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .metric-container {
            flex-direction: column;
            gap: 1rem;
          }
          
          .header-content {
            flex-direction: column;
            gap: 1rem;
          }
          
          .estimation-card {
            padding: 2rem;
          }
        }

        .card-1 { animation: ${isLoaded ? 'slideInLeft 0.8s ease-out 0.2s both' : 'none'}; }
        .card-2 { animation: ${isLoaded ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none'}; }
        .card-3 { animation: ${isLoaded ? 'slideInRight 0.8s ease-out 0.6s both' : 'none'}; }
      `}</style>

      <div className="main-container">
        <div className="content-wrapper">
          
          {/* Header */}
          <header className="header">
            <div className="header-content">
              <div className="logo">AU</div>
              <h1 className="title">Gold Market Analytics</h1>
            </div>
            <p className="subtitle">
              Advanced market intelligence and real-time price analytics for gold trading professionals
            </p>
            <div className="live-indicator">
              <div className="live-dot"></div>
              <span>Live Data • {currentTime.toLocaleTimeString()}</span>
            </div>
          </header>

          {/* Dashboard Grid */}
          <div className="dashboard-grid">
            
            {/* Large Gold Price Chart - Left Side */}
            <div className="data-card card-1 gold-chart-card">
              <GoldPriceGraph />
            </div>

            {/* Right Column with Indexes */}
            <div className="right-column">
              {/* Volatility Index Card */}
              <div className="data-card card-2">
                <VolatilityIndex />
              </div>

              {/* US Dollar Index Card */}
              <div className="data-card card-3">
                <USIndexGraph />
              </div>
            </div>

          </div>

          {/* Price Estimation Card */}
          <div className="estimation-section">
            <a href="/estimate" className="estimation-card">
              <div className="estimation-icon">🎯</div>
              
              <h2 className="estimation-title">
                AI Price Estimation
              </h2>
              
              <p className="estimation-description">
                Harness advanced machine learning algorithms and comprehensive market analysis for precise gold price predictions
              </p>
              
              <div className="estimation-cta">
                <span>Launch Estimation Tool</span>
                <svg 
                  className="arrow"
                  width="24" 
                  height="24" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* Footer */}
          <footer className="footer">
            <p className="footer-text">
              Real-time data updates • Advanced ML models • 99.9% uptime guarantee
            </p>
          </footer>

        </div>
      </div>
    </>
  );
};

export default Home;