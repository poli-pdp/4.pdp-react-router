import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			<h1>DashBoard Page</h1>
			<br />
			<ul>
				<li>
					<Link to='indicadores'>Indicadores</Link>
				</li>
				<li>
					<Link to='metricas'>Metricas</Link>
				</li>
			</ul>
			<br />
			<Outlet />
		</div>
	);
};

export default Dashboard;
