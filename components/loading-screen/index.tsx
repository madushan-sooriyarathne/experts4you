import { Screen, RotatingLogo, ScreenMotionVariants } from "./styles";

const LoadingScreen: React.FC = (): JSX.Element => {
  return (
    <Screen
      variants={ScreenMotionVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      key="loading-screen"
      transition={{ duration: 0.5 }}
    >
      <RotatingLogo src="/assets/logo/logo-small.svg" alt="loading-spinner" />
    </Screen>
  );
};

export default LoadingScreen;
