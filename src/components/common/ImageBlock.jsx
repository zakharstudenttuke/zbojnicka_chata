import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlockContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const PlaceholderBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${props => props.color || '#71717A'};
  top: 0;
  left: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ImageBlock = ({ src, alt, placeholderColor }) => {
  return (
    <BlockContainer>
      <PlaceholderBg color={placeholderColor} />
      {src && <Image src={src} alt={alt || "Image"} />}
    </BlockContainer>
  );
};

export default ImageBlock;