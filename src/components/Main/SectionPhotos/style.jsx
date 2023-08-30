import styled from "styled-components";
import photo1 from "../../../images/bg-showcase-1.jpg";
import photo2 from "../../../images/bg-showcase-2.jpg";
import photo3 from "../../../images/bg-showcase-3.jpg";

export const SectionPhotoContent = styled.section`
  width: 100vw;
  height: max-content;
  background: var(--bg-white);

  display: grid;
  grid-template-columns: repeat(2, minmax(25rem, 1fr));
  gap: 0.2rem;

  .photo {
    width: 100%;
    height: 50rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-size: cover;
  }
  .photo1 {
    background: url(${photo1}) no-repeat center;
  }
  .photo2 {
    background: url(${photo2}) no-repeat center;
  }
  .photo3 {
    background: url(${photo3}) no-repeat center;
  }
  .textItem {
    text-align: left;
    padding-inline: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    h1{
      font: bold 3.5rem arial;
      color: var(--bg-text); 
    }
    p{
      font: normal 2rem arial;
      color: var(--bg-text);
      line-height: 3rem; 
    }
  }
`;


