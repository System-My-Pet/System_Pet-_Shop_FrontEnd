import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import Card from '../../components/Card'
import attendancesFilter from '../Home'
import attendances from '../Home'


import './styles.css'

export default function Bed_info() {
  return (
    <div className="bed"> 
      <Header />
      <div className="content">
        <div className="homeButton">
          <Link className="goHome" to="/">&lt; Voltar</Link>
        </div>
        
        <h2>Animal e Leito</h2>
        <div className="bedInfo">
          <form>
            <input type="text" placeholder="Especie" name="specie" id="specie" required></input>
            <input type="text" placeholder="Status" name="status" id="status" required></input><br />
            <input type="text" placeholder="Número do Leito" name="numberBed" id="numberBed" required></input>
          </form>
        </div>
        <hr></hr>
        <h2>Dono</h2>
        <div className="ownerInfo">    
          <form>
            <input type="text" placeholder="Nome" name="name" id="name" required></input>
            <input type="text" placeholder="E-mail" name="email" id="email" required></input><br />
            <input type="text" placeholder="Número" name="phoneNumber" id="phoneNumber" required></input><br />
          </form>
        </div>
      </div>
    </div>
  )
};