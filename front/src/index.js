import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-jsonschema-form-validation/dist/react-jsonschema-form-validation.css';

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);

serviceWorker.unregister();
