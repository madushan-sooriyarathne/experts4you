import { createContext, useState, ReactNode, Context } from "react";

interface Props {
  children: ReactNode;
}

const notificationContext: Context<string | null> = createContext<
  string | null
>("");
const notificationDispatchContext: Context<DispatchFn<string | null> | null> =
  createContext<DispatchFn<string | null> | null>(null);

const NotificationContextProvider: React.FC<Props> = ({
  children,
}: Props): JSX.Element => {
  const [notificationMessage, setNotificationMessage] = useState<string | null>(
    ""
  );

  return (
    <notificationContext.Provider value={notificationMessage}>
      <notificationDispatchContext.Provider value={setNotificationMessage}>
        {children}
      </notificationDispatchContext.Provider>
    </notificationContext.Provider>
  );
};

export { notificationContext, notificationDispatchContext };
export default NotificationContextProvider;
