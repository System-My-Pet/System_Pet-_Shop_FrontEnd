import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

export default function Card(props) {
  const [statusColor, setStatusColor] = useState();

  useEffect(() => {
    if(props.status === "Disponivel")
      setStatusColor("#34FF22");
    if(props.status === "Em espera")
      setStatusColor("#FFB422");
    if(props.status === "Em recuperação")
      setStatusColor("#EAFE00");
    if(props.status === "Em andamento")
      setStatusColor("#22D7FF");
  }, [props.status])

  return (   
    <Link to={`/register/${props.id}`} className="card">
      <span>Leito {props.number}</span>
      <span>{props.owner}</span>
      <span>{props.specie}</span>
      <span style={{ color: statusColor }}>{props.status}</span>      
    </Link>    
  )
}