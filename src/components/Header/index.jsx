import logo from '../../assets/logo.svg'
import userIcon from '../../assets/userIcon.svg'
import { Link } from 'react-router-dom';
import './styles.css'

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button className="user">
          <img src={userIcon} alt="userIcon" />
        </button>
      </div>
    </header>
  );
}