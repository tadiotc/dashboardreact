import HeaderPagina from "../../components/HeaderPagina"
import Ciclos from "../../assets/ciclos.svg";
import Coleta from "../../assets/coleta.svg";
import Planocoleta from "../../assets/planocoleta.svg";
import Competencias from "../../assets/competencias.svg";
import Relatorios from "../../assets/relatorios.svg";
import Usuarios from "../../assets/usuarios.svg";
import Acessos from "../../assets/acessos.svg";
import Tracos from "../../assets/tracos.svg";
import { Chart } from "react-google-charts"
import { Link } from "react-router-dom";
import axios from "axios";

import "./css.css";

import CiclosJs from "../../backend/ciclos.json";
import ColetasJs from "../../backend/coletas.json";
import CompetenciasJs from "../../backend/competencias.json";
import PlanoJs from "../../backend/plano.json";
import RelatoriosJs from "../../backend/relatorios.json";
import UsuariosJs from "../../backend/usuarios.json";
import TracosJs from "../../backend/tracos.json";

import {  useEffect, useState } from "react";

const Inicio = () => {

    /// CHART GOOGLE
    const data = [
        ["", "Cadastros", "Acessos"],
        ["Jan", 0, 0],
        ["Fev", 0, 0],
        ["Mar", 0, 0],
        ["Abr", 0, 0],
        ["Mai", 0, 0],
        ["Jun", 0, 0],
        ["Jul", 0, 0],
        ["Ago", 200, 100],
        ["Set", 300, 200],
        ["Out", 200, 300],
        ["Nov", 100, 550],
    ];

    const options = {
    chart: {
        title: "Sistema AOL ESPM",
        subtitle: "Quantidade de acessos e inclusões ( cadastros ) no sistema",
    },
    colors: ["#495057", "#B0223B"],
    };

    // CRIA OS OBJETOS JSON
    const CiclosJ = Object.values( CiclosJs );
    const ColetasJ = Object.values( ColetasJs );
    const CompetenciasJ = Object.values( CompetenciasJs );
    const PlanoJ = Object.values( PlanoJs );
    const RelatoriosJ = Object.values( RelatoriosJs );
    const UsuariosJ = Object.values( UsuariosJs );
    const Tracosj = Object.values( TracosJs );
  

    const [competencias, setCompetencias] = useState(0);
    const [tracos, setTracos] = useState(0);
    const [ciclos, setCiclos] = useState(0);
    const [coletas, setColetas] = useState(0);
    const [usuarios, setUsuarios] = useState(0);
    const [planocoleta, setPlanocoleta] = useState(0);
    const [relatorios, setRelatorios] = useState(0);

  
    useEffect(() => {
      const fetchData = async () => {
        try {

          const responseCom = await axios.get(`https://base.deguste.online/json/competencias.json?timestamp=${new Date().getTime()}`);
          setCompetencias(responseCom.data.length );

          const response = await axios.get(`https://base.deguste.online/json/tracos.json?timestamp=${new Date().getTime()}`);
          setTracos(response.data.length );
    
          const responseCic = await axios.get(`https://base.deguste.online/json/ciclos.json?timestamp=${new Date().getTime()}`);
          setCiclos(responseCic.data.length );
  
          const responseCol = await axios.get(`https://base.deguste.online/json/coletas.json?timestamp=${new Date().getTime()}`);
          setColetas(responseCol.data.length );
  
          const responseUsu = await axios.get(`https://base.deguste.online/json/usuarios.json?timestamp=${new Date().getTime()}`);
          setUsuarios(responseUsu.data.length );
  
          const responsePlan = await axios.get(`https://base.deguste.online/json/plano.json?timestamp=${new Date().getTime()}`);
          setPlanocoleta(responsePlan.data.length );
  
          const responseRel = await axios.get(`https://base.deguste.online/json/relatorios.json?timestamp=${new Date().getTime()}`);
          setRelatorios(responseRel.data.length );
  
        } catch (error) {

            console.error("Erro ao buscar dados:", error);
          
            setCompetencias(CompetenciasJ.length);
            setTracos(Tracosj.length);
            setCiclos(CiclosJ.length);
            setColetas(ColetasJ.length);
            setUsuarios(UsuariosJ.length);
            setPlanocoleta(PlanoJ.length);
            setRelatorios(RelatoriosJ.length);
  
        }
      };

      fetchData();

    }, []);



    const nome = { nome: 'Início' }

    function mudaAtivoini( xx ) {
        const arrayIds = ['competencia', 'tracos', 'ciclos', 'coleta', 'usuarios', 'plano', 'relatorios', 'inicio'];
    
        arrayIds.forEach(x => {
            const element = document.getElementById(x);
            element.classList.remove('ativo');
        });
    
        document.getElementById(xx).classList.add('ativo');
    }

    return(
        <div className="container anima">
            <div className="espaco_top"></div>
            <div className="row pb-5 mb-5 pt-5">

                <HeaderPagina nome={nome.nome} extraclass={'d-none'} />

                {/* ESPAÇO TOP */}
                <div className="col-12 p-4" ></div> 
                
                <div className="col-6 col-xl-3 col-lg-4 d-flex pb-4">
                    <Link className="link_inicio" to="/competencia" onClick={ ()=>{mudaAtivoini('competencia')} }> 
                        <div className="box_aol_info">
                            <div className="headerbox">  
                                <div className="iconbox"> <img src={Competencias} alt="" /> </div> 
                                <h4>Competencias</h4>
                            </div>
                            <div className="bodybox">
                                <h3>{ competencias }</h3>
                                <h6>Registros</h6>
                            </div>
                        </div>
                    </Link>
                </div>
                
                
                <div className="col-6 col-xl-3 col-lg-4 d-flex pb-4">
                    <Link className="link_inicio" to="/tracos" onClick={ ()=>{mudaAtivoini('tracos')} }> 
                        <div className="box_aol_info">
                            <div className="headerbox">  
                                <div className="iconbox"> <img src={Tracos} alt="" /> </div> 
                                <h4>Traços</h4>
                            </div>
                            <div className="bodybox">
                                <h3> { tracos } </h3>
                                <h6>Registros</h6>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="col-6 col-xl-3 col-lg-4 d-flex pb-4">
                    <Link className="link_inicio" to="/ciclos" onClick={ ()=>{mudaAtivoini('ciclos')} }>  
                        <div className="box_aol_info">
                            <div className="headerbox">  
                                <div className="iconbox"> <img src={Ciclos} alt="" /> </div> 
                                <h4>Ciclos</h4>
                            </div>
                            <div className="bodybox">
                                <h3>{ ciclos }</h3>
                                <h6>Registros</h6>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="col-6 col-xl-3 col-lg-4 d-flex pb-4">
                    <Link className="link_inicio" to="/coletas" onClick={ ()=>{mudaAtivoini('coleta')} }>  
                        <div className="box_aol_info">
                            <div className="headerbox">  
                                <div className="iconbox"> <img src={Coleta} alt="" /> </div> 
                                <h4>Coletas</h4>
                            </div>
                            <div className="bodybox">
                                <h3>{ coletas }</h3>
                                <h6>Registros</h6>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="col-6 col-xl-3 col-lg-4 d-flex pb-4">
                    <Link className="link_inicio" to="/usuarios" onClick={ ()=>{mudaAtivoini('usuarios')} }> 
                        <div className="box_aol_info">
                            <div className="headerbox">  
                                <div className="iconbox"> <img src={Usuarios} alt="" /> </div> 
                                <h4>Usuários</h4>
                            </div>
                            <div className="bodybox">
                                <h3>{ usuarios }</h3>
                                <h6>Registros</h6>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="col-6 col-xl-3 col-lg-4 d-flex pb-4">
                    <Link className="link_inicio" to="/planocoletas" onClick={ ()=>{mudaAtivoini('plano')} }> 
                        <div className="box_aol_info">
                            <div className="headerbox">  
                                <div className="iconbox"> <img src={Planocoleta} alt="" /> </div> 
                                <h4>Plano de Coletas</h4>
                            </div>
                            <div className="bodybox">
                                <h3>{ planocoleta }</h3>
                                <h6>Registros</h6>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="col-6 col-xl-3 col-lg-4 d-flex pb-4">
                    <Link className="link_inicio" to="/relatorios" onClick={ ()=>{mudaAtivoini('relatorios')} }>  
                        <div className="box_aol_info">
                            <div className="headerbox">  
                                <div className="iconbox"> <img src={Relatorios} alt="" /> </div> 
                                <h4>Relatórios</h4>
                            </div>
                            <div className="bodybox">
                                <h3>{ relatorios }</h3>
                                <h6>Registros</h6>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="col-6 col-xl-3 col-lg-4 d-flex pb-4">
                        <div className="box_aol_infoacess">
                            <div className="headerbox">  
                                <div className="iconbox"> <img src={Acessos} alt="" /> </div> 
                                <h4>Acessos</h4>
                            </div>
                            <div className="bodybox">
                                <h3>3.050</h3>
                                <h6>Acessos</h6>
                            </div>
                        </div>
                </div>

                <div className="col-12 d-flex justify-content-end">
                    {/* <a className="atualizarnumeros" onClick={atualpagin}>Atualizar números</a> */}
                </div>

                <div className="col-12">
                    <div className="box_aol_infoacess d-flex justify-content-center">

                    <Chart
                        chartType="Bar"
                        width="90%"
                        height="300px"
                        data={data}
                        options={options}
                    />
                        
                    </div>
                </div>

            </div>
        </div>
              
    )
}
export default Inicio