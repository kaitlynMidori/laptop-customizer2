import React, { Component } from 'react';
import './App.css';
import FEATURES from './FEATURES';
import Header from './components/Header'
import FeatureSet from './components/FeatureSet';
import Cart from './components/Cart';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <FeatureSet
            USCurrencyFormat={USCurrencyFormat}
            selected={this.state.selected}
            features={FEATURES}
            updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
          />
          <section className="main__summary">
            <Cart
              USCurrencyFormat={USCurrencyFormat}
              selected={this.state.selected}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;