import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import StoreContext from "../../ContextApi/Store/context"
import logo from '../../assets/logo.svg'
import userIcon from '../../assets/userIcon.svg'
import './styles.css'

export default function Header() {
  const [cardHeader, setCardHeader] = useState(false);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function logout() {
    setToken(null);
    history.push("/login");
  }

  return (    
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="user">          
          <img onClick={() => setCardHeader(!cardHeader)} src={userIcon} alt="userIcon" />
          { cardHeader 
            &&
            <div className="cardHeader">
              <span onClick={logout}>Sair</span>
              <hr />
              <span>Configurações</span>
            </div>
          }
        </div>
      </div>
    </header>
  );
}