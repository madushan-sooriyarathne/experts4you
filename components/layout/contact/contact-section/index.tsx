import PrimaryHeading from "@components/headings/primary-heading";
import InputField from "@components/input-field";
import SubmitButton from "@components/buttons/submit-button";

import {
  FormDataSection,
  FormSection,
  FormGroup,
  DetailsSection,
  ItemGroup,
  SocialMediaGroup,
  SocialMediaIcon,
} from "./styles";
import { useContext, useState } from "react";
import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import SubHeading from "@components/headings/sub-heading";

import { socialMedia } from "@site-data";
import { notificationDispatchContext } from "context/notification-context";
import { useFormik } from "formik";

interface FormicFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = (): JSX.Element => {
  // Notification context dispatch
  const showNotification = useContext(
    notificationDispatchContext
  ) as DispatchFn<string | null>;

  // other states
  const [loading, setLoading] = useState<boolean>(false);

  // formik form state
  const formik = useFormik<FormicFormProps>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      setLoading(true);

      fetch("/api/inquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          message: values.message || "Not Specified",
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            showNotification(
              `Hi ${values.firstName}! We received your inquiry and appreciate you reaching out. One of our representatives will respond to you soon.`
            );
          } else {
            showNotification(
              `Hi ${values.firstName}! We encountered an error while submitting your inquiry. Please call 071 866 3023 or email us to connect@xperts4you.com. Sorry for the inconvenience caused!`
            );
          }
        })
        .finally(() => {
          setLoading(false);
          // reset the form fields
          formik.resetForm();
        });
    },
  });

  return (
    <FormDataSection>
      <FormSection>
        <PrimaryHeading alignment="left">Let's talk</PrimaryHeading>
        <FormGroup onSubmit={formik.handleSubmit}>
          <InputField
            value={formik.values.firstName}
            onChange={formik.handleChange}
            label="First Name"
            name="firstName"
            placeholder="John"
            type="text"
          />
          <InputField
            value={formik.values.lastName}
            onChange={formik.handleChange}
            label="Last Name"
            name="lastName"
            placeholder="Doe"
            type="text"
          />
          <InputField
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Email"
            name="email"
            placeholder="example@example.com"
            type="email"
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
            value={formik.values.message}
            onChange={formik.handleChange}
            label="Message"
            name="message"
            placeholder="Your Message"
            type="text"
            textArea
            required={false}
          />
          <SubmitButton loading={loading} light>
            Submit
          </SubmitButton>
        </FormGroup>
      </FormSection>
      <DetailsSection>
        <ItemGroup>
          <SecondaryHeading alignment="center">
            Expert4U Private Limited.
          </SecondaryHeading>
          <Paragraph alignment="center">
            No 290, D. R. Wijewardena Mw, Colombo 0010, Sri Lanka
          </Paragraph>
        </ItemGroup>
        <ItemGroup>
          <SubHeading alignment="center">071 866 3023</SubHeading>
          <SubHeading alignment="center">connect@xperts4you.com</SubHeading>
        </ItemGroup>
        <SocialMediaGroup>
          {socialMedia.map((item) => (
            <SocialMediaIcon key={item.icon}>
              <use xlinkHref={`/assets/svg/sprites.svg#${item.icon}`} />
            </SocialMediaIcon>
          ))}
        </SocialMediaGroup>
      </DetailsSection>
    </FormDataSection>
  );
};

export default ContactSection;
