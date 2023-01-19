import './App.css';
import React from 'react';
import {Routes} from './components/Routes';
import {AppContextComponent} from './context/contextProvider';

class App extends React.Component {

  render() {
    return (
      <AppContextComponent>
        <div className="App">
          <Routes />
        </div>
      </AppContextComponent>
    )};
  componentDidMount() {

  }
}

export default App;
