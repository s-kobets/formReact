import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Content from './components/Content'
import FinishForm from './components/FinishForm'
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  render() {
   const {match} = this.props

    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <Menu />

          <FinishForm />

          <Content match={match}/>
        </div>
      </Provider>
    );
  }
}

export default App;
