import styled from "styled-components";
import coding from "../assets/background.jpg";

const Body = styled.body`
  background-image: url(${coding});
  display: flex;
  width: auto;
  height: 100vh;
  background-size: cover;
  font-size: 12pt;
  color: whitesmoke;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export { Body };
