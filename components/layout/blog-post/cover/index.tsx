import ImageComponent from "@components/image-component";
import { Wrapper } from "./styles";

interface Props {
  image: Image;
}

const Cover: React.FC<Props> = ({ image }: Props): JSX.Element => {
  return (
    <Wrapper>
      <ImageComponent image={image} />
    </Wrapper>
  );
};

export default Cover;
