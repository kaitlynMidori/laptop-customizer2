//Item Specs in Main Form

import React, { Component } from 'react';
import slugify from 'slugify';
import Options from './Options';

export default class FeatureItem extends Component {
  render() {
    const options = this.props.featureOption.map(item => {
      const itemHash = slugify(JSON.stringify(item));

      return (
        <Options
          item={item}
          itemHash={itemHash}
          feature={this.props.feature}
          checkedName={this.props.selectedFeature.name}
          updateFeature={(feature, newValue) => this.props.updateFeature(feature, newValue)}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      )
    })

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    )
  }
}
