import { CardContent } from "./style";
import { cardData } from "./CardInfo";

export default function Cards() {
  return (
    <>
      {cardData.map((card) => {
        return (
          <CardContent key={card.title}>
            <img src={card.img.src} alt={card.img.alt} />
            <strong>{card.title}</strong>
            <p>{card.description}</p>
          </CardContent>
        );
      })}
    </>
  );
}