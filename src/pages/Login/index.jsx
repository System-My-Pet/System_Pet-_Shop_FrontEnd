import { Link } from 'react-router-dom'

import logoVerticalWhite from '../../assets/logoVerticalWhite.svg'
import logoVerticalBlack from '../../assets/logoVerticalBlack.svg'

import './styles.css'

export default function Login() {

  return (
    <div classNameName="body">
      <div className="split left">
        <div className="centered">
            <div className="box_left">
                <img src={logoVerticalWhite} alt="logoVerticalWhite" />
            </div>
        </div>
    </div>

        <div className="split right">
            <div className="centered">
                <img className="logoLoginRight" src={logoVerticalBlack} alt="logoVerticalBlack" />
                <input className="inputLogin" type="text" placeholder="E-mail" name="email" id="email" required></input>
                <input className="inputLogin" type="text" placeholder="Senha" name="senha" id="senha" required></input>
                
                <div className="rememberUser">
                    <input className="rememberBox" type="checkbox" id="remember" name="remember" value="remember"></input>
                    Lembrar de mim
                </div>

                <Link className="confirmLogin" to="/">Entrar</Link>

                <div className="recoverPassword">
                    <Link className="goRecover" to="/Recover_password">Esqueceu sua senha?</Link>
                </div>
            </div>
        </div>
    </div>
  )
}