// MainRouter.js
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import DashBoard from './Page/DashBoard';
import LoginForm from './Form/LoginFrom';
import { useRequireAuth } from './auth';

const PrivateRoute = ({ element, ...props }) => {
	const isAuthenticated = useRequireAuth();

	return isAuthenticated ? (
		React.cloneElement(element, { ...props }) // Pass the props to the element
	) : (
		<Navigate to='/' replace />
	);
};

const MainRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LoginForm />} />
				<Route
					path='/dashboard'
					element={<PrivateRoute element={<DashBoard />} />}
				/>
			</Routes>
		</Router>
	);
};

export default MainRouter;
