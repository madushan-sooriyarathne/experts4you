import styled from "styled-components";

interface ImageContainerProps {
  width: string;
  height: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
`;

export { ImageContainer };
