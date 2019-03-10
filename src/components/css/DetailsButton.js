import styled from "styled-components";
import "../../App.css";

export const DetailsButton = styled.button`
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background-color: rgb(87, 52, 140);
  display: flex;
  margin: 1rem 1rem 0 0;
  border: 0.15rem solid rgb(87, 52, 140);
  cursor: pointer;
  border-radius: 3rem;
  padding: 0.2rem 0.8rem;
  transition: all 0.2s ease-in-out;
    &:focus {
      outline: 0;
    }
    &:hover {
      color: white;
      text-decoration: underline;
    }
`;