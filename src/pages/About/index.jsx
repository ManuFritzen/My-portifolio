import {Container, Text} from "./styles";

import FotoManu from "../../assets/fotoManu.jpg";
import Frame from "../../assets/Frame.svg";

import {Header}  from "../../components/Header";
import{Caption} from "../../components/Caption";

function About(){
    return(
        <Container>
            <Header/>
            <Text>
                <section>
                    <Caption title="&lt;Sobre mim/&gt;"/>
                    <h3> Meu nome é Emanuelle Fritzen Machado, mais conhecida como Manu, tenho 30 anos e sou gaúcha nascida e Residente na cidade de Rio Grande/RS. Iniciei minha jornada dev em janeiro de 2022, estudando com materias da internet e com o auxílio dos meus irmãos que são da área. Nesse momento tive meu primeiro contato com linguagens de programação. Como estava encantada com os estudos, resolvi participar de um processo seletivo para entrar para um curso superior na área, eu estava muito tempo afastada dos estudos, mas para minha surpresa fui selecionada nas vagas imediatas e comecei em agosto de 2022 a cursar Tecnólogo em Análise e Desenvolvimento de Sistemas no IFRS.<br/>
                        A área da tecnologia me atraiu pela sua diversidade em atuações e principalmente por envolver lógica, sempre fui apaixonada por desafios lógicos e procuro sempre superar minhas expectativas.<br/>
                        Hoje atuo como servidora pública federal, na Universidade Federal de Rio Grande - FURG, em um concurso que passei em 2014. Em paralelo faço freelas na área dev para ganhar experiência e com isso pretendo muito em breve migrar totalmente para a programação.<br/>
                        Nas horas livres amo estar com minhas filhas e esposo, assistir séries, cantar e dançar.<br/><br/>
                        Essa sou eu!
                     </h3>
                </section>
                <section id="image">
                    <img id="foto" src={FotoManu} alt="" />
                    <div>
                        <h3>Esudando:</h3>
                        <ul>
                            <li><img src={Frame} alt="seta" />HTML, CSS</li>
                            <li><img src={Frame} alt="seta" />JavaScript</li>
                            <li><img src={Frame} alt="seta" />ReactJS</li>
                        </ul>
                        <ul>
                            <li><img src={Frame} alt="seta" />Node.js</li>
                            <li><img src={Frame} alt="seta" />Java</li>
                            <li><img src={Frame} alt="seta" />MySQL</li>
                        </ul>
                        <ul>
                            <li><img src={Frame} alt="seta" />API</li>
                        </ul>
                    </div>

                </section>

            </Text>

        </Container>

    )
}

export default About