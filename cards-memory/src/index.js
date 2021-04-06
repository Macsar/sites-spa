import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer/rootReducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store = {store}>
			<App />
		</Provider>
	</React.StrictMode>,
	
	document.getElementById('root')
);

serviceWorker.unregister();