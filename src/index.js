import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// react-md utilizes Google's material icons
import WebFont from 'webfontloader';

WebFont.load({
  google: { families: ['Material Icons'] },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
