import React from "react";
import logo from "./assets/coding.svg";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Logo } from "./components/logo";
import { Text } from "./components/text";
import { ContainerFlex } from "./components/container";
import { Input } from "./components/input";
import { Button } from "./components/button";

function App() {
  return (
    <div className="App">
      <Header>
        <ContainerFlex>
          <Logo src={logo}></Logo>
          <Text> TecProg </Text>
        </ContainerFlex>
      </Header>
      <Body>
        <ContainerFlex>
          <Input></Input>
          <Button>Procurar</Button>
        </ContainerFlex>
      </Body>
    </div>
  );
}

export default App;
