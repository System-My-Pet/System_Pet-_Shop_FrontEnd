import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Api } from "../../services/api"

import Header from '../../components/Header'
import Card from '../../components/Card'
import './styles.css'

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [attendances, setAttendances] = useState([]);
  const [attendancesFilter, setAttendancesFilter] = useState([]);

  useEffect(() => {
    (async function req() {
      const attend = await Api.get("getAtendimentos")
      setAttendances(attend.data);
    }())
  }, [])  

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
      setAttendancesFilter(attendances.filter((attendance) => attendance.status === "Em andamento"))
    }
  }, [filter, attendances])  

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
            <option value="answering">Em andamento</option>
          </select>        
        </div>
        <div className="cards">          
          {attendancesFilter.map((attendance, i) =>
            <Card key={attendance._id} id={attendance._id} number={i} owner={attendance.nomeDono} specie={attendance.especie} status={attendance.status} />
          )}                    
        </div>
      </div>
      <Link className="addButton" to="/register">+</Link>
    </div>
  )
}