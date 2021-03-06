//Parts in Main Form

import React, { Component } from 'react';
import slugify from 'slugify';

export default class Options extends Component {
  render() {
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.checkedName}
          onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
          </label>
      </div>
    )
  }
}