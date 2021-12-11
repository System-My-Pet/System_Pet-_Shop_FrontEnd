import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import './styles.css';
import { Api } from '../../services/api';

export default function Register(props) {
  const [attendance, setAttedance] = useState(null);
  const [result, setResult] = useState("");
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    
    const id = props.match.params.id; 
    if(id){
      (async function req() {
        const attend = await Api.get(`getAtendimentosById/${id}`);
        setAttedance(attend.data)  
       
      }())
    }
    
  }, [props.match.params.id])  

  useEffect(() => {

    if(props.match.params.id){
      
      if(attendance){
        console.log(attendance);
        getDados();
      }
    }
    
    
       
   
  }, [attendance])

  
  const onSubmit = (data) => setResult(data);
  

  // função para atualizar o form com os dados que vem pelo getById
  // precisa passar o numero do leito, para que possa setar o campo 

  const getDados = () => {
    setValue("specie", attendance.especie, {
      shouldValidate: true,
      shouldDirty: true
    })    
    setValue("status", attendance.status, {
      shouldValidate: true,
      shouldDirty: true
    })
  }

  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <div className="register"> 
      <Header />
      <div className="content">
        <div className="homeButton">
          <Link className="goHome" to="/">&lt; Voltar</Link>
        </div>
        <h2>Animal e Leito</h2>
        <div className="registerBed">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("specie")} type="text" placeholder="Especie" name="specie" id="specie" required />
            <input {...register("status")} type="text" placeholder="Status" name="status" id="status" required /><br />
            <input {...register("number")} type="text" placeholder="Número do Leito" name="numberBed" id="numberBed" required />
            <input type="submit" />
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