// Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequireAuth } from '../auth';

const DashBoard = () => {
	const navigate = useNavigate();

	// Redirect to login if not authenticated
	useRequireAuth();

	const handleLogout = async () => {
		sessionStorage.clear();
		try {
			const response = await fetch(
				'http://localhost/session-learn/backend/logout.php',
				{
					method: 'POST',
					credentials: 'include',
				}
			);
			if (response.ok) {
				// Provide feedback to the user upon successful logout
				console.log('Logout successful');
				// Redirect to the login page
				navigate('/');
			} else {
				console.error('Failed to log out');
			}
		} catch (error) {
			console.error('An error occurred while logging out', error);
		}
	};

	return (
		<div>
			<h1 style={{ cursor: 'pointer' }} onClick={handleLogout}>
				LogOut
			</h1>
		</div>
	);
};

export default DashBoard;
