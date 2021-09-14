import { FormEvent, useState } from "react";
import { useFormik, useFormikContext } from "formik";
import { AnimatePresence } from "framer-motion";

import { useInput } from "@hooks";

import ServiceSelection from "../service-selection";
import CompanyDetailsSelection from "../company-details-selection";
import ContactDetailsStep from "../contact-details-step";
import FinishedStep from "../finished-step";

import {
  MainContainer,
  ProgressBar,
  StageName,
  StagesGroup,
  StatusBar,
} from "./styles";

interface BusinessInfoForm {
  businessName: string;
  natureOfBusiness: string;
  noOfDirectors: string;
  quarterlyTurnover: string;
  entityType: string;
}

interface ContactInfoForm {
  name: string;
  email: string;
  phone: string;
  timeToContact: string;
}

const MultiStepForm: React.FC = (): JSX.Element => {
  const serviceTypes = [
    {
      name: "Company Incorporation",
      id: "company-incorporation",
      icon: "/assets/svg/system/incorporation.svg",
    },
    {
      name: "Bookkeeping",
      id: "bookkeeping",
      icon: "assets/svg/system/bookkeeping.svg",
    },
    {
      name: "Tax Advisory",
      id: "tax-advisory",
      icon: "assets/svg/system/tax.svg",
    },
  ];

  const steps = [
    {
      id: "select-service",
      name: "Select a service",
    },
    {
      id: "company-information",
      name: "Company Information",
    },
    {
      id: "contact-information",
      name: "Contact Information",
    },
    {
      id: "done",
      name: "Done",
    },
  ];

  // Form state tracking states
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);

  // service selection state
  const [selected, setSelected] = useState<string>();

  //form submission success
  const [success, setSuccess] = useState<boolean>(true);

  // submit loading
  const [loading, setLoading] = useState<boolean>(false);

  // company details form state
  const businessDateForm = useFormik<BusinessInfoForm>({
    initialValues: {
      businessName: "",
      natureOfBusiness: "",
      noOfDirectors: "",
      quarterlyTurnover: "",
      entityType: "Limited Liability Company",
    },
    onSubmit: () => {
      setStep(2);
    },
  });

  // contact details form state
  const contactDataFrom = useFormik<ContactInfoForm>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      timeToContact: "",
    },
    onSubmit: (values) => {
      // start loading
      setLoading(true);

      fetch("/api/consultation-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...businessDateForm.values,
          ...values,
          timeToContact: values.timeToContact || "Not Specified",
          type:
            selected === "company-incorporation"
              ? "inc"
              : selected === "bookkeeping"
              ? "book"
              : "tax",
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            setSuccess(true);
          } else {
            setSuccess(false);
          }
        })
        .finally(() => {
          setLoading(false);
          setStep(3);

          // reset all fields
          businessDateForm.resetForm();
          contactDataFrom.resetForm();
          setSelected(undefined);
        });
    },
  });

  // company details back Button click handler
  const handleCompanyDetailsBack = () => setStep(0);

  const handleContactDetailsBack = () => setStep(1);

  // handle finish step button click
  const handleFinish = () => setStep(0);

  return (
    <MainContainer>
      <StatusBar>
        <ProgressBar step={step} />
        <StagesGroup>
          {steps.map((st, index) => (
            <StageName
              progressed={index <= (step as number)}
              active={index === step}
              key={st.id}
            >
              {st.name}
            </StageName>
          ))}
        </StagesGroup>
      </StatusBar>
      {step === 0 && (
        <ServiceSelection
          options={serviceTypes.map((service) => ({
            icon: service.icon,
            name: service.name,
            id: service.id,
            selected: false,
          }))}
          onSelect={(id: string) => {
            setSelected(id);
            setStep(1);
          }}
        />
      )}
      <AnimatePresence />
      {step === 1 && (
        <CompanyDetailsSelection
          values={businessDateForm.values}
          handleChange={businessDateForm.handleChange}
          handleSubmit={businessDateForm.handleSubmit}
          onBack={handleCompanyDetailsBack}
          type={
            selected === "company-incorporation"
              ? "inc"
              : selected === "bookkeeping"
              ? "book"
              : "tax"
          }
        />
      )}
      {step === 2 && (
        <ContactDetailsStep
          values={contactDataFrom.values}
          loading={loading}
          handleChange={contactDataFrom.handleChange}
          handleSubmit={contactDataFrom.handleSubmit}
          onBack={handleContactDetailsBack}
        />
      )}
      {step === 3 && <FinishedStep success={success} onClick={handleFinish} />}

      <AnimatePresence />
    </MainContainer>
  );
};

export default MultiStepForm;
