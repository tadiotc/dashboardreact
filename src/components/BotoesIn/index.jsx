import './css.css'


const BotoesIn = ({ retornartext, retornarid, retornaraction, salvartext, salvarid  }) => {

    return(

        <div className='pag_bt_in_aol mt-4'>

                <div className="insert_aol">
                    <a onClick={retornaraction} className="bts_retorna" id={retornarid}> {retornartext} </a>
                </div>

                <div className="insert_aol" style={{marginLeft:'1rem'}}>
                    <input className="bts_retorna" type="submit" value={salvartext} id={salvarid} />
                </div>

        </div>

    )
}
export default BotoesIn