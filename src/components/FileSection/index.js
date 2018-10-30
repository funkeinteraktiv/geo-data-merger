import Styled from 'styled-components';

const FileSection = Styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  width: 46%;
`;

FileSection.defaultProps = {
  isVisible: true
};

export default FileSection;
