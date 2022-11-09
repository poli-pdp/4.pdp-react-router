import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const handleClick = () => {
		navigate('/', { replace: true });
	};
	return (
		<div>
			<h2>User Id:{params.id}</h2>
			<br />
			<h2>Name user: {user}</h2>
			<br />
			<button onClick={handleClick}>Regresar</button>
		</div>
	);
};

export default UserPage;
