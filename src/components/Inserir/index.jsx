import  "./css.css";

const Inserir = ({nome, tipo, action, isopen, isclose, children }) => {

    let classMod = '';
    let classModclose = '';

    if( isopen ){
        classMod = 'entraedit';
    }else{
        classMod = '';
    }  
    if( isclose ){
        classModclose = 'saiedit';
    }else{
        classModclose = '';
    }  

    return(
        <section className={ "pagina_in " + classMod + ' ' + classModclose}>
            <div className="container pading_mob">
                <div className="row pb-5 mb-5 pt-5">

                        <div className="titulo_pag_aol titulo_pag_in pt-2">
                            <div className='d-flex'>
                                <h2 id="h1_titulo_pag_aol">
                                    <a onClick={ action } className="a_volta"> { nome } </a>
                                </h2>
                                <span style={{ marginLeft:'0.5rem', marginRight: '0.5rem' }}> {' > '} </span>

                                <h2 className="secao_pag_aol"> { tipo } </h2>

                               
                            </div>
                        </div>

                        {children}


                </div>
            </div>
        </section>
    )
}
export default Inserir