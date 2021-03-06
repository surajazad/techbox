import styled from "styled-components";
import "../../App.css";

export const Button = styled.button`
  font-size: 1rem;
  background: transparent;
  border: 0.15rem solid var(--mainDark);
  cursor: pointer;
  border-radius: 3rem;
  padding: 0.4rem 2rem;
  transition: all 0.2s ease-in-out;
    &:focus {
      outline: 0;
    }
    &:hover {
      color: white;
      background: var(--mainDark);
    }
`;