import HeaderPagina from "../HeaderPagina";
import TabelaContainer from "../TabelaContainer";
import TabelaTop from "../TabelaTop";
import TabelaProdutos from "../TabelaProdutos";
import Paginacao from "../Paginacao";
import Inserir from "../Inserir";
import FormInserir from "../FormInserir";
import FormEdit from "../FormEdit";
import BotoesIn from "../BotoesIn";
import ModalDel from "../ModalDel";
import Competencias from "../../backend/competencias.json";
import Tracos from "../../backend/tracos.json";
import Ciclos from "../../backend/ciclos.json";
import Coletas from "../../backend/coletas.json";
import Usuarios from "../../backend/usuarios.json";
import Plano from "../../backend/plano.json";

import { useEffect, useReducer, useState } from "react";
import axios from "axios";

//////////////////////////////////////////////////////////// COMEÇA COMPONENTE
const TabelaCompleta = ({
    nomeHeader,
    tabelaTopValores,
    tabelaProdsValores,
    classeTabelaIn,
    tipopagina,

}) => {

    const CompetenciasConvert = Object.values( Competencias );
    const UsuariosConvert = Object.values( Usuarios );
    const TracosConvert = Object.values( Tracos );
    const PlanoConvert = Object.values( Plano );
    const CiclosConvert = Object.values( Ciclos );
    const ColetasConvert = Object.values( Coletas );

    const [registrosdata, setRegistrosdata] = useState([]);
   
     const fetchData = async () => {
        try {
          const response = await axios.get(`https://base.deguste.online/json/${ tipopagina }.json?timestamp=${new Date().getTime()}`);
        //   console.log( response )
          setRegistrosdata(response.data);
        } catch (error) {

            if( tipopagina == 'competencias' ){
                setRegistrosdata(CompetenciasConvert);
            }

            if( tipopagina == 'usuarios' ){
                setRegistrosdata(UsuariosConvert);
                console.log(UsuariosConvert)
            }
            if( tipopagina == 'tracos' ){
                setRegistrosdata(TracosConvert);
                console.log(TracosConvert)
            }
            if( tipopagina == 'ciclos' ){
                setRegistrosdata(CiclosConvert);
                console.log(CiclosConvert)
            }
            if( tipopagina == 'coletas' ){
                setRegistrosdata(ColetasConvert);
                console.log(ColetasConvert)
            }
            if( tipopagina == 'plano' ){
                setRegistrosdata(PlanoConvert);
                console.log(PlanoConvert)
            }
          
        }
    };   
     
    useEffect(() => {
        fetchData(); 
     }, []);

///////////////////////////////////////////////////////////////////////////////////// PARAMETROS E TRATAMENTO DA PAGINAÇÃO 
    const limite = registrosdata.length

    const pagePosts = {
        postsini: 0,
        postsnum: 10,
        pagina: 1,
        maximo: limite,
        pesq: [],
        exibicao: 10,
    }
    const reducer = (state, action) => {
        const numini = state.postsini;
        const nummais = state.postsnum;
        const pag = state.pagina;
    
        if (action.type === 'mais' && state.postsnum < limite) {
            let nwexib = nummais + 10;
            let nwpostsini = numini + 10;
            let nwpostsnum = nummais + 10;

            if( limite < nwpostsnum ){
                nwexib = limite;
            }
            return { ...state, postsini: nwpostsini, postsnum: nwpostsnum, exibicao: nwexib, pagina: pag + 1, pesq: [] };
        }
    
        if (action.type === 'menos' && state.postsini > 0) {
            let newPostsIni = numini - 10;
            let newPostsNum = nummais - 10;
            let pagin = pag - 1;
            let nwexib = nummais - 10;

            if( newPostsNum < 10 ){
                nwexib = 10;
            }
            // Se restarem menos de 10 posts, exibir todos os restantes
            if (( newPostsNum - newPostsIni ) < 10 && newPostsIni > 0) {
                newPostsNum = newPostsIni + 10
            }

            if( newPostsIni == 0 && newPostsNum < 10 ){
                newPostsNum = 10;
                pagin = 1;
            }
       
            return { ...state, postsini: newPostsIni, postsnum: newPostsNum, exibicao: nwexib, pagina: pagin, pesq: [] };
        }
    
        if (action.type === 'primeiro' && state.postsini > 0) {
            return { ...state, postsini: 0, postsnum: 10, exibicao: 10, pagina: 1, pesq: [] };
        }
    
        if (action.type === 'ultimo') {
            const ultimaPagina = Math.ceil(limite / 10);
            const totalini = (ultimaPagina - 1) * 10;
            return { ...state, postsini: totalini, postsnum: limite, exibicao: limite, pagina: ultimaPagina, pesq: [] };
        }

        if (action.type === 'pesquisa') {
            const palavraChave = document.getElementById('busc_inp_aol');
            if (palavraChave.value !== '') {            
                const minusc = palavraChave.value.toLowerCase();        
                const postsEncontrados = registrosdata.filter(post => {

                    return ( post.descricao && (post.descricao.toLowerCase().includes(minusc) || post.goal.toLowerCase().includes(minusc) )) ||
                           ( post.nome && (post.nome.toLowerCase().includes(minusc) || post.email.toLowerCase().includes(minusc) ));

                });
                return { ...state, pesq: postsEncontrados }; // Atualiza o estado 'pesq' com os resultados da pesquisa
            } else {
                return { ...state, pesq: [] }; // Se a pesquisa for vazia, limpa os resultados da pesquisa
            }
        }
    
        return { ...state };
    };

    const [ state, dispatch ] = useReducer( reducer, pagePosts) 

    let nwposts = state.pesq.length == 0 ? registrosdata.slice(state.postsini, state.postsnum) : state.pesq ;

     const PaginacaoData = {
        anterior: 'anterior',
        num: state.pagina,
        proximo: 'proximo',
        exibindo: `exibindo ${state.exibicao} de ${ limite } Registros`,
        actionExibindo: 'actionExibindo',
        inseririd: 'inseririd',
        inserirtext: 'Inserir Registro',
    }

/////////////////////////////////////////////////////////////////////////// ABRIR E FECHAR CONTAINERS
    const [open, setOpen ] = useState( false );
    const [openedit, setOpenedit ] = useState( false );

    const [close, setClose ] = useState( false );
    const [closeedit, setCloseedit ] = useState( false );

    const [dnone, setDnone ] = useState( false );

    let classCont='';
    let classContvolt='';
    let dispnone='';

    if( open || openedit ){
        classCont = 'entramain';
    }else{
        classCont = '';
    }

    if( close || closeedit ){
        classContvolt = 'saiedit';
            setClose(false)
            setCloseedit(false)
    }else{
        classContvolt = '';
    }

    if( dnone ){
        dispnone = 'diminuitela';
    }else{
        dispnone = '';
    }


    function scrollToTop() {
        // Rola a página para o topo suavemente
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

///////////////////////////////////////////////////////////////////////////////// BOTÕES VOLTAR SALVAR
    const voltarsalvar = {
        retornartext: 'Retornar',
        retornarid: 'retornarid',
        retornaraction: () =>{ setClose( true ), scrollToTop() },
        salvartext: 'Inserir',
        salvarid: 'salvarid',
    }
///////////////////////////////////////////////////////////////////////////////////// INSERIR REGISTROS 
const handleForm = async (event) => {
    event.preventDefault();
  
    const formulario = event.target;
  
    const dadosFormulario = new FormData(formulario);
  
    const dataHoraAtual = new Date();
    const dataFormatada = `${dataHoraAtual.getFullYear()}-${(dataHoraAtual.getMonth() + 1).toString().padStart(2, '0')}-${dataHoraAtual.getDate().toString().padStart(2, '0')}`;
    const horaFormatada = `${dataHoraAtual.getHours().toString().padStart(2, '0')}:${dataHoraAtual.getMinutes().toString().padStart(2, '0')}:${dataHoraAtual.getSeconds().toString().padStart(2, '0')}`;
    const dataHoraCriacao = `${dataFormatada} ${horaFormatada}`;

    const id = event.currentTarget.getAttribute('data-id');

    dadosFormulario.set('datahoracriacao', dataHoraCriacao);
    dadosFormulario.set('cod', id);
   
    try {
      const response = await fetch('back/inserir.php', {
        method: 'POST',
        body: dadosFormulario
      });

      fetchData(); 
      setDnone(false)
      setOpen( false );
      if (!response.ok) {
        throw new Error('Erro ao enviar os dados.');
      } else {
        formulario.reset();   
        const data = await response.json();  
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.message);
        }
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error.message);
    }
  };
  

