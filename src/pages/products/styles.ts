import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";

export const Container = styled.header`
  .marqueeContainer {
    display: flex;
    flex-direction: row;
  }
  .marquee {
    height: 5rem;
    svg {
      color: ${(props) => props.theme.yellow};
    }
    div {
      display: flex;
      flex-direction: row;
      gap: 10rem;
      span {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`;

export const ContainerHeaderProducts = styled.section`
  width: 100%;
`;
export const ProductsContainer = styled.section`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.neutral};
  h2 {
    text-align: justify;
    padding: 1rem;
    border: none;
    font-size: 18px;
    width: 100%;
    font-weight: 600;
  }
  .first {
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 0.2rem;
    padding-bottom: 1.6rem;
    padding-top: 2.1rem;
    justify-self: center;
    align-items: center;
    span {
      margin-left: 5px;
      margin-top: 2px;
      font-size: 0.85rem;
      font-weight: 400;
    }
  }
  nav {
    width: 15%;
    height: calc(100vh - 10rem);
    border-right: 1px solid ${(props) => props.theme.neutral};
    ul {
      padding: 1rem 1rem;
      width: 100%;
      li {
        width: 80%;
        padding: 1rem;
        font-size: 14px;
      }
    }
  }
`;
export const ProductsList = styled.div`
  margin-top: 1rem;
  padding: 0rem 1rem;
  width: 100%;
  height: calc(100vh - 17rem);
  header {
    margin: 0rem 3rem;
    display: flex;
    justify-content: space-between;
    h1 {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
    }
    button {
      cursor: pointer;
      border-radius: 6px;
      background-color: ${(props) => props.theme.yellow};
      font-size: 0.85rem;
      width: 7rem;
      color: ${(props) => props.theme.text};
      border: 1px solid ${(props) => props.theme.yellow};
      display: flex;
      gap: 0.2rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 2.2rem;
    }
    .MuiInputBase-root {
      border: 1px solid ${(props) => props.theme.field};
      border-radius: 6px;
    }
  }
`;

export const Cards = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.neutral};
  height: 15rem;
  max-width: 19rem;
  border-radius: 6px;
  img {
    padding: 0.5rem;
    width: 100%;
    max-width: 220px;
  }
`;

export const DetailsCard = styled.div`
  display: flex;
  max-width: 19rem;
  justify-content: space-between;
  .price {
    font-size: 1rem;
    font-weight: 600;
  }
  h1 {
    font-size: 1rem;
  }
  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.eaeaea};
  }
  div {
    padding: 1rem 0.5rem;
  }
  button:hover {
    cursor: pointer;
    color: #25283d;
  }
`;
export const CardContainer = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 2rem;
  @media (min-width: 250px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  z-index: 10;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0009;
`;
export const Content = styled(Dialog.Content)`
  width: 35rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 14px;
`;

export const ContainerButtons = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row!important;
  svg {
    color: ${(props) => props.theme.text};
  }
  label {
    font-size: 13px;
    font-weight: 400!important;
    text-transform: uppercase;
    color: black;

    display: flex;
    align-items: center;
    align-content: center;

    input {
      width: 0px;
      display: none;
      visibility: hidden;
      position: absolute;
    }
    cursor: pointer;
    background-color: red;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px;
    gap: 12px;

    background: ${(props) => props.theme.neutral};

    border-radius: 6px;

    flex: none;
    order: 0;
    flex-grow: 1;
  }
  label:hover {
   color: ${(props) => props.theme.text};;
  }
  label.active {
    border: 1px solid ${(props) => props.theme.yellow};
    background: rgba(250, 227, 95, 0.185);
    svg {
    color: ${(props) => props.theme.yellow};
  }
  }
`;
export const FormContainer = styled.form`
  padding: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    width: 100%;
  }
  input {
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid #0002;
    background: #fff;
  }
  .Toastify__progress-bar-theme--light {
    background: ${(props) => props.theme.yellow};
  }
  .Toastify__close-button {
    display: none;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "Upload Image";
    display: inline-block;
    border-radius: 3px;
    outline: none;
    white-space: nowrap;
    color: black;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 500;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }

  button {
    cursor: pointer;
      border-radius: 6px;
      background-color: ${(props) => props.theme.yellow};
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      width: 100%;
      color: ${(props) => props.theme.text};
      border: 1px solid ${(props) => props.theme.yellow};
      display: flex;
      gap: 0.2rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 3.2rem;

  }
  label {
    font-weight: 600;
  }
`;
export const Group = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 1rem;
`;

export const FilterComponent = styled(Accordion.Item)`
  li {
    &:hover {
      font-weight: 500;
      cursor: pointer;
    }
  }
  .contentList {
    padding: 0.5rem;
    border: none;
    list-style: none;
    margin-left: 1rem;
  }
  h2 {
    cursor: pointer;
    text-align: justify;
    padding: 1rem;
    border: none;
    font-size: 15px;
    width: 100%;
    font-weight: 600;
  }
`;

export const ContentList = styled(Accordion.Content)``;
export const OpenFilters = styled(Accordion.Trigger)`
  width: 100%;
  h2 {
    text-align: justify;
    padding: 1rem;
    border: none;
    font-size: 15px;
    width: 100%;
    font-weight: 600;
  }
  border: none;

  background-color: transparent;
  cursor: pointer;
`;
