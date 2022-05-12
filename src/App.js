import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { appRoutes } from './constants';
import './App.css';

function App() {
	return (
		<Routes>
			{appRoutes.map((route) => {
				if (route.children)
					return (
						<Route
							path={route.url}
							element={lazy(() => import(`./pages/${route.component}`))}
						>
							{route.children.map((child) => (
								<Route
									key={child.url}
									path={child.url}
                  index={Boolean(child.isIndex)}
									element={lazy(() => import(`./pages/${child.component}`))}
								/>
							))}
						</Route>
					);
				return (
					<Route
						key={route.url}
						path={route.url}
            index={Boolean(route.isIndex)}
						element={lazy(() => import(`./pages/${route.component}`))}
					/>
				);
			})}
		</Routes>
	);
}

export default App;
