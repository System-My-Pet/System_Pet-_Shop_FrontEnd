import { useState } from 'react';
import logo from '../../assets/logo.svg'
import userIcon from '../../assets/userIcon.svg'
import { Link } from 'react-router-dom';
import './styles.css'

export default function Header() {
  const [cardHeader, setCardHeader] = useState(false);  

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
              <span>Sair</span>
              <hr />
              <span>Configurações</span>
            </div>
          }
        </div>
      </div>
    </header>
  );
}