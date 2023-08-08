import React, { useState } from "react";
import { PaymentTable } from "./PaymentTable";
export const Payment = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // switch

  const gotoNext = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPrevious = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <PaymentTable onNextClick={gotoNext} />;
      default:
        return <PaymentTable onNextClick={gotoNext} />;
    }
  };

  return <div>{renderCurrentSelection()}</div>;
};
