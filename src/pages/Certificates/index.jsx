import {Container, Section, Cards} from "./styles"
import IconEnlarge from "../../assets/enlarge.svg"
import { Header } from "../../components/Header";
import{Caption} from "../../components/Caption";


function Certificates() {
  
    return(
      <Container>
          <Header/> 
  
          <Section>
              <Caption title="&lt;Certificados/&gt;"/>           
          
          </Section>
          <Cards>
                <button>
                    <img src={IconEnlarge} alt="" />
                    <h3>nome do certificado</h3>
                    <div id="certificate">

                    </div>
                </button>
                <button>
                    <img src={IconEnlarge} alt="" />
                    <h3>nome do certificado</h3>
                    <div id="certificate">
                        
                    </div>
                </button>
                <button>
                    <img src={IconEnlarge} alt="" />
                    <h3>nome do certificado</h3>
                    <div id="certificate">
                        
                    </div>
                </button>
            </Cards>
            <Cards>
                <button>
                    <img src={IconEnlarge} alt="" />
                    <h3>nome do certificado</h3>
                    <div id="certificate">

                    </div>
                </button>
                <button>
                    <img src={IconEnlarge} alt="" />
                    <h3>nome do certificado</h3>
                    <div id="certificate">
                        
                    </div>
                </button>
                <button>
                    <img src={IconEnlarge} alt="" />
                    <h3>nome do certificado</h3>
                    <div id="certificate">
                        
                    </div>
                </button>
            </Cards>
      </Container>
    )
  }
  
  export default Certificates