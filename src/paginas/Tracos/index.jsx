import TabelaCompleta from "../../components/TabelaCompleta"

const Tracos = () => {
///////////////// PEGA DADOS obs o tipo pagina deve ser o mesmo nome do arquivo json
const tabela = {
    nomeHeader : 'Traços',
    tabelaTopValores : [ 'Código', 'Descrição', 'Competências', '' ],
    tabelaProdsValores : [ 'Código', 'Descrição', 'Competências' ],
    classeTabelaIn : 'trescasas',
    tipopagina:'tracos',
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
export default Tracos