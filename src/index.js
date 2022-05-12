import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Loading } from './modules';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<App />
			</Suspense>
		</BrowserRouter>
	</StrictMode>
);
