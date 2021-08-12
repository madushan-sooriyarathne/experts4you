import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  position: relative;

  padding: 10rem 40rem 3rem 40rem;
  display: grid;
  grid-template-columns: 2fr repeat(3, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    "de ho co so"
    "cr cr cr cr";
  align-items: start;
  justify-items: start;
  row-gap: 10rem;
  column-gap: 5rem;
  background-color: transparent;
`;

const FooterBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
  background-image: radial-gradient(
      100% 244.46% at 0% 0%,
      #ccff00 0%,
      #ff027c 100%
    ),
    radial-gradient(50% 122.23% at 50% 50%, #9aa4ff 0%, #306c00 100%),
    radial-gradient(100.45% 245.58% at 0% 0%, #000afe 0%, #70ff00 100%),
    linear-gradient(127.43deg, #7b0007 0%, #8f73ff 100%);
  background-blend-mode: lighten, color-dodge, difference, normal;
`;

const FooterOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
  background-image: ${(props) => props.theme.gradients.blurBg};
  backdrop-filter: blur(40px);
`;

const Logo = styled.img`
  height: 4rem;
  width: auto;
  object-fit: contain;
  margin-bottom: 2rem;
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 2rem;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1rem;
`;

const Route = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: left;
  text-decoration: none;
  color: ${(props) => props.theme.colors.blackMedium};
  outline: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out 0.1s;

  &:hover {
    transform: scale(1.02);
    color: ${(props) => props.theme.colors.black};
  }
`;

const SocialMediaButton = styled.a`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  column-gap: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.blackMedium};

  & > svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  & > span {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: left;
    text-decoration: none;
    color: ${(props) => props.theme.colors.blackMedium};
    outline: none;
  }
`;

const CopyrightNote = styled.div`
  grid-area: cr;
  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* row-gap: 2rem; */
`;

export {
  FooterContainer,
  FooterBG,
  FooterOverlay,
  Logo,
  CopyrightNote,
  LinkSection,
  LinkGroup,
  Route,
  SocialMediaButton,
};
