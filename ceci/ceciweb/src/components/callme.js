import React from "react";
import { Button } from "react-bootstrap";

const CallButton = ({ phoneNumber }) => {
  const handleCallUsClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Button variant="success" onClick={handleCallUsClick} style={{ fontSize:"4rem", backgroundColor: "#1fbf1f", height: "8rem", width: "15rem", marginTop:"2rem" }}>
      Pozovi
    </Button>
  );
};

export default CallButton;
