import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelect = styled.select``;

class Select extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func
  }

  static defaultProps = {
    options: [],
    onChange: () => {}
  }

  onChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <StyledSelect onChange={evt => this.onChange(evt)}>
        {this.props.options.length === 0 && <option value="" disabled selected>No keys found</option>}
        {this.props.options.map(opt => (
          <option value={opt} key={`Select__Option__${opt}`}>{opt}</option>
        ))}
      </StyledSelect>
    );
  }
}

export default Select;
