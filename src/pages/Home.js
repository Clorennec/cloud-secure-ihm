import DeploymentButton from "../components/DeploymentButton";

function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};

	return (
		<div>
			<h1>Home</h1>
			<div>
				<div>
					<h2>Profile</h2>
					<img
						src={user.picture}
						alt="profile"
					/>
					<input
						type="text"
						defaultValue={user.name}
						placeholder="UserName"
					/>
					<button onClick={logout}>
						Log Out
					</button>
					<div>
						<DeploymentButton type="backend" />
						<DeploymentButton type="frontend" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;