import React, { useState } from 'react';

interface EstimatorFormProps {
  onEstimate?: (data: EstimationData) => void;
}

interface EstimationData {
  timeframe: string;
  marketFactors: {
    inflation: number;
    dollarIndex: number;
    interestRates: number;
    geopoliticalTension: number;
  };
  technicalIndicators: {
    momentum: number;
    volatility: number;
    volume: number;
  };
}

const EstimatorForm: React.FC<EstimatorFormProps> = ({ onEstimate }) => {
  const [timeframe, setTimeframe] = useState('1week');
  const [marketFactors, setMarketFactors] = useState({
    inflation: 50,
    dollarIndex: 50,
    interestRates: 50,
    geopoliticalTension: 50
  });
  const [technicalIndicators, setTechnicalIndicators] = useState({
    momentum: 50,
    volatility: 50,
    volume: 50
  });
  const [isLoading, setIsLoading] = useState(false);
  const [estimation, setEstimation] = useState<number | null>(null);

  const handleEstimate = async () => {
    setIsLoading(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock estimation calculation
    const basePrice = 2347.50;
    const factorMultiplier = (
      (marketFactors.inflation - 50) * 0.02 +
      (marketFactors.dollarIndex - 50) * -0.015 +
      (marketFactors.interestRates - 50) * -0.01 +
      (marketFactors.geopoliticalTension - 50) * 0.025 +
      (technicalIndicators.momentum - 50) * 0.02 +
      (technicalIndicators.volatility - 50) * 0.01 +
      (technicalIndicators.volume - 50) * 0.005
    ) / 100;
    
    const timeMultiplier = {
      '1day': 0.5,
      '1week': 1,
      '1month': 2.5,
      '3months': 6,
      '6months': 12,
      '1year': 20
    }[timeframe] || 1;
    
    const estimatedPrice = basePrice * (1 + factorMultiplier * timeMultiplier);
    setEstimation(Math.round(estimatedPrice * 100) / 100);
    setIsLoading(false);
    
    if (onEstimate) {
      onEstimate({
        timeframe,
        marketFactors,
        technicalIndicators
      });
    }
  };

  return (
    <div className="estimator-form">
      <div className="form-header">
        <h2>AI Gold Price Estimator</h2>
        <p>Configure market parameters for intelligent price prediction</p>
      </div>

      <div className="form-section">
        <h3>Prediction Timeframe</h3>
        <div className="timeframe-selector">
          {[
            { value: '1day', label: '1 Day' },
            { value: '1week', label: '1 Week' },
            { value: '1month', label: '1 Month' },
            { value: '3months', label: '3 Months' },
            { value: '6months', label: '6 Months' },
            { value: '1year', label: '1 Year' }
          ].map(option => (
            <button
              key={option.value}
              className={`timeframe-btn ${timeframe === option.value ? 'active' : ''}`}
              onClick={() => setTimeframe(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Market Factors</h3>
        <div className="sliders-grid">
          <div className="slider-item">
            <label>Inflation Pressure</label>
            <input
              type="range"
              min="0"
              max="100"
              value={marketFactors.inflation}
              onChange={(e) => setMarketFactors(prev => ({
                ...prev,
                inflation: parseInt(e.target.value)
              }))}
              className="slider"
            />
            <span>{marketFactors.inflation}%</span>
          </div>
          
          <div className="slider-item">
            <label>Dollar Index Strength</label>
            <input
              type="range"
              min="0"
              max="100"
              value={marketFactors.dollarIndex}
              onChange={(e) => setMarketFactors(prev => ({
                ...prev,
                dollarIndex: parseInt(e.target.value)
              }))}
              className="slider"
            />
            <span>{marketFactors.dollarIndex}%</span>
          </div>
          
          <div className="slider-item">
            <label>Interest Rates</label>
            <input
              type="range"
              min="0"
              max="100"
              value={marketFactors.interestRates}
              onChange={(e) => setMarketFactors(prev => ({
                ...prev,
                interestRates: parseInt(e.target.value)
              }))}
              className="slider"
            />
            <span>{marketFactors.interestRates}%</span>
          </div>
          
          <div className="slider-item">
            <label>Geopolitical Tension</label>
            <input
              type="range"
              min="0"
              max="100"
              value={marketFactors.geopoliticalTension}
              onChange={(e) => setMarketFactors(prev => ({
                ...prev,
                geopoliticalTension: parseInt(e.target.value)
              }))}
              className="slider"
            />
            <span>{marketFactors.geopoliticalTension}%</span>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Technical Indicators</h3>
        <div className="sliders-grid">
          <div className="slider-item">
            <label>Price Momentum</label>
            <input
              type="range"
              min="0"
              max="100"
              value={technicalIndicators.momentum}
              onChange={(e) => setTechnicalIndicators(prev => ({
                ...prev,
                momentum: parseInt(e.target.value)
              }))}
              className="slider"
            />
            <span>{technicalIndicators.momentum}%</span>
          </div>
          
          <div className="slider-item">
            <label>Market Volatility</label>
            <input
              type="range"
              min="0"
              max="100"
              value={technicalIndicators.volatility}
              onChange={(e) => setTechnicalIndicators(prev => ({
                ...prev,
                volatility: parseInt(e.target.value)
              }))}
              className="slider"
            />
            <span>{technicalIndicators.volatility}%</span>
          </div>
          
          <div className="slider-item">
            <label>Trading Volume</label>
            <input
              type="range"
              min="0"
              max="100"
              value={technicalIndicators.volume}
              onChange={(e) => setTechnicalIndicators(prev => ({
                ...prev,
                volume: parseInt(e.target.value)
              }))}
              className="slider"
            />
            <span>{technicalIndicators.volume}%</span>
          </div>
        </div>
      </div>

      <div className="estimation-section">
        <button 
          className="estimate-btn"
          onClick={handleEstimate}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="loading-spinner"></div>
              Processing AI Analysis...
            </>
          ) : (
            <>
              <span>🎯</span>
              Generate Price Estimation
            </>
          )}
        </button>

        {estimation && (
          <div className="estimation-result">
            <div className="result-header">
              <h3>Estimated Gold Price</h3>
              <p>Based on AI analysis for {timeframe.replace(/(\d+)(\w+)/, '$1 $2')}</p>
            </div>
            <div className="result-price">
              ${estimation.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className="result-change">
              {estimation > 2347.50 ? '+' : ''}
              ${(estimation - 2347.50).toFixed(2)} ({((estimation - 2347.50) / 2347.50 * 100).toFixed(2)}%)
            </div>
          </div>
        )}
      </div>

      <style>{`
        .estimator-form {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          color: white;
          max-width: 800px;
          margin: 0 auto;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-header h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #D4AF37;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
        }

        .form-section {
          margin-bottom: 2rem;
        }

        .form-section h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .timeframe-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.5rem;
        }

        .timeframe-btn {
          padding: 0.75rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .timeframe-btn:hover {
          border-color: rgba(212, 175, 55, 0.5);
          background: rgba(212, 175, 55, 0.1);
        }

        .timeframe-btn.active {
          background: linear-gradient(135deg, #D4AF37, #B8860B);
          border-color: #D4AF37;
        }

        .sliders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .slider-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .slider-item label {
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
        }

        .slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.2);
          outline: none;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4AF37, #B8860B);
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4AF37, #B8860B);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
        }

        .slider-item span {
          font-size: 0.875rem;
          font-weight: 600;
          color: #D4AF37;
          text-align: center;
        }

        .estimation-section {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .estimate-btn {
          background: linear-gradient(135deg, #D4AF37, #B8860B);
          border: none;
          border-radius: 16px;
          padding: 1rem 2rem;
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0 auto 2rem;
        }

        .estimate-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        .estimate-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .estimation-result {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 16px;
          padding: 2rem;
          animation: fadeInUp 0.5s ease-out;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .result-header h3 {
          color: #D4AF37;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .result-header p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .result-price {
          font-size: 3rem;
          font-weight: 900;
          color: #D4AF37;
          margin: 1rem 0;
        }

        .result-change {
          font-size: 1.1rem;
          font-weight: 600;
          color: #10b981;
        }

        @media (max-width: 768px) {
          .timeframe-selector {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .sliders-grid {
            grid-template-columns: 1fr;
          }
          
          .result-price {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EstimatorForm;