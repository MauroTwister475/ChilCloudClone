import styled from "styled-components";

export const Button = styled.button`
  width: 40rem;
  height: 5.5rem;

  border-radius: 0.4rem;
  ${'' /* padding: 1.5rem; */}

  background: var(--bg-blue);
  color: var(--bg-white);

  outline: none;
  border: none;
  cursor: pointer;
  font: bold 2rem arial;
  transition: background 0.4s ease;

  &:hover {
    text-decoration: underline;
    background: var(--bg-blue2);
  }
`;