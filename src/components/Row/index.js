import Styled from 'styled-components';

const Row = Styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 10px 0;
`;

Row.defaultProps = {
  isVisible: true
};

export default Row;
