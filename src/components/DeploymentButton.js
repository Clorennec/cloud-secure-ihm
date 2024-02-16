import React, { useState } from 'react';
import axios from 'axios';

function DeploymentButton({ type }) {
  const [deploying, setDeploying] = useState(false);
  const [output, setOutput] = useState('');

  const handleDeployClick = async () => {
    setDeploying(true);
    let endpoint;
    if (type === 'backend') {
      endpoint = `${process.env.REACT_APP_API_URL}/api/deploy/back`;
    } else if (type === 'frontend') {
      endpoint = `${process.env.REACT_APP_API_URL}/api/deploy/front`;
    }

    try {
      const response = await axios.post(endpoint, {}, { withCredentials: true });
      const { data } = response;
      console.log('Server response:', data);
      setOutput(data.output); 
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error deploying: ' + error.message);
    } finally {
      setDeploying(false); 
    }
  };

  return (
    <div>
      <button onClick={handleDeployClick} disabled={deploying}>
        {deploying ? `Déploiement du ${type} en cours...` : `Lancer le déploiement du ${type}`}
      </button>
      <div style={{ width: '500px', height: '400px', overflow: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        <pre style={{ whiteSpace: 'pre-wrap',  textAlign: 'left' }}>{output}</pre>
      </div>
    </div>
  );
}

export default DeploymentButton;
