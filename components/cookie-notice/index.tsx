import ActionButton from "@components/buttons/action-button";
import SecondaryButton from "@components/buttons/secondary-button";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CookieBar,
  CookieMessage,
  ButtonWrapper,
  cookieBarVariants,
} from "./styles";

const CookieNotice: React.FC = (): JSX.Element => {
  const [showNotice, setShowNotice] = useState<boolean>(true);

  useEffect(() => {
    setShowNotice(
      window.localStorage.getItem("privacy-policy-accepted") !== "true"
    );
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem("privacy-policy-accepted", "true");
    setShowNotice(false);
  };

  return (
    <AnimatePresence>
      {showNotice && (
        <CookieBar
          variants={cookieBarVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{
            duration: 0.3,
          }}
        >
          <CookieMessage>
            We use cookies to ensure that we give you the best experience on our
            website. If you continue to use this site we will assume that you
            are happy with it.
          </CookieMessage>
          <ButtonWrapper>
            <ActionButton onClick={acceptCookies}>Okay</ActionButton>
            <SecondaryButton route="/privacy-policy" type="route">
              Privacy Policy
            </SecondaryButton>
          </ButtonWrapper>
        </CookieBar>
      )}
    </AnimatePresence>
  );
};

export default CookieNotice;
