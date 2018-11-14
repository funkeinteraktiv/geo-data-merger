import Styled from 'styled-components';

const Column = Styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  width: 46%;
`;

Column.defaultProps = {
  isVisible: true
};

export default Column;
