import React, { useEffect, useState } from 'react';
import EstimatorForm from '../components/EstimatorForm';
import USDIndex from '../components/USDIndex';
import GoldPriceGraph from '../components/GoldPriceGraph';
import VolatilityIndex from '../components/VolatilityIndex';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateX(-20px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }

        .professional-card {
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .professional-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          border-color: #D4AF37;
        }

        .stat-counter {
          font-variant-numeric: tabular-nums;
        }

        .gradient-text {
          background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)',
        }}
      >
        {/* Navigation */}
        <nav style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}>
                AU
              </div>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#1a202c',
              }}>
                GoldTech Analytics
              </span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="#" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Markets</a>
              <a href="#" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Analysis</a>
              <a href="#" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Reports</a>
              <button style={{
                background: '#D4AF37',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
              }}>
                Get Started
              </button>
            </div>
          </div>
        </nav>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Hero Section */}
          <section style={{
            paddingTop: '4rem',
            paddingBottom: '4rem',
            textAlign: 'center',
          }}>
            <div style={{
              animation: isLoaded ? 'fadeInUp 0.8s ease-out both' : 'none',
            }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '800',
                color: '#1a202c',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}>
                Professional <span className="gradient-text">Gold Market</span> Intelligence
              </h1>
              
              <p style={{
                fontSize: '1.25rem',
                color: '#4a5568',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
                lineHeight: '1.6',
                animation: isLoaded ? 'fadeInUp 1s ease-out both' : 'none',
              }}>
                Advanced analytics and real-time data for informed gold investment decisions. 
                Trusted by financial professionals worldwide.
              </p>

              {/* Key Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem',
                animation: isLoaded ? 'fadeInUp 1.2s ease-out both' : 'none',
              }}>
                {[
                  { value: '$2,347.50', label: 'Current Gold Price', change: '+1.2%' },
                  { value: '99.7%', label: 'Data Accuracy', change: 'Verified' },
                  { value: '24/7', label: 'Market Coverage', change: 'Live' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    <div className="stat-counter" style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: '#1a202c',
                      marginBottom: '0.25rem',
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#718096',
                      marginBottom: '0.25rem',
                    }}>
                      {stat.label}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#38a169',
                      fontWeight: '600',
                    }}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Analytics Dashboard - Now Using Components */}
          <section style={{ paddingBottom: '4rem' }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.06)',
              overflow: 'hidden',
              animation: isLoaded ? 'fadeInUp 1.4s ease-out both' : 'none',
            }}>
              {/* Dashboard Header */}
              <div style={{
                background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                padding: '2rem',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1a202c',
                  marginBottom: '0.5rem',
                }}>
                  Market Analytics Dashboard
                </h2>
                <p style={{
                  color: '#718096',
                  fontSize: '1rem',
                }}>
                  Real-time market data and comprehensive analysis tools
                </p>
              </div>

              {/* Component Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '0',
              }}>
                {/* Gold Price Graph Component */}
                <div
                  className="professional-card"
                  style={{
                    padding: '2.5rem',
                    borderRight: '1px solid rgba(0,0,0,0.06)',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    minHeight: '240px',
                    animation: isLoaded ? 'slideIn 1.6s ease-out both' : 'none',
                  }}
                >
                  <GoldPriceGraph />
                </div>

                {/* USD Index Component */}
                <div
                  className="professional-card"
                  style={{
                    padding: '2.5rem',
                    borderRight: '1px solid rgba(0,0,0,0.06)',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    minHeight: '240px',
                    animation: isLoaded ? 'slideIn 1.8s ease-out both' : 'none',
                  }}
                >
                  <USDIndex />
                </div>

                {/* Volatility Index Component */}
                <div
                  className="professional-card"
                  style={{
                    padding: '2.5rem',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    minHeight: '240px',
                    animation: isLoaded ? 'slideIn 2.0s ease-out both' : 'none',
                  }}
                >
                  <VolatilityIndex />
                </div>
              </div>
            </div>
          </section>

          {/* Estimator Form Section */}
          <section style={{ paddingBottom: '4rem' }}>
            <div style={{
              animation: isLoaded ? 'fadeInUp 2.2s ease-out both' : 'none',
            }}>
              <EstimatorForm />
            </div>
          </section>

          {/* CTA Section */}
          <section style={{
            textAlign: 'center',
            paddingBottom: '4rem',
            animation: isLoaded ? 'fadeInUp 2.4s ease-out both' : 'none',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
              borderRadius: '16px',
              padding: '3rem 2rem',
              color: 'white',
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1rem',
              }}>
                Start Your Professional Analysis
              </h2>
              <p style={{
                fontSize: '1.125rem',
                opacity: 0.9,
                marginBottom: '2rem',
                maxWidth: '500px',
                margin: '0 auto 2rem',
              }}>
                Access comprehensive gold market analytics with institutional-grade accuracy
              </p>
              <a
                href="/analytics"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: '#D4AF37',
                  color: '#1a202c',
                  textDecoration: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(212,175,55,0.3)',
                }}
                onMouseEnter={e => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 8px 30px rgba(212,175,55,0.4)';
                }}
                onMouseLeave={e => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 4px 20px rgba(212,175,55,0.3)';
                }}
              >
                Launch Analytics Platform
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path fillRule="evenodd" d="M9.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L13.94 9 9.22 4.28a.75.75 0 010-1.06z" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;