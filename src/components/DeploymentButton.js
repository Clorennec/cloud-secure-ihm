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
      const responseData = response.data; // Récupérer les données de la réponse

      console.log('Server response:', responseData);
      setOutput(responseData); // Mettre à jour la sortie avec la réponse du serveur
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error deploying: ' + error.message);
    } finally {
      setDeploying(false); // Mettre à jour l'état du déploiement une fois terminé (quelle que soit la réponse)
    }
  };

  return (
    <div>
      <button onClick={handleDeployClick} disabled={deploying}>
        {deploying ? `Déploiement du ${type} en cours...` : `Lancer le déploiement du ${type}`}
      </button>
      <pre>{output}</pre> {/* Afficher la sortie des scripts */}
    </div>
  );
}

export default DeploymentButton;
