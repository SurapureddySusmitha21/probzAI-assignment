import React from 'react';
import ChartSheet from './components/ChartSheet';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chart.js with React</h1>
      </header>
      <main>
        <ChartSheet />
      </main>
    </div>
  );
};

export default App;
