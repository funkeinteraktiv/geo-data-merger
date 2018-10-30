import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelect = styled.select`
  cursor: pointer;
  width: 200px;
  padding: 0 .571em;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-bottom-color: #a3a3a3;
  border-radius: 4px;
  height: 35px;

  &:disabled {
    background: #eee;
    color: #777;
  }
`;

class Select extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    options: [],
    onChange: () => {},
    placeholder: 'Select...'
  }

  onChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <StyledSelect
        defaultValue="default"
        onChange={evt => this.onChange(evt)}
        disabled={this.props.disabled}
      >
        {this.props.options.length === 0 && <option value="default" disabled>{this.props.placeholder}</option>}
        {this.props.options.map(opt => (
          <option value={opt} key={`Select__Option__${opt}`}>{opt}</option>
        ))}
      </StyledSelect>
    );
  }
}

export default Select;
