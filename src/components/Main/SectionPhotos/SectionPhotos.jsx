import { SectionPhotoContent } from "./style";
import TextItem from "./TextItem";

const textItemContent = [
  { 
    title: "Racking your child's progress from Grade N to Grade 12", 
    desc: `
      ChildCloud is an all-in-one, easy to use software management system that tracks the progress of a child, reports incidents, 
      captures online check-ins, photos, messaging, calendar and more.`, 
  },
  { 
    title: "One platform for all your teacher parent communication", 
    desc: `A professional, yet fun way for teachers to communicate
      with parents, observe children and manage classrooms.`, 
  },
  { 
    title: "Web-based school communicator & management system", 
    desc: `ChildCloud can help you save time while improving communication and 
       increasing parents' participation at school events.`, 
  },
  
]

export default function SectionPhotos() {
  return (
    <SectionPhotoContent>
      <TextItem 
        title={textItemContent[0].title} 
        description={textItemContent[0].desc} 
      />
      <div className="photo photo1"></div>
      <div className="photo photo2"></div>
      <TextItem 
        title={textItemContent[1].title}
        description={textItemContent[1].desc}
      />
      <TextItem 
        title={textItemContent[2].title} 
        description={textItemContent[2].desc}
      />
      <div className="photo photo3"></div>
    </SectionPhotoContent>
  );
}
