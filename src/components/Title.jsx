import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropsTypes.string.isRequired,
};

export default Title;
