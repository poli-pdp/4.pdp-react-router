import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
	return (
		<UserContext.Provider value={{ message: 'Hola', user: 'Pedro' }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
