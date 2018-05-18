import React from 'react';
import ReactDOM from 'react-dom';

// import Bootstrap CSS first, so that, when needed, we can
// override it later with our own CSS specified in index.css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
