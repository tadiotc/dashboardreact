
const FormCompetencia = ( {valorid} ) => (
  <>

    <div className="col-12 col-md-6">
      <label>Código:</label>
      <input type="text" id="tabela" name="tabela" defaultValue={'competencias'} hidden />
      <input type="text" id="codigo" name="codigo"/>

    </div>
    
    <div className="col-12 col-md-6">
        <label>Descrição:</label>
        <input type="text" id="descricao" name="descricao"/>
        
    </div>
    
    <div className="col-12 col-md-6">
        <label>Learning Goal (LG) *:</label>
        <textarea rows="8" id="info1" name="goal"></textarea>
    </div>
    <div className="col-12 col-md-6">
        <label>Learning Objective (LO) *:</label>
        <textarea rows="8" id="info2" name="objective"></textarea>
    </div>

    <div className="col-12 col-md-6">
        <input type="text" id="criador" name="criador" hidden/>
        <input type="text" id="criadoremail" name="criadoremail" hidden/>
        <input type="text" id="datahoracriacao" name="datahoracriacao" hidden/>
    </div>

  </>
);
const FormTraco = ( {valorid} ) => (
  <>

    <div className="col-12 col-md-6">
      <label>Código:</label>
      <input type="text" id="tabela" name="tabela" defaultValue={'tracos'} hidden />
      <input type="text" id="codigo" name="codigo"/>

    </div>
    
    <div className="col-12 col-md-6">
        <label>Descrição:</label>
        <input type="text" id="descricao" name="descricao"/>
        
    </div>

      <div className="col-12">
          <label htmlFor="competencia">Competência*:</label>
          <select className="select" id="competencia" name="competencia">
              <option> Selecione uma Competencia </option>
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
        <textarea rows="8" id="naoatendeexpectativas" name="naoatendeexpectativas"></textarea>
    </div>
    <div className="col-12 col-md-6">
        <label>Informativo para Atende Parte das Expectativas (2) *:</label>
        <textarea rows="8" id="atendeparteexpectativas" name="atendeparteexpectativas"></textarea>
    </div>

    <div className="col-12 col-md-6">
        <label>Informativo para Atende Plenamente as Expectativas (3) *:</label>
        <textarea rows="8" id="atendeplenamenteexpectativas" name="atendeplenamenteexpectativas"></textarea>
    </div>

    <div className="col-12 col-md-6">
        <label>Informativo para Supera as Expectativas (4) *:</label>
        <textarea rows="8" id="superaexpectativas" name="superaexpectativas"></textarea>
    </div>

    <div className="col-12 col-md-6">
        <input type="text" id="criador" name="criador" hidden/>
        <input type="text" id="criadoremail" name="criadoremail" hidden/>
        <input type="text" id="datahoracriacao" name="datahoracriacao" hidden/>
    </div>

  </>
);
const FormCiclos = ( {valorid} ) => (
  <>
    <input type="text" id="tabela" name="tabela" defaultValue={'ciclos'} hidden/>  

      <div className="col-12">
          <label>Descrição*:</label>
          <input type="text" id="descricao" name="descricao"/>
      </div>

      <div className="col-12 col-md-6">
        <label>Data Inicial *:</label>
        <input type="date" id="datainicial" name="datainicial"/>
      </div>

      <div className="col-12 col-md-6">
        <label>Data Final *:</label>
        <input type="date" id="datafinal" name="datafinal"/>
      </div>

      <div className="col-12 col-md-6">
            <input type="text" id="criador" name="criador" hidden/>
            <input type="text" id="criadoremail" name="criadoremail" hidden/>
            <input type="text" id="datahoracriacao" name="datahoracriacao" hidden/>
        </div>
    </>

);
const FormColetas = ( {valorid} ) => (
  <>
    <input type="text" id="tabela" name="tabela" defaultValue={'coletas'} hidden/>  

      <div className="col-12 col-md-6">
          <label>Ciclo*:</label>
          <input type="text" id="ciclo" name="ciclo"/>
      </div>
      <div className="col-6 col-md-3">
          <label>Descricao*:</label>
          <input type="text" id="descricao" name="descricao"/>
      </div>

      <div className="col-6 col-md-3">
        <label>Periodo Letivo *:</label>
        <input type="text" id="periodoletivo" name="periodoletivo"/>
      </div>

      <div className="col-6 col-md-6">
        <label>Campus *:</label>
        <input type="text" id="campus" name="campus"/>
      </div>

      <div className="col-6 col-md-6">
        <label>Carreira *:</label>
        <input type="text" id="carreira" name="carreira"/>
      </div>

      <div className="col-6 col-md-6">
        <label>Curso *:</label>
        <input type="text" id="curso" name="curso"/>
      </div>

      <div className="col-6 col-md-3">
        <label>Data inicial *:</label>
        <input type="date" id="datainicial" name="datainicial"/>
      </div>

      <div className="col-6 col-md-3">
        <label>Data final *:</label>
        <input type="date" id="datafinal" name="datafinal"/>
      </div>

      <div className="col-12 col-md-6">
            <input type="text" id="criador" name="criador" hidden/>
            <input type="text" id="criadoremail" name="criadoremail" hidden/>
            <input type="text" id="datahoracriacao" name="datahoracriacao" hidden/>
        </div>
    </>

);
const FormUsuario = ( {valorid} ) => (
        <>
        <div className="col-12">
            <label>Nome*:</label>
            <input type="text" id="nome" name="nome"/>
            <input type="text" id="tabela" name="tabela" defaultValue={'usuarios'} hidden />
            
        </div>
        <div className="col-12 col-md-6">
            <label>E-mail:</label>
            <input type="text" id="email" name="email"/>
        </div>
    

        <div className="col-12 col-md-6">
            <label htmlFor="competencia">Tipo:</label>
            <select className="select" id="tipo" name="tipo">
                <option> Selecione um tipo </option>
                <option value="Administrador">Administrador</option>
                <option value="Usuario do Sistema">Usuario do Sistema</option>
            </select>
        </div>

        <div className="col-12 col-md-6">
            <input type="text" id="criador" name="criador" hidden/>
            <input type="text" id="criadoremail" name="criadoremail" hidden/>
            <input type="text" id="datahoracriacao" name="datahoracriacao" hidden/>
        </div>
        </>

);
const FormPlano = ( {valorid} ) => (
  <>
    <input type="text" id="tabela" name="tabela" defaultValue={'plano'} hidden /> 

      <div className="col-12">
          <label>Coleta*:</label>
          <input type="text" id="coleta" name="coleta"/>
      </div>

      <div className="col-12 col-md-6">
        <label>Competência *:</label>
        <input type="text" id="competencia" name="competencia"/>
      </div>

      <div className="col-12 col-md-6">
        <label>Traço *:</label>
        <input type="text" id="traco" name="traco"/>
      </div>


      <div className="col-12 col-md-6">
          <label htmlFor="combinadisciplina">Permitir Combinar Disciplina - Professor 1 com:</label>
          <select className="select" id="combinadisciplina" name="combinadisciplina">
              <option> Selecione um semestre </option>
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
        <input type="text" id="permitircombina" name="permitircombina"/>
      </div>

      <div className="col-12 col-md-6">
          <label htmlFor="semestrediciplina">Semestre da Disciplina - Professor 1:</label>
          <select className="select" id="semestrediciplina" name="semestrediciplina">
              <option> Selecione um semestre </option>
              <option value="DISCIPLINA"> DISCIPLINA </option>
              <option value="ORIENTAÇÃO TCC"> ORIENTAÇÃO TCC </option>
              <option value="BANCA"> BANCA </option>
          </select>
      </div>

      <div className="col-12 col-md-6">
            <input type="text" id="criador" name="criador" hidden/>
            <input type="text" id="criadoremail" name="criadoremail" hidden/>
            <input type="text" id="datahoracriacao" name="datahoracriacao" hidden/>
        </div>
    </>

);

const FormInserir = ({ tipo, valorid }) => {
  let formulario = null;

  if (tipo === 'competencias') {
    formulario = <FormCompetencia valorid={valorid} />;
  } 
  else if (tipo === 'tracos') {
    formulario = <FormTraco  valorid={valorid} />;
  } 
  else if (tipo === 'ciclos') {
    formulario = <FormCiclos  valorid={valorid} />;
  }
  else if (tipo === 'coletas') {
    formulario = <FormColetas  valorid={valorid} />;
  }
  else if (tipo === 'usuarios') {
    formulario = <FormUsuario  valorid={valorid} />;
  } 
  else if (tipo === 'plano') {
    formulario = <FormPlano  valorid={valorid} />;
  }

  return  <div className="row pt-5">{formulario}</div>;
};

export default FormInserir;
