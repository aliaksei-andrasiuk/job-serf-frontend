import React from 'react';
import ReactDOM from 'react-dom/client';
import { JobSurf } from './pages/JobSurf';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <JobSurf />
  </React.StrictMode>
);
