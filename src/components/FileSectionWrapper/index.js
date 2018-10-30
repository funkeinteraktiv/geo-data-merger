import Styled from 'styled-components';

const FileSectionWrapper = Styled.div`
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 10px 0;
`;

FileSectionWrapper.defaultProps = {
  isVisible: true
};

export default FileSectionWrapper;
