import Styled from 'styled-components';

export default Styled.button`
  background: ${props => props.theme.colors.interaction};
  padding: 8px 16px;
  font-weight: 700;
  border: none;
`;
