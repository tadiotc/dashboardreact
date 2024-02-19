import './css.css'

const FormCompetencia = ( {objeto, onChange} ) => (
  <>

    <input required="" type="text" defaultValue={objeto.id} id="cod" name="cod" hidden/>
    <input required="" type="text" defaultValue={'competencias'} id="tabela" name="tabela" hidden/>
    <div className="col-12 col-md-6">
      <label>Código:</label>
      <input type="text" value={ objeto.codigo } onChange={ onChange }  id="codigo" name="codigo" />
    </div>
    
    <div className="col-12 col-md-6">
        <label>Descrição:</label>
        <input type="text" value={ objeto.descricao } onChange={ onChange }  id="descricao" name="descricao"/>
    </div>
    
    <div className="col-12 col-md-6">
        <label>Learning Goal (LG) *:</label>
        <textarea rows="8" onChange={ onChange }  value={ objeto.goal }  id="goal" name="goal"></textarea>
    </div>
    <div className="col-12 col-md-6">
        <label>Learning Objective (LO) *:</label>
        <textarea rows="8" onChange={ onChange }  id="objective"   value={ objeto.objective } name="objective"></textarea>
    </div>

    <div className="col-12 col-md-6">
        <input type="text" defaultValue={objeto.criador || "" } id="criador" name="criador" hidden/>
        <input type="text" defaultValue={objeto.criadoremail || "" } id="criadoremail" name="criadoremail" hidden/>
        <input type="text" defaultValue={objeto.datahoracriacao || "" } id="datahoracriacao" name="datahoracriacao" hidden/>
        <input type="text" defaultValue={objeto.datahoraedicao || "" } id="datahoraedicao" name="datahoraedicao" hidden/>
        <input type="text" defaultValue={objeto.edicao || "" } id="edicao" name="edicao" hidden/>
        <input type="text" defaultValue={objeto.emailedicao || "" } id="emailedicao" name="emailedicao" hidden/>
    </div>

    <div className="boxregistros mt-3">
      <div className="dadosinclusao">
        <label>Dados Inclusão:</label>
        <label>  - {objeto.datahoracriacao}</label>
      </div>
      <div className="dadosedicao">
          <label>Dados Edição:</label>
          <label>  - {objeto.datahoraedicao} </label>
      </div>
    </div>

  </>
);
const FormTraco = ( {objeto, onChange} ) => (
  <>

    <div className="col-12 col-md-6">
      <label>Código:</label>
      <input required="" type="text" defaultValue={objeto.id} id="cod" name="cod" hidden/>
      <input type="text" id="tabela" name="tabela" defaultValue={'tracos'} hidden />
      <input type="text" value={objeto.codigo} onChange={ onChange } id="codigo" name="codigo"/>

    </div>
    
    <div className="col-12 col-md-6">
        <label>Descrição:</label>
        <input type="text" value={objeto.descricao} onChange={ onChange } id="descricao" name="descricao"/>
        
    </div>

      <div className="col-12">
          <label htmlFor="competencia">Competência*:</label>
          <select className="select" id="competencia" name="competencia" onChange={ onChange }>
              <option value={objeto.competencia} > {objeto.competencia} </option>
              <option value="Competencia 01"> Competencia 01 </option>
              <option value="Competencia 02"> Competencia 02 </option>
              <option value="Competencia 03"> Competencia 03 </option>
              <option value="Competencia 04"> Competencia 04 </option>
              <option value="Competencia 05"> Competencia 05 </option>
              <option value="Competencia 06"> Competencia 06 </option>
              <option value="Competencia 07"> Competencia 07 </option>
              <option value="Competencia 08"> Competencia 08 </option>
          </select>
      </div>
    
    <div className="col-12 col-md-6">
        <label>Informativo para Não Atende as Expectativas (1) *:</label>
        <textarea rows="8" id="naoatendeexpectativas" name="naoatendeexpectativas" onChange={ onChange } value={objeto.naoatendeexpectativas}>  </textarea>
    </div>
    <div className="col-12 col-md-6">
        <label>Informativo para Atende Parte das Expectativas (2) *:</label>
        <textarea rows="8" id="atendeparteexpectativas" name="atendeparteexpectativas" onChange={ onChange } value={objeto.atendeparteexpectativas}>  </textarea>
    </div>

    <div className="col-12 col-md-6">
        <label>Informativo para Atende Plenamente as Expectativas (3) *:</label>
        <textarea rows="8" id="atendeplenamenteexpectativas" name="atendeplenamenteexpectativas" onChange={ onChange } value={objeto.atendeplenamenteexpectativas}>  </textarea>
    </div>

    <div className="col-12 col-md-6">
        <label>Informativo para Supera as Expectativas (4) *:</label>
        <textarea rows="8" id="superaexpectativas" name="superaexpectativas" onChange={ onChange } value={objeto.superaexpectativas}>  </textarea>
    </div>

    <div className="col-12 col-md-6">
          <input type="text" defaultValue={objeto.criador || "" } id="criador" name="criador" hidden/>
          <input type="text" defaultValue={objeto.criadoremail || "" } id="criadoremail" name="criadoremail" hidden/>
          <input type="text" defaultValue={objeto.datahoracriacao || "" } id="datahoracriacao" name="datahoracriacao" hidden/>
          <input type="text" defaultValue={objeto.datahoraedicao || "" } id="datahoraedicao" name="datahoraedicao" hidden/>
          <input type="text" defaultValue={objeto.edicao || "" } id="edicao" name="edicao" hidden/>
          <input type="text" defaultValue={objeto.emailedicao || "" } id="emailedicao" name="emailedicao" hidden/>
        </div>

    <div className="boxregistros mt-3">
          <div className="dadosinclusao">
              <label>Dados Inclusão:</label>
              <label>  - {objeto.datahoracriacao}</label>
          </div>
          <div className="dadosedicao">
              <label>Dados Edição:</label>
              <label>  - {objeto.datahoraedicao} </label>
          </div>
      </div>

  </>
);
const FormCiclos = ( {objeto, onChange} ) => (
  <>
  <input required="" type="text" defaultValue={objeto.id} id="cod" name="cod" hidden/>
  <input required="" type="text" defaultValue={'ciclos'} id="tabela" name="tabela" hidden/>  

      <div className="col-12">
          <label>Descrição*:</label>
          <input type="text" value={objeto.descricao} onChange={ onChange } id="descricao" name="descricao"/>
      </div>

      <div className="col-12 col-md-6">
        <label>Data Inicial *:</label>
        <input type="date" value={objeto.datainicial} onChange={ onChange } id="datainicial" name="datainicial"/>
      </div>

      <div className="col-12 col-md-6">
        <label>Data Final *:</label>
        <input type="date" value={objeto.datafinal} onChange={ onChange } id="datafinal" name="datafinal"/>
      </div>

      <div className="col-12 col-md-6">
        <input type="text" defaultValue={objeto.criador || "" } id="criador" name="criador" hidden/>
        <input type="text" defaultValue={objeto.criadoremail || "" } id="criadoremail" name="criadoremail" hidden/>
        <input type="text" defaultValue={objeto.datahoracriacao || "" } id="datahoracriacao" name="datahoracriacao" hidden/>
        <input type="text" defaultValue={objeto.datahoraedicao || "" } id="datahoraedicao" name="datahoraedicao" hidden/>
        <input type="text" defaultValue={objeto.edicao || "" } id="edicao" name="edicao" hidden/>
        <input type="text" defaultValue={objeto.emailedicao || "" } id="emailedicao" name="emailedicao" hidden/>
      </div>

      <div className="boxregistros mt-3">
        <div className="dadosinclusao">
            <label>Dados Inclusão:</label>
            <label>  - {objeto.datahoracriacao}</label>
        </div>
        <div className="dadosedicao">
            <label>Dados Edição:</label>
            <label>  - {objeto.datahoraedicao} </label>
        </div>
    </div>
    </>
);
const FormColetas = ( {objeto, onChange} ) => (
  <>
    <input required="" type="text" defaultValue={objeto.id} id="cod" name="cod" hidden/>
    <input required="" type="text" defaultValue={'coletas'} id="tabela" name="tabela" hidden/>  

      <div className="col-12 col-md-6">
          <label>Ciclo*:</label>
          <input type="text" id="ciclo" name="ciclo" value={objeto.ciclo} onChange={ onChange }/>
      </div>

      <div className="col-6 col-md-3">
          <label>Descricao*:</label>
          <input type="text" id="descricao" name="descricao"  value={objeto.descricao} onChange={ onChange }/>
      </div>

      <div className="col-6 col-md-3">
        <label>Periodo Letivo *:</label>
        <input type="text" id="periodoletivo" name="periodoletivo"  value={objeto.periodoletivo} onChange={ onChange }/>
      </div>

      <div className="col-6 col-md-6">
        <label>Campus *:</label>
        <input type="text" id="campus" name="campus"  value={objeto.campus} onChange={ onChange }/>
      </div>

      <div className="col-6 col-md-6">
        <label>Carreira *:</label>
        <input type="text" id="carreira" name="carreira"  value={objeto.carreira} onChange={ onChange }/>
      </div>

      <div className="col-6 col-md-6">
        <label>Curso *:</label>
        <input type="text" id="curso" name="curso"  value={objeto.curso} onChange={ onChange }/>
      </div>

      <div className="col-6 col-md-3">
        <label>Data inicial *:</label>
        <input type="date" id="datainicial" name="datainicial"  value={objeto.datainicial} onChange={ onChange }/>
      </div>

      <div className="col-6 col-md-3">
        <label>Data final *:</label>
        <input type="date" id="datafinal" name="datafinal"  value={objeto.datafinal} onChange={ onChange }/>
      </div>

      <div className="col-12 col-md-6">
        <input type="text" defaultValue={objeto.criador || "" } id="criador" name="criador" hidden/>
        <input type="text" defaultValue={objeto.criadoremail || "" } id="criadoremail" name="criadoremail" hidden/>
        <input type="text" defaultValue={objeto.datahoracriacao || "" } id="datahoracriacao" name="datahoracriacao" hidden/>
        <input type="text" defaultValue={objeto.datahoraedicao || "" } id="datahoraedicao" name="datahoraedicao" hidden/>
        <input type="text" defaultValue={objeto.edicao || "" } id="edicao" name="edicao" hidden/>
        <input type="text" defaultValue={objeto.emailedicao || "" } id="emailedicao" name="emailedicao" hidden/>
      </div>

      <div className="boxregistros mt-3">
        <div className="dadosinclusao">
            <label>Dados Inclusão:</label>
            <label>  - {objeto.datahoracriacao}</label>
        </div>
        <div className="dadosedicao">
            <label>Dados Edição:</label>
            <label>  - {objeto.datahoraedicao} </label>
        </div>
    </div>
    </>
);
const FormUsuario = ( {objeto, onChange} ) => (
    <>
    <input required="" type="text" defaultValue={objeto.id} id="cod" name="cod" hidden/>
    <input required="" type="text" defaultValue={'usuarios'} id="tabela" name="tabela" hidden/>  

    <div className="col-12">
            <label>Nome*:</label>
            <input type="text" value={objeto.nome} onChange={ onChange } id="nome" name="nome"/>
        </div>
        <div className="col-12 col-md-6">
            <label>E-mail:</label>
            <input type="text" value={objeto.email} onChange={ onChange } id="email" name="email"/>
        </div>
    

        <div className="col-12 col-md-6">
            <label htmlFor="tipo">Tipo:</label>
            <select class="select" id="tipo" name="tipo" onChange={ onChange }>
                <option value={objeto.tipo} > {objeto.tipo} </option>
                <option value="administrador">Administrador</option>
                <option value="usuario dos Sistema">Usuario do Sistema</option>
            </select>
        </div>

        <div className="col-12 col-md-6">
          <input type="text" defaultValue={objeto.criador || "" } id="criador" name="criador" hidden/>
          <input type="text" defaultValue={objeto.criadoremail || "" } id="criadoremail" name="criadoremail" hidden/>
          <input type="text" defaultValue={objeto.datahoracriacao || "" } id="datahoracriacao" name="datahoracriacao" hidden/>
          <input type="text" defaultValue={objeto.datahoraedicao || "" } id="datahoraedicao" name="datahoraedicao" hidden/>
          <input type="text" defaultValue={objeto.edicao || "" } id="edicao" name="edicao" hidden/>
          <input type="text" defaultValue={objeto.emailedicao || "" } id="emailedicao" name="emailedicao" hidden/>
        </div>

        <div className="boxregistros mt-3">
          <div className="dadosinclusao">
              <label>Dados Inclusão:</label>
              <label>  - {objeto.datahoracriacao}</label>
          </div>
          <div className="dadosedicao">
              <label>Dados Edição:</label>
              <label>  - {objeto.datahoraedicao} </label>
          </div>
      </div>
      </>

);
const FormPlano = ( {objeto, onChange} ) => (
  <>
  <input required="" type="text" defaultValue={objeto.id} id="cod" name="cod" hidden/>
  <input required="" type="text" defaultValue={'plano'} id="tabela" name="tabela" hidden/>  

      <div className="col-12">
          <label>Coleta*:</label>
          <input type="text" id="coleta" name="coleta" value={objeto.coleta} onChange={ onChange }/>
      </div>

      <div className="col-12 col-md-6">
        <label>Competência *:</label>
        <input type="text" id="competencia" name="competencia" value={objeto.competencia} onChange={ onChange }/>
      </div>

      <div className="col-12 col-md-6">
        <label>Traço *:</label>
        <input type="text" id="traco" name="traco" value={objeto.traco} onChange={ onChange }/>
      </div>


      <div className="col-12 col-md-6">
          <label htmlFor="combinadisciplina">Permitir Combinar Disciplina - Professor 1 com:</label>
          <select className="select" id="combinadisciplina" name="combinadisciplina" onChange={ onChange }>
              <option value={objeto.combinadisciplina} > {objeto.combinadisciplina} </option>
              <option value="1º SEMESTRE"> 1ª SEMESTRE </option>
              <option value="2º SEMESTRE"> 2ª SEMESTRE </option>
              <option value="3º SEMESTRE"> 3ª SEMESTRE </option>
              <option value="4º SEMESTRE"> 4ª SEMESTRE </option>
              <option value="5º SEMESTRE"> 5ª SEMESTRE </option>
              <option value="6º SEMESTRE"> 6ª SEMESTRE </option>
              <option value="7º SEMESTRE"> 7ª SEMESTRE </option>
              <option value="8º SEMESTRE"> 8ª SEMESTRE </option>
              <option value="9º SEMESTRE"> 9ª SEMESTRE </option>
              <option value="10º SEMESTRE"> 10ª SEMESTRE </option>
          </select>
      </div>

      <div className="col-12 col-md-6">
        <label>Permitir combinações com disciplinas de outros periodos letivos? *:</label>
        <input type="text" id="permitircombina" name="permitircombina" value={objeto.permitircombina} onChange={ onChange }/>
      </div>

      <div className="col-12 col-md-6">
          <label htmlFor="semestrediciplina">Semestre da Disciplina - Professor 1:</label>
          <select className="select" id="semestrediciplina" name="semestrediciplina" onChange={ onChange }>
              <option value={objeto.semestrediciplina} > {objeto.semestrediciplina} </option>
              <option value="DISCIPLINA"> DISCIPLINA </option>
              <option value="ORIENTAÇÃO TCC"> ORIENTAÇÃO TCC </option>
              <option value="BANCA"> BANCA </option>
          </select>
      </div>

      <div className="col-12 col-md-6">
        <input type="text" defaultValue={objeto.criador || "" } id="criador" name="criador" hidden/>
        <input type="text" defaultValue={objeto.criadoremail || "" } id="criadoremail" name="criadoremail" hidden/>
        <input type="text" defaultValue={objeto.datahoracriacao || "" } id="datahoracriacao" name="datahoracriacao" hidden/>
        <input type="text" defaultValue={objeto.datahoraedicao || "" } id="datahoraedicao" name="datahoraedicao" hidden/>
        <input type="text" defaultValue={objeto.edicao || "" } id="edicao" name="edicao" hidden/>
        <input type="text" defaultValue={objeto.emailedicao || "" } id="emailedicao" name="emailedicao" hidden/>
      </div>

      <div className="boxregistros mt-3">
        <div className="dadosinclusao">
            <label>Dados Inclusão:</label>
            <label>  - {objeto.datahoracriacao}</label>
        </div>
        <div className="dadosedicao">
            <label>Dados Edição:</label>
            <label>  - {objeto.datahoraedicao} </label>
        </div>
    </div>
    </>
);

const FormEdit = ({ tipo, objeto, onChange }) => {
  let formulario = null;

  if (tipo === 'competencias') {
    formulario = <FormCompetencia objeto={objeto} onChange={ onChange } />;
  } 
  else if (tipo === 'tracos') {
    formulario = <FormTraco objeto={objeto} onChange={ onChange } />;
  } 
  else if (tipo === 'ciclos') {
    formulario = <FormCiclos objeto={objeto} onChange={ onChange } />;
  }
  else if (tipo === 'coletas') {
    formulario = <FormColetas objeto={objeto} onChange={ onChange } />;
  }
  else if (tipo === 'usuarios') {
    formulario = <FormUsuario objeto={objeto} onChange={ onChange } />;
  } 
  else if (tipo === 'plano') {
    formulario = <FormPlano objeto={objeto} onChange={ onChange } />;
  }

  return  <div className="row pt-5">{formulario}</div>;
};

export default FormEdit;
