import './styles.css';

export default function Card(props) {
  return (
    <div className="card">
      <h2>Leito {props.number}</h2>
      <h2>{props.owner}</h2>
      <h2>{props.species}</h2>
      <h2>{props.status}</h2>
    </div>
  )
}