import React, { useState } from "react";
import { AddNewClients } from "./AddNewClients";
import { AddNewClientPage } from "./AddNewClientPage";

export const AddNewClientsPage = () => {
  const [addtToClientsIndex, setAddToClientsIndex] = useState(0);
  const addCLients = () => {
    setAddToClientsIndex((x) => x + 1);
  };

  const renderAddToClients = () => {
    switch (addtToClientsIndex) {
      case 0:
        return <AddNewClients onNextClick={addCLients} />;
      case 1:
        return <AddNewClientPage />;
    }
  };

  return <div> {renderAddToClients()}</div>;
};
