import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Basket } from "../components/basket/Basket";
import  Header  from "../components/header/Header";

export const UserLayout = () => {
  const [isBasketVisible, setBasketVisible] = useState(false);
  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };
  return (
    <div>
      <Header onShowBasket={showBasketHandler} />
      {isBasketVisible && <Basket onClose={showBasketHandler} />}
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};
const Content = styled.div`
  margin-top: 130px;
`;
