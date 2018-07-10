import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './css/index.css';

// App Components
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
