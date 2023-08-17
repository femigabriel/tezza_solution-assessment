import React, { useState } from "react";
// import { ClientsTable } from "./ClientsTable";
import { ClientsProfile } from "./ClientsProfile";


export const Clients = () => {
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
        // return <ClientsTable onNextClick={gotoNext} />;
      case 1:
        return <ClientsProfile onBackClick={gotoPrevious} />;
      default:
        // return <ClientsTable onNextClick={gotoNext} />;
    }
  };



  return (
    <div className="">
      <div className="my-10 px-10">{renderCurrentSelection()}</div>
    </div>
  );
};
