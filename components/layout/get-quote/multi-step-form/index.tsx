import { FormEvent, useState } from "react";

import ServiceSelection from "../service-selection";
import {
  MainContainer,
  ProgressBar,
  StageName,
  StagesGroup,
  StatusBar,
} from "./styles";

import { useInput } from "@hooks";
import CompanyDetailsSelection from "../company-details-selection";
import ContactDetailsStep from "../contact-details-step";
import FinishedStep from "../finished-step";
import { AnimatePresence } from "framer-motion";

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

  // Company Details Selection input states
  const [businessName, updateBusinessName, resetBusinessName] = useInput("");
  const [natureOfBusiness, updateNatureOfBusiness, resetNatureOfBusiness] =
    useInput("");
  const [noOfDirectors, updateNoOfDirectors, resetNoOfDirectors] = useInput("");
  const [quarterlyTurnover, updateQuarterlyTurnover, resetQuarterlyTurnover] =
    useInput("");

  // Contact Details input states
  const [name, updateName, resetName] = useInput("");
  const [email, updateEmail, resetEmail] = useInput("");
  const [phone, updatePhone, resetPhone] = useInput("");
  const [timeToContact, updateTimeToContact, resetTimeToContact] = useInput("");

  // company details submit handlers
  const handleCompanyDetailsSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
  };

  // company details back Button click handler
  const handleCompanyDetailsBack = () => setStep(0);

  // contact details submit handler
  const handleContactDetailsSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Implement data submit logic here.

    // if data submitted correctly
    setStep(3);

    // reset all fields
    resetBusinessName();
    resetNatureOfBusiness();
    resetNoOfDirectors();
    resetQuarterlyTurnover();
    resetName();
    resetEmail();
    resetPhone();
    resetTimeToContact();
    setSelected(undefined);
  };

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
      {step === 1 &&
        (selected === "company-incorporation" ? (
          <CompanyDetailsSelection
            businessName={businessName}
            natureOfBusiness={natureOfBusiness}
            noOfDirectors={noOfDirectors}
            updateBusinessName={updateBusinessName}
            updateNatureOfBusiness={updateNatureOfBusiness}
            updateNoOfDirectors={updateNoOfDirectors}
            onBack={handleCompanyDetailsBack}
            onSubmit={handleCompanyDetailsSubmit}
            type="inc"
          />
        ) : (
          <CompanyDetailsSelection
            businessName={businessName}
            natureOfBusiness={natureOfBusiness}
            quarterlyTurnOver={quarterlyTurnover}
            updateBusinessName={updateBusinessName}
            updateNatureOfBusiness={updateNatureOfBusiness}
            updateQuarterlyTurnOver={updateQuarterlyTurnover}
            onBack={handleCompanyDetailsBack}
            onSubmit={handleCompanyDetailsSubmit}
            type="other"
          />
        ))}
      {step === 2 && (
        <ContactDetailsStep
          name={name}
          email={email}
          phone={phone}
          timeToContact={timeToContact}
          updateName={updateName}
          updateEmail={updateEmail}
          updatePhone={updatePhone}
          updateTimeToContact={updateTimeToContact}
          onSubmit={handleContactDetailsSubmit}
          onBack={handleContactDetailsBack}
        />
      )}
      {step === 3 && <FinishedStep success={true} onClick={handleFinish} />}
      <AnimatePresence />
    </MainContainer>
  );
};

export default MultiStepForm;
