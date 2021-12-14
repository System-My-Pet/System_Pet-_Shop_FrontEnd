import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import StoreContext from "../../ContextApi/Store/context"
import logo from '../../assets/logo.svg'
import userIcon from '../../assets/userIcon.svg'
import './styles.css'

export default function Header(props) {
  const [cardHeader, setCardHeader] = useState(false);
  const { setToken } = useContext(StoreContext);

  function logout() {    
    props.notify(toast.success('Logout feito com sucesso'));
    setTimeout(() =>{
      setToken(null);
    }, 2000);
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