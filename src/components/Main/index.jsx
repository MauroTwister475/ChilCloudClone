import { MainContent } from "./style";
import Cards from "./Cards";
import SectionPhotos from "./SectionPhotos/SectionPhotos";
import Testemunho from "./Testemunhos";

export default function Main() {
  return (
    <MainContent>
      <div className="cards">
        <Cards />
      </div>
      <SectionPhotos />
      <Testemunho />
    </MainContent>
  );
}
