import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './bar.js'
import LineChart from './line.js'
import ScatterChart from './scatter.js'
import './App.sass';

class App extends Component {

  state = {
    width: 500,
    height: 450,
    id: "root"
  }

  render() {
    return (
      <div className="App">

      <section class="hero is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Mini Visualizations</h1>
      <h2 class="subtitle">Aditya Dixit</h2>
    </div>
  </div>
</section>

        <body>
        <section class="section">
        <div class="container">
          <div class="content has-text-centered">
                <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
                <LineChart data={this.state.data} width={this.state.width} height={this.state.height} />
                <ScatterChart data={this.state.data} width={this.state.width} height={this.state.height} />
            </div>
            </div>
            </section>
            <footer class="footer">
              <div class="content has-text-centered is-size-7">


            </div>
            </footer>

        </body>

      </div>
    );
  }
}

export default App;
