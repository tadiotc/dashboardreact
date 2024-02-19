// TracosProvider.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import Ciclos from "../../backend/ciclos.json";
import Coletas from "../../backend/coletas.json";
import Competencias from "../../backend/competencias.json";
import Plano from "../../backend/plano.json";
import Relatorios from "../../backend/relatorios.json";
import Usuarios from "../../backend/usuarios.json";
import Tracos from "../../backend/tracos.json";

//// CRIA OS OBJETOS JSON
const CiclosJ = Object.values( Ciclos );
const ColetasJ = Object.values( Coletas );
const CompetenciasJ = Object.values( Competencias );
const PlanoJ = Object.values( Plano );
const RelatoriosJ = Object.values( Relatorios );
const UsuariosJ = Object.values( Usuarios );
const Tracosj = Object.values( Tracos );

/// EXPORTA OS DADOS PARA CONTEXTO
export const TracosContext = createContext();

export const TracosProvider = ({ children }) => {

  const [competencias, setCompetencias] = useState([]);
  const [tracos, setTracos] = useState([]);
  const [ciclos, setCiclos] = useState([]);
  const [coletas, setColetas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [planocoleta, setPlanocoleta] = useState([]);
  const [relatorios, setRelatorios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`https://base.deguste.online/json/tracos.json?timestamp=${new Date().getTime()}`);
        // setTracos(response.data);

        // const responseCom = await axios.get(`https://base.deguste.online/json/competencias.json?timestamp=${new Date().getTime()}`);
        // setCompetencias(responseCom.data);

        // const responseCic = await axios.get(`https://base.deguste.online/json/competencias.json?timestamp=${new Date().getTime()}`);
        // setCiclos(responseCic.data);

        // const responseUsu = await axios.get(`https://base.deguste.online/json/usuarios.json?timestamp=${new Date().getTime()}`);
        // setUsuarios(responseUsu.data);

      } catch (error) {
        
        setCompetencias(CompetenciasJ);
        setTracos(Tracosj);
        setCiclos(CiclosJ);
        setColetas(ColetasJ);
        setUsuarios(UsuariosJ);
        setPlanocoleta(PlanoJ);
        setRelatorios(RelatoriosJ);

      }
    };
    fetchData();
  }, []);


  return (
    <TracosContext.Provider value={{ competencias, tracos, ciclos, coletas, usuarios, planocoleta, relatorios }}>
      {children}
    </TracosContext.Provider>
  );
};
