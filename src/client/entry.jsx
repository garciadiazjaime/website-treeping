/*eslint-disable */
import React from 'react';
/*eslint-enable */
import 'babel-polyfill';
import { render } from 'react-dom';

import Root from '../shared/containers';

const App = () => (<Root />);


render(<App />, document.getElementById('app'));
