import React from 'react';

const RemoteAlphaApp = React.lazy(() => import('ProductAlpha/App'));
const RemoteAlphaButton = React.lazy(() => import('ProductAlpha/Button'));
const RemoteBetaApp = React.lazy(() => import('ProductBeta/App'));
const RemoteBetaButton = React.lazy(() => import('ProductBeta/Button'));

import './App.css';

export const App = () => (
  <div className="App">
    <h1>HOST APP</h1>
    <div className="main">
      <div className="remote">
        <h2>Product Alpha</h2>
        <RemoteAlphaApp />
        <RemoteAlphaButton />
      </div>
      <div className="remote">
        <h2>Product Beta</h2>
        <RemoteBetaApp />
        <RemoteBetaButton />
      </div>
    </div>
  </div>
);
export default App;
