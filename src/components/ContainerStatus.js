import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContainerStatus({ type }) {
    const [isRunning, setIsRunning] = useState(false);
    let endpoint;
    if (type === 'backend') {
        endpoint = `${process.env.REACT_APP_API_URL}/api/status/back`;
    } else if (type === 'frontend') {
        endpoint = `${process.env.REACT_APP_API_URL}/api/status/front`;
    }

    useEffect(() => {
        const fetchContainerStatus = async () => {
            try {
                const response = await axios.get(endpoint);
                setIsRunning(response.data.isRunning);
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'état du conteneur:', error);
            }
        };

        fetchContainerStatus();
    }, []);

    return (
        <div>
            {isRunning ? <div style={{ backgroundColor: 'green', width: '100px', height: '100px' }}></div> : <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}></div>}
        </div>
    );
}

export default ContainerStatus;
