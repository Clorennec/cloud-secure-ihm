import axios from "axios";

function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};

    const handleDeploy = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/deploy`;
            const response = await axios.post(url, {}, { withCredentials: true });
            console.log(response);
        } catch (err) {
            console.log(err);
        }

    }
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
					<input
						type="text"
						defaultValue={user.email}
						placeholder="Email"
					/>
					<button onClick={logout}>
						Log Out
					</button>
                    <button onClick={handleDeploy}>
						deploy
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;