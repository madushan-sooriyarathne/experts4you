import { useState } from "react";
import { useFormik } from "formik";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import IncomeForm from "@components/layout/tax-calculator/income-form";
import PeriodForm from "@components/layout/tax-calculator/period-form";
import ExpensesForm from "@components/layout/tax-calculator/expenses-form";
import ContactForm from "@components/layout/tax-calculator/contact-form";
import ConfirmationSlide from "@components/layout/tax-calculator/confirmation-slide";

import {
  BackButton,
  CalContainer,
  FormContainer,
  ProgressBar,
  StepCounter,
} from "./styles";

const CalculatorParent: React.FC = (): JSX.Element => {
  // other states
  const [step, setStep] = useState<number>(0);
  const [tax, setTax] = useState<{
    taxAmount: number;
    taxRelief: number;
  }>({
    taxAmount: 0,
    taxRelief: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(true);

  // Form states
  const periodFormik = useFormik<PeriodFormFields>({
    initialValues: {
      period: "Monthly",
    },
    onSubmit: () => {
      setStep(1);
    },
  });

  const incomeFormik = useFormik<IncomeFormFields>({
    initialValues: {
      employment: "250000",
      business: "0",
      interest: "0",
      other: "0",
    },
    onSubmit: (values) => {
      setStep(2);

      let total: number = Object.values(values).reduce(
        (prev, cur) => prev + parseInt(cur),
        0
      );

      let annualTotal: number =
        total * (periodFormik.values.period === "Monthly" ? 12 : 1);

      if (annualTotal < 3000000) {
        setTax((prevState) => ({ ...prevState, tax: 0 }));
      } else {
        const taxLevels: number[] = [
          annualTotal > 6000000 ? 3000000 : annualTotal - 3000000,
          annualTotal > 9000000 ? 3000000 : annualTotal - 6000000,
          annualTotal > 9000000 ? annualTotal - 9000000 : 0,
        ];

        const totalTax = taxLevels.reduce((prev, cur, index) => {
          let tax: number = 0;
          if (cur > 0) {
            tax =
              cur * (index === 0 ? 6 / 100 : index === 1 ? 12 / 100 : 18 / 100);
          }
          return prev + tax;
        }, 0);

        setTax((prev) => ({ ...prev, taxAmount: totalTax }));
      }
    },
  });

  const expensesFormik = useFormik<ExpensesFormFields>({
    initialValues: {
      health: "0",
      family: "0",
      housing: "0",
      pension: "0",
      investments: "0",
    },
    onSubmit: (values) => {
      setStep(3);

      // calculate the tax relief
      const expenses: number = Object.values(values).reduce(
        (prev, cur) => prev + parseInt(cur),
        0
      );
      const annualExpenses: number =
        periodFormik.values.period === "Monthly" ? expenses * 12 : expenses;

      const taxRelief: number =
        annualExpenses > 1200000 ? 1200000 * 0.18 : annualExpenses * 0.18;

      setTax((prev) => ({ ...prev, taxRelief: taxRelief }));
      console.log(taxRelief);
    },
  });

  const contactFormik = useFormik<ContactFormFields>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      // start loading
      setLoading(true);

      fetch("/api/tax-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...periodFormik.values,
          ...incomeFormik.values,
          ...expensesFormik.values,
          ...values,
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
          setStep(4);

          // reset forms
          periodFormik.resetForm();
          incomeFormik.resetForm();
          expensesFormik.resetForm();
          contactFormik.resetForm();
        });
    },
  });

  // back button handler
  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  // cancel button click handler
  const handleCancel = () => {
    // reset step
    setStep(0);

    // reset the form
    periodFormik.resetForm();
    incomeFormik.resetForm();
    expensesFormik.resetForm();
    contactFormik.resetForm();
  };

  return (
    <AnimateSharedLayout>
      <CalContainer layout>
        <ProgressBar layoutId="progress-bar" step={step} />
        {step < 4 && (
          <>
            {step > 0 && (
              <BackButton
                onClick={handleBack}
                key="back-btn"
                layoutId="back-btn"
              >
                <use xlinkHref="/assets/svg/sprites.svg#arrow-left-slide" />
              </BackButton>
            )}

            <StepCounter key="step" layoutId="step">
              {`${step + 1} of 4`}
            </StepCounter>
          </>
        )}

        <FormContainer>
          <AnimatePresence>
            {step === 0 && (
              <PeriodForm
                values={periodFormik.values}
                handleChange={periodFormik.handleChange}
                handleSubmit={periodFormik.handleSubmit}
              />
            )}
            {step === 1 && (
              <IncomeForm
                values={incomeFormik.values}
                handleChange={incomeFormik.handleChange}
                handleSubmit={incomeFormik.handleSubmit}
              />
            )}
            {step === 2 && (
              <ExpensesForm
                values={expensesFormik.values}
                handleChange={expensesFormik.handleChange}
                handleSubmit={expensesFormik.handleSubmit}
                monthly={periodFormik.values.period === "Monthly"}
              />
            )}
            {step === 3 && (
              <ContactForm
                values={contactFormik.values}
                handleChange={contactFormik.handleChange}
                handleSubmit={contactFormik.handleSubmit}
                onCancel={handleCancel}
                loading={loading}
                tax={tax}
              />
            )}
            {step === 4 && (
              <ConfirmationSlide
                success={success}
                onFailedSubmit={() => setStep(0)}
                onSuccessSubmit={handleCancel}
              />
            )}
          </AnimatePresence>
        </FormContainer>
      </CalContainer>
    </AnimateSharedLayout>
  );
};

export default CalculatorParent;
