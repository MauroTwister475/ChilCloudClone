import styled from "styled-components";

export const TestemunhoContent = styled.section`
  width: 100vw;
  background: var(--bg-gray2);
  padding: 6rem 0 0 0;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  h1{
    font: bold 3rem arial;
    color: var(--bg-text);
  }

  .testemunhos {
    display: flex;
    flex-direction: row; 
    justify-content: center;
    gap: 11rem;

    div{
      justify-content: flex-start;
    }

    img{
      width: 20rem;
      border-radius: 50rem;
      box-shadow: 0 0 .9rem 0 rgba(0, 0, 0, 0.9);

      &:hover{
        transform: none;
      }
    }
    strong{
      font-size: 2rem;
      color: var(--bg-text);
    }
    p{
      font-size: 1.8rem;
      color: var(--bg-text);
    }
  }
`;
