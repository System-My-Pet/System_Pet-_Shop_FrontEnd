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
        </div>
      </div>
    </div>
  )
}