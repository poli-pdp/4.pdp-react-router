import { useNavigate, useParams } from 'react-router-dom';

const UserPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/', { replace: true });
	};
	return (
		<div>
			<h2>User Id:{params.id}</h2>
			<br />
			<button onClick={handleClick}>Regresar</button>
		</div>
	);
};

export default UserPage;
