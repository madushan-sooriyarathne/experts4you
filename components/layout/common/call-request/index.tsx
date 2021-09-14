import SubmitButton from "@components/buttons/submit-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import InputField from "@components/input-field";
import Paragraph from "@components/paragraph";
import { notificationDispatchContext } from "context/notification-context";
import { useContext, useState } from "react";
import { CallSection, InputGroup, InputSide } from "./styles";
import { useFormik } from "formik";

interface FormikFormProps {
  name: string;
  email: string;
  phone: string;
}

const CallRequest: React.FC = (): JSX.Element => {
  // context dispatch function
  const showNotification = useContext(
    notificationDispatchContext
  ) as DispatchFn<string | null>;

  //other states
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik<FormikFormProps>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      setLoading(true);

      fetch("/api/call-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            // show notification (success)
            showNotification(
              `Hi ${
                values.name.split(" ")[0]
              }! We received your request. One of our consultants will call you within next 2 working days. Thank you!`
            );
          } else {
            showNotification(
              `Error occurred while submitting your request. Please try again later. Thank you for your patience.`
            );
          }
        })
        .finally(() => {
          // stop loading
          setLoading(false);

          // reset form fields
          formik.resetForm();
        });

      // hide notification
      setTimeout(() => showNotification(null), 10000);
    },
  });

  return (
    <CallSection>
      <InputSide>
        <PrimaryHeading>Request a Call</PrimaryHeading>
        <InputGroup onSubmit={formik.handleSubmit}>
          <InputField
            value={formik.values.name}
            onChange={formik.handleChange}
            label="Name"
            name="name"
            placeholder="John Doe"
            type="text"
          />
          <InputField
            value={formik.values.phone}
            onChange={formik.handleChange}
            label="Phone"
            name="phone"
            placeholder="(+94) 77 123 4567"
            type="tel"
          />
          <InputField
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Email"
            name="email"
            placeholder="example@example.com"
            type="email"
          />
          <SubmitButton loading={loading} light>
            Submit
          </SubmitButton>
        </InputGroup>
        <Paragraph small alignment="left">
          By submitting this form, I agree to having my personal and contact
          information processed and used for the purpose of marketing
          communications. For more details, Please refer to our [Privacy
          Policy.](/privacy-policy)
        </Paragraph>
      </InputSide>
      <ImageComponent
        image={{
          src: "/assets/img/phone.jpg",
          alt: "Request a Call | Experts 4 You",
          blurUrl: "data:image/svg+xml;base64,L4ON8#t7~qxuxaofayWB~qtQ9FRj",
        }}
      />
    </CallSection>
  );
};

export default CallRequest;
