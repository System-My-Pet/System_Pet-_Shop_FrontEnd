import { Link } from 'react-router-dom'

import logoVerticalWhite from '../../assets/logoVerticalWhite.svg'
import logoVerticalBlack from '../../assets/logoVerticalBlack.svg'

import './styles.css'

export default function Recover_Password() {

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
                <input className="inputLogin" type="text" placeholder="Nova Senha" name="senha" id="senha" required></input>
                
                <Link className="confirmLogin" to="/">Confirmar</Link>
            </div>
        </div>
    </div>
  )
}