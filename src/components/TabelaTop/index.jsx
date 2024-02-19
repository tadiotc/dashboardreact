const TabelaTop = ({ itens, classe }) => {
      

  const registros = [];

  for (let i = 0; i < itens.length; i++) {
    registros.push(
      <div className="tabheader_int_aol" key={i} data-i={i}>
        {itens[i]}
      </div>
    );
  }

  return <div className={"tab_header_aol " + classe}>{registros}</div>;
};

export default TabelaTop;