import ErrorComponent from "@components/layout/common/error-component";

const Custom404: React.FC = (): JSX.Element => {
  return <ErrorComponent statusCode={404} />;
};

export default Custom404;
