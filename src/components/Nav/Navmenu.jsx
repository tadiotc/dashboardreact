import { Link, useLocation } from "react-router-dom";
import Logosvg from '../../assets/espmlogo.svg';
import Perfil from '../Perfil'

import "./Navcss.css"
import { useState, useEffect } from "react";



const Navmenu = () => {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState("inicio");
  
    useEffect(() => {
      const pathname = location.pathname;
      // Remove a barra inicial e verifica se corresponde ao 'to' dos links
      const currentLink = pathname.substring(1) || "inicio";
      setActiveLink(currentLink);
    }, [location]);

    // alert( activeLink )

    const [openmen, setOpenmen ] = useState( false )

    function mudaAtivo(event) {
        const arrayIds = ['competencia', 'tracos', 'ciclos', 'coleta', 'usuarios', 'plano', 'relatorios', 'inicio'];
    
        arrayIds.forEach(x => {
            const element = document.getElementById(x);
            element.classList.remove('ativo');
        });
    
        event.target.classList.add('ativo');

        if( openmen ){
            setOpenmen( false )
        }
    }

    function abreMenu() {
        setOpenmen(!openmen);

        if(openmen){
            setTimeout(function() {
                location.reload();
            }, 250);
        }
    }

    let classModMen = '';
    let ativo = '';
    if( openmen ){
        classModMen = 'abre';
        ativo = 'ativo';
    }else{
        classModMen = '';
        ativo = '';
    }

    return(
        <>
        <header>            
            <div className="div_logo_aol" id="logo_mob_aol" onClick={abreMenu}>
                <img src={Logosvg} alt="" className="espmlogo_aol" />
                <a id="menubtn_aol" className={ativo}>
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
            </div>

            <Perfil/>
        </header>

        <div className={"menu_styk_aol "+ classModMen }>
            <div className="men_container_aol">
                <nav id="nav_aol">
                    <ul className="ul_a_aol">
                        <li className="li_a_aol"><Link className={`nav_a_aol ${activeLink == "inicio" ? "ativo" : ""}`} to="/" id="inicio" onClick={mudaAtivo}>Início</Link></li>
                        <li className="li_a_aol"><Link className={`nav_a_aol ${activeLink == "competencia" ? "ativo" : ""}`} to="/competencia" id="competencia" onClick={mudaAtivo}>Competências</Link></li>
                        <li className="li_a_aol"><Link className={`nav_a_aol ${activeLink == "tracos" ? "ativo" : ""}`} to="/tracos" id="tracos" onClick={mudaAtivo}>Tracos</Link></li>
                        <li className="li_a_aol"><Link className={`nav_a_aol ${activeLink == "ciclos" ? "ativo" : ""}`} to="/ciclos" id="ciclos" onClick={mudaAtivo}>Ciclos</Link></li>
                        <li className="li_a_aol"><Link className={`nav_a_aol ${activeLink == "coletas" ? "ativo" : ""}`} to="/coletas" id="coleta" onClick={mudaAtivo}>Coletas</Link></li>
                        <li className="li_a_aol"><Link className={`nav_a_aol ${activeLink == "usuarios" ? "ativo" : ""}`} to="/usuarios" id="usuarios" onClick={mudaAtivo}>Usuários</Link></li>
                        <li className="li_a_aol"><Link className={`nav_a_aol ${activeLink == "planocoletas" ? "ativo" : ""}`} to="/planocoletas" id="plano" onClick={mudaAtivo}>Plano de Coleta</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navmenu

