import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'utils/enums';
import './App.css';

const App: FC = () => (
	<Router>
		<Routes>
			<Route path={ROUTES.MAIN} element={<div>App</div>} />
		</Routes>
	</Router>
);

export default App;
