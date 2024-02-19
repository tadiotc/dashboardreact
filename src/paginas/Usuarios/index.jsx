

import TabelaCompleta from "../../components/TabelaCompleta"


const Inicio = () => {

///////////////// PEGA DADOS obs o tipo pagina deve ser o mesmo nome do arquivo json
 
const tabela = {
    nomeHeader : 'Usuários',
    tabelaTopValores : [ 'Nome', 'E-mail', 'Tipo', '' ],
    tabelaProdsValores : [ 'Nome', 'E-mail', 'Tipo' ],
    classeTabelaIn : 'trescasas',
    tipopagina:'usuarios',
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