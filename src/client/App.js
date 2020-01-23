import React from 'react';

// import child components
import WorkbookCreator from './components/WorkbookCreator';
import TableOfContents from './components/TableOfContents';
import WorkbookContainer from './containers/workbookContainer';

const App = () => (
  <div className="grid-container">
    <h1>Awww Sheeet</h1>
    <WorkbookCreator />
    <div />
    <TableOfContents />
    <div />
    <WorkbookContainer />
  </div>
);

export default App;

// render(<App />, document.getElementById('app'));
