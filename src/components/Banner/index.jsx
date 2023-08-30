import { BannerContent } from "./style";
import EssencialButton from "../EssencialButton";

export default function Banner() {
  return (
    <BannerContent>
      <section className="text">
        <h1>
          An effective and fun way for teachers <br />
          to communicate with parents,observe <br />
          children and manage classrooms
        </h1>
      </section>
      <div>
        <EssencialButton texto="Watch video" />
        <a href="/sign">Sign up your school here</a>
      </div>
    </BannerContent>
  );
}
