import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <FontAwesomeIcon icon={faCheckCircle} size="lg" /> Task Finisher
    </Container>
  );
}
