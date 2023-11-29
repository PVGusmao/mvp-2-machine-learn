
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <main className="main-app">
      <section className="wrapper">
        <h1 className='title-app'>Bem vindo</h1>

        <div>
          <button onClick={() => navigate('/register')} className='predict-button'>Prever</button>
          <button onClick={() => navigate('/list')} className='tabela'>Tabela</button>
        </div>
      </section>
    </main>
  )
}

export default App
