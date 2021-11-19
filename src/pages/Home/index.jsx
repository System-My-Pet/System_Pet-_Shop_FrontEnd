import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Card from '../../components/Card'
import './styles.css'

const attendances = [
  {
    id: 1,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Disponivel"
  },
  {
    id: 2,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Em espera"
  },
  {
    id: 3,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Em recuperação"
  },
  {
    id: 4,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Em atendimento"
  },
  {
    id: 5,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Disponivel"
  },
  {
    id: 6,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Em espera"
  },
  {
    id: 7,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Em recuperação"
  },
  {
    id: 8,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Em recuperação"
  },
  {
    id: 9,
    nomeDono: "Dono",
    especie: "Cachorro",
    status: "Em atendimento"
  }
]

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [attendancesFilter, setAttendancesFilter] = useState(attendances);

  useEffect(() => {    
    if(filter === "all") {
      setAttendancesFilter(attendances);
    }
    if(filter === "available") {
      setAttendancesFilter(attendances.filter((attendance) => attendance.status === "Disponivel"))
    }
    if(filter === "waiting") {
      setAttendancesFilter(attendances.filter((attendance) => attendance.status === "Em espera"))
    }
    if(filter === "recovering") {
      setAttendancesFilter(attendances.filter((attendance) => attendance.status === "Em recuperação"))
    }
    if(filter === "answering") {
      setAttendancesFilter(attendances.filter((attendance) => attendance.status === "Em atendimento"))
    }
  }, [filter])  

  return (
    <div className="home"> 
      <Header />
      <div className="main">
        <div className="select">
          <select name="select" value={filter} onChange={(event) => setFilter(event.target.value)}>
            <option value="all">Todos</option> 
            <option value="available">Disponivel</option>
            <option value="waiting">A espera</option>
            <option value="recovering">Em recuperação</option>
            <option value="answering">Em atendimento</option>
          </select>        
        </div>
        <div className="cards">          
          {attendancesFilter.map(attendance =>
            <Card number={attendance.id} owner={attendance.nomeDono} specie={attendance.especie} status={attendance.status} />
          )}                    
        </div>
      </div>
      <Link className="addButton" to="/register">+</Link>
    </div>
  )
}