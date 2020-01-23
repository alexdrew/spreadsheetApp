import React from 'react';

// import child components
import TableOfContents from './containers/tableOfContents';

const App = () => (
  <div className="grid-container">
    <h1>Awww Sheeet</h1>
    <TableOfContents />
  </div>
);

export default App;

// render(<App />, document.getElementById('app'));
