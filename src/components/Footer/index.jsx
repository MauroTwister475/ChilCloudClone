import { FooterContent } from "./style";
import facebookIcon from "../../images/facebook.svg";
import twitterIcon from "../../images/twitter.svg";

export default function Footer() {
  return (
    <FooterContent>
      <div className="photo-Lapis">
        <div className="shadow">
        </div>
      </div>
      <div className="text-Footer">
        <div className="links">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              {" "}
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Tutorials</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
          <span>© ChildCloud 2018. All Rights Reserved.</span>
        </div>
        <div className="midias">
          <a href="www.facebook.com">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="www.twitter.com">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </div>
      </div>
    </FooterContent>
  );
}
