function Login() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div>
			<h1>Log in Form</h1>
			<div>
				<div>
					<button onClick={googleAuth}>
						<span>Sing in with Google2S</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
