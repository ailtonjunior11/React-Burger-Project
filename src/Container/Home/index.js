import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Burger from "../../assets/background.png";

import H1 from "../../components/Title"
import ContainerItens from "../../components/Containeritens"
import Button from "../../components/Button"


import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";


function App() {

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const inputOrder = useRef();
  const inputClientName = useRef();


  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      clientName: inputClientName.current.value
    });

    setOrders([...orders, newOrder]);

    navigate("/pedidos");
  }


  return (

    <Container>
      <Image alt="logo-hamburgueria" src={Burger}/>

      <ContainerItens>

        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder="Nome do Cliente"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>

    </Container>
  )


}

export default App;