import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/dashboard/*' element={<Dashboard />}>
					<Route path='indicadores' element={<p>Seccion Indicadores</p>} />
					<Route path='metricas' element={<p>Seccion Metricas</p>} />
				</Route>
				<Route path='/users' element={<UsersPage />} />
				<Route path='/usuarios' element={<Navigate to='/users' />} />
				<Route path='/user/:id' element={<UserPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
