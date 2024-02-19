import Pencil from '../../assets/pencil.svg'
import Trash from '../../assets/trash.svg'

const TabelaProdutos = ( { conteudo, itens, actiondel, actionedit, id, classe, tipo } ) => {


    const arrayDeValores = Object.values(conteudo);
    const registros = [];
    let descricaoDel = '';

    if( tipo == 'competencias'){

      descricaoDel = conteudo.descricao;

      registros.push(
        <>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.codigo}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.descricao}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.goal}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.objective}
        </div>
        </>

      );

    } 
    else if ( tipo == 'coletas'){

      descricaoDel = conteudo.descricao;

      registros.push(
        <>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.ciclo}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.descricao}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.datainicial}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.datafinal}
        </div>
        </>

      );

    } 
    else if ( tipo == 'plano'){

      descricaoDel = conteudo.descricao;

      registros.push(
        <>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.coleta}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.competencia}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.traco}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.permitircombina}
        </div>
        </>

      );

    } 
    else if ( tipo == 'usuarios') {

      descricaoDel = conteudo.nome;

      registros.push(
        <>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.nome}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.email}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.tipo}
        </div>
        </>
      );
      
    } 
    else if ( tipo == 'tracos') {

      descricaoDel = conteudo.codigo;

      registros.push(
        <>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.codigo}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.descricao}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.competencia}
        </div>
        </>
      );
      
    } 
    else if ( tipo == 'ciclos') {

      descricaoDel = conteudo.codigo;

      registros.push(
        <>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.descricao}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.datainicial}
        </div>
        <div className="tab_row_int_aol" key={conteudo.id} data-i={conteudo.id}>
          {conteudo.datafinal}
        </div>
        </>
      );
      
    } 
    else {

      for (let i = 0; i < itens.length; i++) {
        registros.push(
          <div className="tab_row_int_aol" key={i} data-i={i}>
            {arrayDeValores[i]}
          </div>
        );
      } 

    }
  



    
    return(
            <div className={"tab_row_aol "+classe}>

                {registros}

                <div className="tab_row_int_aol">
                    <a className="pencil_ico_aol" data-id={ conteudo.id } onClick={ actionedit }>
                        <img src={Pencil} alt=""/>
                    </a>
                    <a className="trash_ico_aol" data-id={ conteudo.id } data-desc={ descricaoDel } onClick={ actiondel }>
                        <img src={Trash} alt=""/>
                    </a>
                </div>
            </div>
    )
}
export default TabelaProdutos
