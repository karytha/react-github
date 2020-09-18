import React from "react";
import logo from "./assets/coding.svg";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Logo } from "./components/logo";
import { Text } from "./components/text";
import { ContainerFlex } from "./components/container";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Label } from "./components/label";

function App() {
  const [user, setUser] = React.useState('');

  const searchUser = ()=>{
    console.log(user)
  }

  return (
    <div className="App">
      <Header>
        <ContainerFlex>
          <Logo src={logo}></Logo>
          <Text> TecProg </Text>
        </ContainerFlex>
      </Header>
      <Body>
      <Label> Digite o usuário para achar o repositório </Label>
        <ContainerFlex>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setUser(e.target.value)}></Input>
          <Button onClick={()=>searchUser()}>Procurar</Button>
        </ContainerFlex>
      </Body>
    </div>
  );
}

export default App;
