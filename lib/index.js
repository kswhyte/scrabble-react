import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application';

require('./styles/components/all.scss');

render(<Application />, document.getElementById('application'))
