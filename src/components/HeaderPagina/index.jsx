import './css.css'
import Lupa from '../../assets/lupa.svg'


const HeaderPagina = ({ nome, extraclass, action }) => {
    return (
        <div className="titulo_pag_aol">
            <h2 id="h1_titulo_pag_aol">{nome}</h2>
            <div className={"busca_aol " + extraclass}>
                <p>BUSCA POR PALAVRA CHAVE</p>
                <div className="div_busc_aol">
                    <input type="text" name="" id="busc_inp_aol" />
                    <a href="/" className="btn_busca_aol" onClick={action}>
                        <img src={Lupa} alt="" className="lup_ico_aol" />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default HeaderPagina;
