import { Link } from "react-router-dom"

import logoVerticalWhite from '../../assets/logoVerticalWhite.svg'
import logoVerticalBlack from '../../assets/logoVerticalBlack.svg'

import "./styles.css";

export default function Login() {

  return (
    <div className="login">
      <div className="box-left">
        <img src={logoVerticalWhite} alt="Logoo" />
      </div>
      <div className="box-right">
        <img src={logoVerticalBlack} alt="Logoo" />
        <div className="form">
          <input className="form-text" placeholder="Gmail" type="text" />
          <input className="form-text" placeholder="Senha" type="text" />
          <div>
            <input type="checkbox" />
            <span>Lembrar de mim</span>
          </div>          
        </div>
        <button>Entrar</button>
        <Link to="/">Esqueceu a senha?</Link>
      </div>
    </div>
  )
}