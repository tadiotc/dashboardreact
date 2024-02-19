import Perfilimg from '../../assets/perf.svg'

const Perfil = () => {
    return(
        <div className="user_aol">
            <div className="userid_aol">Olá, Tádio Caramaschi <br/> Seja bem vindo!</div>

            <div className="userimg_aol">

                <img src={Perfilimg} alt="" className='userimgsvg_aol' />


            </div>
        </div>
    )
}
export default Perfil