import { useCallback, useContext } from "react";

import {
  notificationContext,
  notificationDispatchContext,
} from "context/notification-context";

import { Bar, NotificationMessage, CloseButton } from "./styles";

const SnackBar: React.FC = (): JSX.Element => {
  // subscribe to notification context
  const notificationMessage: string | null = useContext(notificationContext);
  const closeSnackBar = useContext(notificationDispatchContext) as DispatchFn<
    string | null
  >;

  const handleClose = useCallback(() => closeSnackBar(null), []);

  return (
    <Bar show={notificationMessage ? true : false}>
      <NotificationMessage>{notificationMessage}</NotificationMessage>
      <CloseButton onClick={handleClose}>
        <use xlinkHref="/assets/svg/sprites.svg#close"></use>
      </CloseButton>
    </Bar>
  );
};

export default SnackBar;
