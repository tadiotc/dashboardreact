import TabelaCompleta from "../../components/TabelaCompleta"

const Inicio = () => {

///////////////// PEGA DADOS obs o tipo pagina deve ser o mesmo nome do arquivo json
const tabela = {
    nomeHeader : 'Coletas',
    tabelaTopValores : [ 'Ciclo','Descrição', 'Data Inicial', 'Data final', '' ],
    tabelaProdsValores : [ 'Ciclo','Descrição', 'Data Inicial', 'Data final' ],
    classeTabelaIn : 'quatrocasas2',
    tipopagina:'coletas',
}
    return(
        <div className="containergeral_conteudo anima">

                <TabelaCompleta
                    nomeHeader={ tabela.nomeHeader }
                    tabelaTopValores = { tabela.tabelaTopValores }
                    tabelaProdsValores = { tabela.tabelaProdsValores }
                    classeTabelaIn = { tabela.classeTabelaIn }
                    registros={ tabela.registros }
                    tipopagina={tabela.tipopagina}

                />

        </div>
              
    )
}
export default Inicio