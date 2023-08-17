import React from "react";

interface Props {
  onAddNextClick: () => any;
  backToClientsList: () => any;
}

export const AddToClients = ({ onAddNextClick, backToClientsList }: Props) => {
  const handleSubmit = () => {
    onAddNextClick();
    backToClientsList()
  };
  return <div>AddToClients</div>;
};
