import { NextPage, NextPageContext } from "next";

import ErrorComponent from "@components/layout/common/error-component";

interface Props {
  statusCode: number;
}

const CustomErrorPage: NextPage<Props> = ({
  statusCode,
}: Props): JSX.Element => {
  return <ErrorComponent statusCode={statusCode} />;
};

CustomErrorPage.getInitialProps = async ({
  res,
  err,
}: NextPageContext): Promise<Props> => {
  const statusCode: number = res
    ? res.statusCode
    : err && err.statusCode
    ? err.statusCode
    : 404;
  return {
    statusCode,
  };
};

export default CustomErrorPage;
