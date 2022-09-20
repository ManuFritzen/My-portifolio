import { Container, Navegation} from "./styles";
import { Link } from 'react-router-dom';
import { ButtonNav } from "../ButtonNav";
import IconGit from "../../assets/github.svg";
import IconLinkdin from "../../assets/linkedin.svg";
import IconEmail from "../../assets/email.svg";

export function Header(){
    return (
      <Container>
           <Navegation>
                <ul>
                    <Link to="/"><li> <ButtonNav title = '<Home/>'/> </li></Link>
                    <Link to="/about"><li> <ButtonNav title = '<Sobre mim/>'/> </li></Link>
                    <Link to="/projects"><li> <ButtonNav title = '<Projetos/>'/> </li></Link>
                    <Link to="/certificates"><li> <ButtonNav title = '<Certificados/>'/> </li></Link>
                </ul>

                <ul>
                    <a href="https://github.com/ManuFritzen">
                        <img src={IconGit} alt="icon github" />
                    </a>
                    <a href="https://www.linkedin.com/in/emanuelle-fritzen-machado-6b5bb122b/">
                        <img src={IconLinkdin} alt="icon github" /> 
                    </a>
                    <a href="mailto:manufritzenpro@gmail.com">
                        <img src={IconEmail} alt="icon github" />
                    </a>
                </ul>
            
            </Navegation>    
        
        </Container>
    )
  }