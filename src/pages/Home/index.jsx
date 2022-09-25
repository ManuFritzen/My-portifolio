import { Container, Text, ButtonMessage} from "./styles";

import { Header } from "../../components/Header";
import IconEmailPink from "../../assets/emailPink.svg";



function Home() {
  
  return(
    <Container>
      <Header/>

      <Text>
        <h1> Olá, eu sou a <span>&lt;Manu/&gt;</span> </h1>
        <h2>Amante da Tecnologia!</h2>
        <h3>Meu maior interesse é em  Full Stack, atualmente tenho mais experiência com <br/>
        Front-end, mas estudo incansávelmente para crescer na área e adquirir<br/>
        conhecimento amplo para me tornar uma Full Stack diferenciada.</h3>
      </Text>

      <ButtonMessage>
        <a>
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          <img src={IconEmailPink} alt="Email" />
          <h2>Bora fazer uma parceria??</h2>
          <h3>Me mande um e-mail</h3>
        </a>        
      </ButtonMessage>

    </Container>
  )
}

export default Home
