import './css.css'
import Last from '../../assets/Last.svg'
import First from '../../assets/first.svg'

const Paginacao = ({anterior, value, proximo, exibindo, actionAnterior, actionProximo, actionExibindo, inseririd, inserirtext, inserirAction, outraclasse, actionUltimo, actionPrimeiro}) => {

    return(

        <div className='pag_bt_content_aol'>
                <div className="pag_aol">

                    <div className="pag_controls_aol">
                
                        <div className="pag_prim_aol" onClick={actionPrimeiro}> <img src={First} alt="" />  </div>
                        <div className="pag_prev_aol" onClick={actionAnterior}>{anterior}</div>
                
                        <div className="pag_numdiv_aol">
                            <input type="number" className="pag_num_aol" value={value}/>
                        </div>
                
                        <div className="pag_nex_aol" onClick={actionProximo}>{proximo}</div>
                        <div className="pag_ult_aol" onClick={actionUltimo}> <img src={Last} alt="" /> </div>

                    </div>
                
                    <div className="pag_num_pages_aol" onClick={actionExibindo}>{exibindo}</div>
                </div>


                <div className="insert_aol">
                    <a onClick={inserirAction} className={ "btn_inserir_aol " + outraclasse } id={inseririd}> {inserirtext} </a>
                </div>
        </div>

    )
}
export default Paginacao