import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100vw;
  height: 10rem;

  padding: 0 25rem;
  background: var(--bg-white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 10;

  a {
    img {
      height: 8rem;
    }
  }
`;

export const ButtonLogin = styled.button`
  width: 8rem;
  height: 4.5rem;

  border-radius: 0.4rem;
  padding-block: 1rem;

  background: transparent;
  color: var(--bg-blue);

  border: 1px solid var(--bg-blue);
  outline: none;
  margin-right: 20rem;

  cursor: pointer;
  font-size: 1.8rem;
  transition: background 0.4s ease;

  &:hover {
    background: var(--bg-blue);
    color: var(--bg-white);
  }
`;
