import styled from "styled-components";

export const MainContent = styled.main`
  width: 100vw;
  height: max-content;

  padding-block: 10rem;
  padding-inline: 10rem;
  background: var(--bg-gray2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  
  .cards {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(25rem, 1fr));
    gap: 3.5rem;
  }
`;

export const CardContent = styled.div`
  width: 30rem;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  border-radius: 0.6rem;
  text-align: center;
  padding-block: 2rem;
  transition: all 0.4s ease;

  img {
    width: 12rem;
    &:hover{
      transform: scale(1.1);
    }
  }
  strong{
    font: bold 2.5rem arial;
    color: var(--bg-title);
  }
  p{
    font: normal 1.8rem arial;
    color: gray;
    line-height: 3rem;
  }
`;
