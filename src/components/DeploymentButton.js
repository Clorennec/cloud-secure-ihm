import React, { useState } from 'react';

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
      const response = await fetch(endpoint, { method: 'POST' });
      const data = await response.text(); // Récupérer la réponse en tant que texte

      console.log('Server response:', data);
      setOutput(data); // Mettre à jour la sortie avec la réponse du serveur
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
