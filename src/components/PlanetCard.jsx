import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className={ planetName }>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropsTypes.string.isRequired,
  planetImage: PropsTypes.string.isRequired,
};

export default PlanetCard;
