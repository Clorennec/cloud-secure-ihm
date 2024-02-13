import DeploymentButton from "../components/DeploymentButton";
import ContainerStatus from "../components/ContainerStatus";

function Home({ user }) {
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };

  return (
    <div>
      <h1>Bonjour {user.name}</h1> {/* Afficher "Bonjour" suivi du nom du profil */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: 'auto' }}>
        <div style={{ textAlign: 'left' }}>
          <h2>Frontend</h2>
		  <ContainerStatus type="frontend"/>
          <DeploymentButton type="frontend" />
        </div>
        <div style={{ textAlign: 'right' }}>
          <h2>Backend</h2>
		  <ContainerStatus type="backend"/>
          <DeploymentButton type="backend" />
        </div>
      </div>
      <button onClick={logout}>Déconnexion</button> {/* Bouton de déconnexion */}
    </div>
  );
}

export default Home;
