import React from 'react';
import EstimatorForm from '../components/EstimatorForm';

const Estimator: React.FC = () => (
  <div style={{ maxWidth: 600, margin: '2rem auto' }}>
    <h2>Gold Price Estimation</h2>
    <EstimatorForm />
  </div>
);

export default Estimator;