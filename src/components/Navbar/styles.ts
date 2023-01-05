import styled from "styled-components";
import { CaretDownFill } from "@styled-icons/bootstrap/CaretDownFill";
import { CartAlt } from "@styled-icons/boxicons-solid/CartAlt";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
export const NavbarBox = styled.div`
  position: absolute;
  height: 124px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
`;

export const Title = styled.h1`
  color: white;
  cursor: pointer;
  width: 0;
  height: 0;
  font-size: small;
  border-radius: 50%;
  border: 2px solid var(--blue600);
  animation-name: load;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-fill-mode: forwards;

  @keyframes load {
    50% {
      width: 135px;
      height: 70px;
      font-size: xxx-large;
    }
    100% {
      width: 135px;
      height: 70px;
      background-color: var(--blue200);
      font-size: xxx-large;
    }
  }
`;

export const SearchInput = styled.input`
  width: 0;
  height: 50px;
  border-radius: 6px;
  background-color: var(--ligthPurple);
  animation-name: search;
  animation-duration: 4s;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  padding-left: 10px;
  transition: transform 1s, border-top 0.5s, outline 0.3s;

  ::placeholder {
    color: var(--blue600);
    font-size: large;
    font-weight: 300;
  }

  :focus {
    outline: 2px solid white;
    transform: scale(1.1);
    border-top: 8px solid var(--blue);
  }

  @keyframes search {
    50% {
      border-bottom: 0px solid var(--blue200);
      width: 40%;
    }
    70% {
      border-bottom: 15px solid var(--blue200);
      width: 40%;
    }
    100% {
      width: 40%;
      border-bottom: 8px solid var(--blue200);
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  color: var(--blue600);
  width: 300px;
  font-weight: 600;
  font-size: large;
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const ItemCar = styled.button`
  cursor: pointer;
  font-weight: 600;
  height: 40px;
  font-size: medium;
  border-bottom: 0px solid var(--blue200);
  transition: transform 0.4s, border-bottom 0.2s, color 1s;

  :hover {
    border-bottom-width: 5px;
    color: var(--purple);
  }
`;
export const Item = styled.button`
  cursor: pointer;
  font-weight: 600;
  height: 40px;
  font-size: medium;
  border-bottom: 0px solid var(--blue200);
  transition: transform 0.4s, border-bottom 0.2s;

  :hover {
    border-bottom-width: 5px;
  }
`;

export const DropdownArrow = styled(CaretDownFill)`
  color: var(--blue600);
  height: 14px;
  margin-top: 5px;
`;

export const Cart = styled(CartAlt)`
  color: var(--blue600);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  top: 48px;
  height: 30px;
  width: 190px;
  position: fixed;
  right: 260px;

  :hover {
    animation-name: carrinho;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-duration: 1s;
  }

  @keyframes carrinho {
    80% {
      transform: rotate(1deg);
      position: fixed;
      right: 183px;
    }
    85% {
      transform: rotate(5deg);
      position: fixed;
      right: 183px;
    }
    90% {
      transform: rotate(-5deg);
      position: fixed;
      right: 183px;
    }
    100% {
      position: fixed;
      right: 183px;
    }
  }
`;

export const UserIcon = styled(UserCircle)`
  color: var(--blue600);
  height: 25px;
`;

export const CartBox = styled.div`
  position: fixed;
  right: 30px;
  top: 130px;
  border-radius: 5px;
  height: 0px;
  width: 350px;
  background-color: var(--purple);
  animation-name: cart;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  @keyframes cart {
    50% {
      height: 80px;
    }
    
    100% {
      height: 400px;
    }
  }
`;