///////////////////////////////////////////////////////////////////////////////////// EDITAR REGISTROS
const handleFormEdit = async (event) => {
    event.preventDefault();
    let form = event.target;
    const dadosFormulario = new FormData(form);
    const dataHoraAtual = new Date();
    const dataFormatada = `${dataHoraAtual.getFullYear()}-${(dataHoraAtual.getMonth() + 1).toString().padStart(2, '0')}-${dataHoraAtual.getDate().toString().padStart(2, '0')}`;
    const horaFormatada = `${dataHoraAtual.getHours().toString().padStart(2, '0')}:${dataHoraAtual.getMinutes().toString().padStart(2, '0')}:${dataHoraAtual.getSeconds().toString().padStart(2, '0')}`;
    const datahoraedicao = `${dataFormatada} ${horaFormatada}`;
    dadosFormulario.set('datahoraedicao', datahoraedicao);
    try {
        const response = await fetch('back/update.php', {
        method: 'POST',
        body: dadosFormulario
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar os dados.');
        } else {
            form.reset();
            fetchData(); 
            setDnone(false)
            setOpenedit( false );
            const data = await response.json();
            if(data.error){                            
                console.log( `${data.error}` )
            }else{
                console.log( `${data.message}` )
            }
        }
    } catch (error) {
        console.log( `${error.message}` )
    }
    return false;
};


const popularObj = {
    codigo:'',
    competencia:'',
    descricao:'',
    id:'',
    info1:'',
    info2:'',
    info3:'',
    info4:'',
}
const [popular, setPopular] = useState( popularObj );

const popularEdit = ( nwposts ) => {
    const arrAtual = nwposts; 
    if(tipopagina == 'competencias'){
        setPopular({ 
            id: arrAtual.id, 
            codigo: arrAtual.codigo, 
            competencia: arrAtual.competencia, 
            descricao: arrAtual.descricao,
            cod: arrAtual.id,
            objective: arrAtual.objective, 
            goal: arrAtual.goal, 
            emailedicao: arrAtual.emailedicao, 
            datahoraedicao: arrAtual.datahoraedicao, 
            datahoracriacao: arrAtual.datahoracriacao, 
            criadoremail: arrAtual.criadoremail, 
            criador: arrAtual.criador, 
        })
    }
    if(tipopagina == 'usuarios'){
        setPopular({ 
            id: arrAtual.id, 
            cod: arrAtual.id,
            nome: arrAtual.nome, 
            email: arrAtual.email, 
            tipo: arrAtual.tipo, 
            datahoraedicao: arrAtual.datahoraedicao, 
            datahoracriacao: arrAtual.datahoracriacao, 
            criadoremail: arrAtual.criadoremail, 
            criador: arrAtual.criador, 
            edicao: arrAtual.criador, 
            emailedicao: arrAtual.criador, 
        })
    }
    if(tipopagina == 'tracos'){
        setPopular({ 
            id: arrAtual.id, 
            cod: arrAtual.id,
            codigo: arrAtual.codigo, 
            descricao: arrAtual.descricao, 
            competencia: arrAtual.competencia, 
            naoatendeexpectativas: arrAtual.naoatendeexpectativas, 
            atendeparteexpectativas: arrAtual.atendeparteexpectativas, 
            atendeplenamenteexpectativas: arrAtual.atendeplenamenteexpectativas, 
            superaexpectativas: arrAtual.superaexpectativas,
            criador: arrAtual.criador, 
            criadoremail: arrAtual.criadoremail, 
            datahoracriacao: arrAtual.datahoracriacao, 
            datahoraedicao: arrAtual.datahoraedicao, 
            edicao: arrAtual.edicao, 
            emailedicao: arrAtual.emailedicao, 
        })
    }
    if(tipopagina == 'ciclos'){
        setPopular({ 
            id: arrAtual.id, 
            cod: arrAtual.id,
            descricao: arrAtual.descricao, 
            datainicial: arrAtual.datainicial, 
            datafinal: arrAtual.datafinal, 
            criador: arrAtual.criador, 
            criadoremail: arrAtual.criadoremail, 
            datahoracriacao: arrAtual.datahoracriacao, 
            datahoraedicao: arrAtual.datahoraedicao, 
            edicao: arrAtual.edicao, 
            emailedicao: arrAtual.emailedicao, 
        })
    }
    if(tipopagina == 'coletas'){
        setPopular({ 
            id: arrAtual.id, 
            cod: arrAtual.id,
            ciclo: arrAtual.ciclo,
            descricao: arrAtual.descricao, 
            periodoletivo: arrAtual.periodoletivo,
            campus: arrAtual.campus,
            carreira: arrAtual.carreira,
            curso: arrAtual.curso,
            datainicial: arrAtual.datainicial, 
            datafinal: arrAtual.datafinal, 
            criador: arrAtual.criador, 
            criadoremail: arrAtual.criadoremail, 
            datahoracriacao: arrAtual.datahoracriacao, 
            datahoraedicao: arrAtual.datahoraedicao, 
            edicao: arrAtual.edicao, 
            emailedicao: arrAtual.emailedicao, 
        })
    }
    if(tipopagina == 'plano'){
        setPopular({ 
            id: arrAtual.id, 
            cod: arrAtual.id,
            coleta: arrAtual.coleta,
            competencia: arrAtual.competencia,
            traco: arrAtual.traco,
            combinadisciplina: arrAtual.combinadisciplina,
            permitircombina: arrAtual.permitircombina,
            semestrediciplina: arrAtual.semestrediciplina,
            estatiscadisciplina: arrAtual.estatiscadisciplina,
            criador: arrAtual.criador, 
            criadoremail: arrAtual.criadoremail, 
            datahoracriacao: arrAtual.datahoracriacao, 
            datahoraedicao: arrAtual.datahoraedicao, 
            edicao: arrAtual.edicao, 
            emailedicao: arrAtual.emailedicao, 
        })
    }
}

const alteraCampo = (campo, valor) => {
    setPopular({ ...popular, [campo]: valor });
    // console.log( popular )
};


///////////////////////////////////////////////////////////////////////////////////// DELETA REGISTROS
const [ abreMod, setAbreMod ] = useState( { action:false, id:'', desc:'' } )

const confirmaDel = ( event )=>{
    const id = event.currentTarget.getAttribute('data-id');
    const desc = event.currentTarget.getAttribute('data-desc');
    setAbreMod( { action:true, id: id, desc: desc } )
}
const cancelaDel = ()=>{
    setAbreMod( {...abreMod, action: false} )
}
const actionDel = ()=>{
    const id = abreMod.id;
    handleDelete( id )
    setAbreMod( {...abreMod, action:false} )
}
const handleDelete = ( id ) => {

    fetch(`back/del.php?id=${id}&tipo=${tipopagina}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {

        fetchData(); 
        
        if (response.ok) {
            return response.text();
        }
        throw new Error('Erro na requisição.');

    })
    .then(data => {
        console.log(data);
        setTimeout(function() {
            // location.reload();
        }, 100);

    })
    .catch(error => {
        console.error("Erro na requisição: " + error.message);
    });
};


    return(

        <>
        {/* /////////////// CONTAINER DA TABELA */}
        <div className={"container_main " + classCont +' '+classContvolt}>
                <div className={"container " + dispnone}>
                    <div className="row pb-5 mb-5 ">
                        
                    <HeaderPagina nome={nomeHeader} action={(event) => { event.preventDefault(); dispatch({ type: 'pesquisa' }) }} />

                        {/* /////////////// TABELA */}
                        <TabelaContainer>
                            <TabelaTop itens={ tabelaTopValores } classe={ classeTabelaIn } />

                            {  nwposts.map( registro  =>(
                                <TabelaProdutos 
                                key={ registro.id } 
                                id={ registro.id } 
                                actiondel={  confirmaDel  } 
                                actionedit={ ()=>{ popularEdit( registro ); setOpenedit(true); setCloseedit(false); setTimeout(()=>{ setDnone(true), scrollToTop() }, 500);   } }
                                classe={ classeTabelaIn }  
                                itens={ tabelaProdsValores } 
                                conteudo={ registro }
                                tipo={ tipopagina }
                                />

                            )) }

                        </TabelaContainer>

                        <Paginacao 
                            anterior={PaginacaoData.anterior} 
                            value={ PaginacaoData.num } 
                            proximo={PaginacaoData.proximo} 
                            exibindo={PaginacaoData.exibindo} 
                            actionAnterior={ () => dispatch( { type: 'menos' } )  }
                            actionProximo={ () => dispatch( { type: 'mais' }) }
                            actionUltimo={ () => dispatch( { type: 'ultimo' }) }
                            actionPrimeiro={ () => dispatch( { type: 'primeiro' }) }
                            actionExibindo={PaginacaoData.actionExibindo} 
                            inseririd={PaginacaoData.inseririd} 
                            inserirtext={PaginacaoData.inserirtext} 
                            inserirAction={ () =>{ setOpen( true ), setClose( false ), setTimeout(()=>{ setDnone(true), scrollToTop() }, 500); } }
                        />

                    </div>
                </div>
            </div>

{/* //////////////////////////////////////////////////////////////////////////////// CONTAINER DE INSERIR REGISTRO */}
            <Inserir nome={ nomeHeader } tipo={ tipopagina } action={ () =>{ setOpen( false )} } isopen={open} isclose={close}>
                <form className="container-fluid p-0 m-0" method="POST" onSubmit={handleForm} id='forminserir' data-id={ limite + 1 }>
                    <FormInserir tipo={ tipopagina } valorid={ limite + 1 } />
                    <BotoesIn 
                        retornartext={ voltarsalvar.retornartext } 
                        retornarid={ voltarsalvar.retornarid } 
                        retornaraction={  ()=>{ setDnone(false), setClose(true), setOpen(false), setTimeout(()=>{ scrollToTop() }, 500); }  } 
                        salvartext={ voltarsalvar.salvartext } 
                        salvarid={ limite + 1 } 
                    />
                </form>
            </ Inserir >

{/* ///////////////////////////////////////////////////////////////////////////////// CONTAINER DE EDITAR REGISTRO */}
            <Inserir nome={ nomeHeader } tipo={'Editar ' + nomeHeader } action={ ()=>{ setOpenedit(false) } } isopen={openedit} isclose={closeedit}>
                <form className="container-fluid p-0 m-0" method="POST" onSubmit={handleFormEdit} id='formtraco' data-id={popular.id}>
                    <FormEdit tipo={ tipopagina } objeto={popular} onChange={ (e)=>alteraCampo(e.target.id, e.target.value) } />
                    <BotoesIn 
                        retornartext={ voltarsalvar.retornartext } 
                        retornarid={ voltarsalvar.retornarid } 
                        retornaraction={ ()=>{ setDnone(false), setCloseedit(true), setOpenedit(false), setTimeout(()=>{ scrollToTop() }, 500); } } 
                        salvartext={ 'Editar' } 
                        salvarid={ voltarsalvar.salvarid } 
                    />
                </form>
            </ Inserir >


{/* /////////////////////////////////////////////////////////////////////////////////// MODAL DELETAR REGISTRO */}
            <ModalDel openMod={abreMod.action} desc={abreMod.desc} actionN={ cancelaDel } actionS={ actionDel } /> 

        </>       

    )
}
export default TabelaCompleta