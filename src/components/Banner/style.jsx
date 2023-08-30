import styled from "styled-components";
import fundo from "../../images/landing_background.jpg";

export const BannerContent = styled.section`
  width: 100vw;
  ${'' /* height: 720rem; */}
  padding-block: 20rem;

  background: url(${fundo}) no-repeat center;
  background-size: cover;

  margin-top: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  
  .text {
    padding-inline: 20rem;
    text-align: center;
    h1 {
      font-size: 4.6rem;
      color: var(--bg-white);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    a {
      font: bold 2.5rem arial;
      color: var(--bg-white);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
