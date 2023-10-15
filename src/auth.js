// auth.js
export const useRequireAuth = () => {
	const userData = sessionStorage.getItem('userData');
	return !!userData; // Returns true if user data exists, indicating the user is authenticated
};
