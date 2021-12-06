import { Link } from 'react-router-dom'

import Header from '../../components/Header';
import './styles.css'


export default function Register() {
  return (
    <div className="register"> 
      <Header />
      <div className="content">
        <div className="homeButton">
          <Link className="goHome" to="/">&lt; Voltar</Link>
        </div>
        <h2>Animal e Leito</h2>
        <div className="registerBed">
          <form>
            <input type="text" placeholder="Especie" name="specie" id="specie" required></input>
            <input type="text" placeholder="Status" name="status" id="status" required></input><br />
            <input type="text" placeholder="Número do Leito" name="numberBed" id="numberBed" required></input>
          </form>
        </div>    
        <hr className="divisor" />
        <h2>Dono</h2>
        <div className="registerBed">    
          
            
          <form>
            <input type="text" placeholder="Nome" name="name" id="name" required></input>
            <input type="text" placeholder="CPF" name="cpfNumber" id="cpfNumber" className="cpf" required></input>
            <button type="submit" className="confirmCPF">Verificar</button><br />
            <input type="text" placeholder="E-mail" name="email" id="email" required></input>
            <input type="text" placeholder="Número" name="phoneNumber" id="phoneNumber" required></input><br />
          </form>
        </div>
        <Link className="confirmBed" to="/">Registrar</Link>
      </div>
    </div>
  )
};