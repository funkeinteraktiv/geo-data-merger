import React from 'react';
import Styled from 'styled-components';

const Checkbox = Styled.div`
  margin-bottom: 8px;
  margin-right: 16px;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.sans};
  display: flex;
  align-items: center;
  line-height: 1;

  input {
    margin-right: 8px;
    display: block:
  }
`;

const CheckboxLabel = Styled.label`
  display: block;
`;


export default ({
  checked, onChange, label, ...rest
}) => (
  <Checkbox {...rest}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <CheckboxLabel>{label}</CheckboxLabel>
  </Checkbox>
);
