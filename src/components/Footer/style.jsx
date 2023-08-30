import styled from "styled-components";
import fotoLapis from "../../images/lapis.png";

export const FooterContent = styled.footer`
  width: 100vw;
  height: 60rem;
  bottom: 0;
  background: var(--bg-gray2);

  .photo-Lapis {
    width: 100%;
    height: 20rem;
    background: url(${fotoLapis}) no-repeat center;
    background-size:  auto;

    .shadow {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .text-Footer {
    width: 100%;
    height: 20rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 22rem;

    .links {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      ul {
        list-style: none;
        display: flex;
        gap: 2rem;

        li a {
          font: normal 1.6rem arial;
          color: var(--bg-blue);
        }
      }
      span {
        font: normal 1.5rem arial;
        color: gray;
        text-indent: 4rem;
      }
    }
    .midias{
      display: flex;
      gap: 4rem;
      a{
        color: red;
        img{
          width: 3.2rem;
        }
      }
    }
  }
  
`;
