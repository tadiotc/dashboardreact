import "./css.css";

const ModalDel = ( { openMod, desc, actionN, actionS } ) => {

    let classMod = '';
    if( openMod ){
        classMod = 'abre_mod'
    }else{
        classMod = ''
    }
    
    return(

        <div className={"modaldel_container " + classMod}>
            <div className="modaldel_in abre_modin">

                <h4>Tem certeza que deseja excluir o registro <br /> <span>{desc}</span> ?</h4>

                <div className="modal_botoes">
                    <button className="modalnao" onClick={actionN}>cancelar</button>
                    <button className="modalok" onClick={actionS}>deletar</button>
                </div>

            </div>
        </div>
    )
}
export default ModalDel



