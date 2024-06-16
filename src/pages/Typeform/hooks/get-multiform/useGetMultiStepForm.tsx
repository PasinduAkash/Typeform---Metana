import { ReactNode, useState } from "react";
import Field1 from "pages/Typeform/components/Field1";
import Field2 from "pages/Typeform/components/Field2";
import Field3 from "pages/Typeform/components/Field3";

export const useGetMultiForm = () => {
  const [currentField, setCurrentField] = useState<number>(1);

  const nextField = () => {
    return setCurrentField((prev) => prev + 1);
  };

  const previousField = () => {
    return setCurrentField((prev) => prev - 1);
  };

  const renderForm = (): ReactNode => {
    switch (currentField) {
      case 1:
        return <Field1 />;
      case 2:
        return <Field2 />;
      case 3:
        return <Field3 />;
    }
  };

  return {
    setCurrentField,
    currentField,
    nextField,
    previousField,
    renderForm,
  };
};
