import { Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = new FormData();
		form.append('username', formData.username);
		form.append('password', formData.password);

		try {
			const response = await fetch(
				`http://localhost/session-learn/backend/login.php`,
				{
					method: 'POST',
					body: form,
				}
			);

			if (response.ok) {
				const responseData = await response.json();

				if (responseData) {
					// Store user information in the session storage
					sessionStorage.setItem('userData', JSON.stringify(responseData));

					navigate('/dashboard');
				}
			} else {
				console.error('Failed to login');
			}
		} catch (error) {
			console.error('An error occurred while logging', error);
		}
	};
	return (
		<>
			<Grid
				style={{
					background: `url(https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?w=740&t=st=1695184988~exp=1695185588~hmac=589eaea881d4191567ed9b2ec7660aabb2fa40e541ed15ae923d4cdbb355e64d)`,
					backgroundSize: '100%',
					height: '100vh',
				}}
				container>
				<Grid
					style={{
						// boxShadow: "0 0 5px",
						marginTop: '25px',
						padding: '20px',
						color: 'white',
					}}
					item
					lg={5}
					mx='auto'>
					<Box>
						<Box mt={5}>
							<h3>Login Form </h3>
						</Box>
						<Box mt={2}>
							<h5>UserName</h5>
						</Box>
						<Box>
							<input
								className='form-control'
								placeholder='Enter your Email'
								type='text'
								onChange={(e) =>
									setFormData({ ...formData, username: e.target.value })
								}
								value={formData.username}
							/>
						</Box>
						<Box mt={2}>
							{' '}
							<h5>Password</h5>{' '}
						</Box>
						<Box>
							<input
								className='form-control'
								placeholder='Enter your Password'
								type='text'
								onChange={(e) =>
									setFormData({ ...formData, password: e.target.value })
								}
								value={formData.password}
							/>
						</Box>
						<Box
							onClick={handleSubmit}
							mt={2}
							style={{ textAlign: 'center', cursor: 'pointer' }}
							className='form-control btn-dark'>
							Submit
						</Box>
						<Box
							onClick={() => navigate('/register')}
							mt={2}
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								fontWeight: 'bold',
								fontSize: '20px',
								cursor: 'pointer',
							}}>
							Register ?
						</Box>
					</Box>
				</Grid>
				<Grid item lg={6} mx='auto'>
					<Box mt={3}>
						<img
							style={{ width: '600px', height: '600px' }}
							src='https://media.istockphoto.com/id/1205116274/photo/login-web-form.jpg?s=1024x1024&w=is&k=20&c=BbSzjwf8X-lOJuVXRvKT4uMF3p3MBWvzMKF8b1xTr8Y='
							alt=''
						/>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default LoginForm;
