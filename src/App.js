import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './bar.js'
import LineChart from './line.js'
import ScatterChart from './scatter.js'
class App extends Component {

  state = {
    width: 700,
    height: 500,
    id: "root"
  }

  render() {
    return (
      <div className="App">
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
        <LineChart data={this.state.data} width={this.state.width} height={this.state.height} />
        <ScatterChart data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

export default App;
