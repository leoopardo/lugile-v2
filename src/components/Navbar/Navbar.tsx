import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cart,
  CartBox,
  DropdownArrow,
  Item,
  ItemCar,
  NavbarBox,
  NavList,
  SearchInput,
  Title,
  UserIcon,
} from "./styles";
const navImg = require("../img/t.png");

export const Navbar = () => {
  const [isProfileHover, setIsProfileHover] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isMouseOverCart = () => {
    isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  };
  const navigate = useNavigate();
  return (
    <NavbarBox
      style={{ backgroundImage: `url(${navImg})`, backgroundRepeat: "repeat" }}
    >
      <Title onClick={() => navigate("/")}>
        Lugile
        <small style={{ fontSize: "10px", color: "var(--blue600)" }}>
          .store
        </small>
      </Title>
      <SearchInput placeholder="O que deseja encontrar?" />
      <NavList>
        <ItemCar
          style={{ width: "150px" }}
          onMouseOver={() => setIsCartOpen(true)}
        >
          <Cart /> Carrinho <DropdownArrow />
        </ItemCar>
        <Item
          style={{ width: "100px" }}
          onClick={() => setIsProfileHover(true)}
        >
          <UserIcon /> Perfil
        </Item>
        {isCartOpen && (
          <CartBox onMouseLeave={() => setIsCartOpen(false)}> oi</CartBox>
        )}
      </NavList>
    </NavbarBox>
  );
};
