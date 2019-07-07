import React from "react";

import { Container, Todo, Done, Title } from "./styles";

export default function Tasks() {
  return (
    <Container>
      <Todo>
        <Title>To Do</Title>
      </Todo>
      <Done>
        <Title>Done</Title>
      </Done>
    </Container>
  );
}
