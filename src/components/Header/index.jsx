import { ButtonLogin, HeaderContent } from "./style";
import logo from "../../images/logo.png"

export default function Header(){
  return(
    <HeaderContent>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <ButtonLogin>Log In</ButtonLogin>
    </HeaderContent>
  )
}