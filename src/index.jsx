import React from 'react';
import { App } from './App';
import store from './store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import 'swiper/css/bundle';

// React 18
createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyles />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
