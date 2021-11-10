import Header from '../../components/Header'
import Card from '../../components/Card'
import './styles.css'

export default function Home() {
  return (
    <div className="home"> 
      <Header />
      <div className="main">        
        <div className="cards">
          <Card number={1} owner="Dono" species="Cachorro" status="Disponivel" />
          <Card number={2} owner="Dono" species="Cachorro" status="Em espera" />
          <Card number={3} owner="Dono" species="Cachorro" status="Em atendimento" />
          <Card number={4} owner="Dono" species="Cachorro" status="Em recuperação" />
          <Card number={5} owner="Dono" species="Cachorro" status="Em espera" />
          <Card number={6} owner="Dono" species="Cachorro" status="Em atendimento" />
          <Card number={7} owner="Dono" species="Cachorro" status="Em espera" />
          <Card number={8} owner="Dono" species="Cachorro" status="Disponivel" />
          <Card number={9} owner="Dono" species="Cachorro" status="Em recuperação" />
          <Card number={10} owner="Dono" species="Cachorro" status="Em espera" />
          <Card number={11} owner="Dono" species="Cachorro" status="Em espera" />
          <Card number={12} owner="Dono" species="Cachorro" status="Em recuperação" />
          <Card number={13} owner="Dono" species="Cachorro" status="Em espera" />
          <Card number={14} owner="Dono" species="Cachorro" status="Em atendimento" />
        </div>
      </div>
      <button className="addButton">+</button>
    </div>
  )
}