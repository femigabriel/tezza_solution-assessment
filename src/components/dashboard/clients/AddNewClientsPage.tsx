import { ResponseFetchUsers } from "@/services/Services";
import { clientList } from "@/services/clientsList";
import React, { useState } from "react";
import { AddNewClients } from "./AddNewClients";
import { AddToClients } from "./AddToClients";

const [addToClientList, setAddToClientList] = useState(0);
// Add New clients
// const [data, setData] = useState<ResponseFetchUsers[]>(clientList);
// console.log(data);

// const addToData = (data: ResponseFetchUsers) => {
//   setData((x) => [...x, data]);
// };

const gotoAddClient = () => {
  setAddToClientList((x) => x + 1);
};
const backToClientList = () => {
  setAddToClientList((x) => x - 1);
};

const renderAddClients = () => {
  switch (addToClientList) {
    case 0:
      return <AddNewClients onAddNextClick={gotoAddClient} />;
    case 1:
      return (
        <AddToClients
          onAddNextClick={gotoAddClient}
          backToClientsList={backToClientList}
        />
      );
    default:
      return <AddNewClients onAddNextClick={gotoAddClient} />;
  }
};

export const AddNewClientsPage = () => {
  return (
    <div>
      <div>{renderAddClients()}</div>
    </div>
  );
};
