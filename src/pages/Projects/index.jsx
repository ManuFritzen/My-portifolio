import {Container, Section, Cards} from "./styles"

import IconGithub from "../../assets/github.svg";

import { Header } from "../../components/Header";
import{Caption} from "../../components/Caption";

function Projects() {
  
  return(
    <Container>
        <Header/> 

        <Section>
            <Caption title="&lt;Projetos/&gt;"/>           
        
        </Section>
        <Cards>
                <button>
                    <img src={IconGithub} alt="" />
                    <h3>nome do projeto01</h3>
                    <h4>Descrição do github Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper sollicitudin mauris,</h4>
                    <ul><li>Liguagem usada1</li>
                    <li>Liguagem usada 2</li></ul>
                </button>
                <button>
                    <img src={IconGithub} alt="" />
                    <h3>nome do projeto01</h3>
                    <h4>Descrição do github Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper sollicitudin mauris,</h4>
                    <ul><li>Liguagem usada1</li>
                    <li>Liguagem usada 2</li></ul>
                </button>
                <button>
                    <img src={IconGithub} alt="" />
                    <h3>nome do projeto01</h3>
                    <h4>Descrição do github Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper sollicitudin mauris,</h4>
                    <ul><li>Liguagem usada1</li>
                    <li>Liguagem usada 2</li></ul>
                </button>               

            </Cards>
            <Cards>
                <button>
                    <img src={IconGithub} alt="" />
                    <h3>nome do projeto01</h3>
                    <h4>Descrição do github Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper sollicitudin mauris,</h4>
                    <ul><li>Liguagem usada1</li>
                    <li>Liguagem usada 2</li></ul>
                </button>
                <button>
                    <img src={IconGithub} alt="" />
                    <h3>nome do projeto01</h3>
                    <h4>Descrição do github Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper sollicitudin mauris,</h4>
                    <ul><li>Liguagem usada1</li>
                    <li>Liguagem usada 2</li></ul>
                </button>
                <button>
                    <img src={IconGithub} alt="" />
                    <h3>nome do projeto01</h3>
                    <h4>Descrição do github Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper sollicitudin mauris,</h4>
                    <ul><li>Liguagem usada1</li>
                    <li>Liguagem usada 2</li></ul>
                </button>               

            </Cards>          

    </Container>
  )
}

export default Projects
