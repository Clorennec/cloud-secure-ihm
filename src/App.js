import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import axios from 'axios';

const App = () => {

  const clientId = "1032672210266-m24bvok732iigjq3pfcqq4ip63r0mgs7.apps.googleusercontent.com";
  console.log(clientId);
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:4000/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
  return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
			</Routes>
		</div>
	);
};

export default App;