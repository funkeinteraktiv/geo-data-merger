import Styled from 'styled-components';

export default Styled.button`
  background: ${props => props.theme.colors.interaction};
  padding: 8px 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
  border-bottom-color: #a3a3a3;

  &:hover {
    opacity: 0.9;
  }
`;
