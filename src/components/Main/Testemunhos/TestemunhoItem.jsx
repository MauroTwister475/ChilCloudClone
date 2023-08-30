import { CardContent } from "../style";
import test1 from "../../../images/test1.jpg";
import test2 from "../../../images/test2.jpg";
import test3 from "../../../images/test3.jpg";

const testemunhoInfo = [
  {
    img: {
      src: test1,
      alt: "Testemunho1",
    },
    title: `Brett Pearson - Headmaster Forres Preparatory School`,
    description:`"ChildCloud is simple in appearance, easy to use and has a 
      myriad of features. I would highly recommend the system."`,
  },
  {
    img: {
      src: test2,
      alt: "Testemunho2",
    },
    title: `Shelley Bergman - Head Teacher Little People Montessor`,
    description:`"I am confident to say that I can highly recommend ChildCloud. It provides a solution for busy 
        parents to keep track of their children's school life."
    "`,
  },
  {
    img: {
      src: test3,
      alt: "Testemunho3",
    },
    title: `Mandy Arora - Principle Little Stars Montessori`,
    description:`"We having so much fun with our Virtual Classroom.
     Thank you ChildCloud for all your support."`,
  },
]

export default function TestemunhoItem() {
  return (
    <>
      {testemunhoInfo.map((test) => {
        return (
          <CardContent key={test.title}>
            <img src={test.img.src} alt={test.img.alt} />
            <strong>{test.title}</strong>
            <p>{test.description}</p>
          </CardContent>
        );
      })}
    </>
  );
}