import { useEffect, useState } from "react"
import "../App.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import image from '../assets/backArrow.png';

export function Register() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  function getAllClients() {
    axios.get('http://localhost:5000/clients')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }
  
  useEffect(() => {
    getAllClients()
  }, [])

  return (
    <main className="main">
      <button className="back-button" onClick={() => navigate('/')}>
        <img width={'30px'} height={'30px'} src={image} alt="back-arrow" />
      </button>

      <h1 style={{margin: '10px'}}>Lista de clientes cadastrados</h1>
      <table style={{ border: '1px solid black', padding: '10px', marginLeft: '10px' }}>
        <tr>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Nome</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Age</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Sexo</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>CP</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Trestbps</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Chol</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>FBS</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Restecg</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Thalach</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Exang</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Oldpeak</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Slope</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>CA</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Thal</th>
          <th style={{ border: "1px solid rgba(180, 180, 180, 0.5)",width: '80px', textAlign: 'center'}}>Resultado</th>
        </tr>
        {
          data?.map((element, index) => (
            <tr key={index}>
              <td style={{textAlign: 'start' }}>{element.name}</td>
              <td style={{textAlign: 'center' }}>{element.age}</td>
              <td style={{textAlign: 'center' }}>{element.sex === 0 ? 'M' : 'F'}</td>
              <td style={{textAlign: 'center' }}>{element.cp}</td>
              <td style={{textAlign: 'center' }}>{element.trestbps}</td>
              <td style={{textAlign: 'center' }}>{element.chol}</td>
              <td style={{textAlign: 'center' }}>{element.fbs}</td>
              <td style={{textAlign: 'center' }}>{element.restecg}</td>
              <td style={{textAlign: 'center' }}>{element.thalach}</td>
              <td style={{textAlign: 'center' }}>{element.exang}</td>
              <td style={{textAlign: 'center' }}>{element.oldpeak}</td>
              <td style={{textAlign: 'center' }}>{element.slope}</td>
              <td style={{textAlign: 'center' }}>{element.ca}</td>
              <td style={{textAlign: 'center' }}>{element.thal}</td>
              <td style={{textAlign: 'start', fontWeight: 'bold'}}>{element.outcome > 0 ? 'Positivo' : 'Negativo'}</td>
            </tr>

          ))
        }
      </table>
      <div>
          <p className='meaning'>O significado de cada coluna acima:</p>

          <p className='dataNameExplain'><span className='spanName'>- Nome</span> (Nome da pessoa que será testada): Pode ser colocado o primeiro nome ou o nome todo se preferir.</p>
          <p className='dataNameExplain'><span className='spanName'>- Age</span> (Idade da pessoa qeu será testada): Idade da pessoa.</p>
          <p className='dataNameExplain'><span className='spanName'>- Sexo</span> (Sexo da pessoa que será testada): Sendo 0 para masculino e 1 para feminino.</p>
          <p className='dataNameExplain'><span className='spanName'>- CP</span> (Dor no Peito): Presença ou ausência de dor no peito, um sintoma comum de doença arterial coronariana.</p>
          <p className='dataNameExplain'><span className='spanName'>- Trestbps</span> (Pressão Arterial em Repouso): Representa a pressão arterial em repouso, medida em milímetros de mercúrio (mmHg).</p>
          <p className='dataNameExplain'><span className='spanName'>- Chol</span> (Colesterol Sérico): Nível de colesterol no sangue, especificamente o colesterol sérico total.</p>
          <p className='dataNameExplain'><span className='spanName'>- FBS</span> (Glicose no Sangue em Jejum): Indica o nível de glicose no sangue após um período de jejum.</p>
          <p className='dataNameExplain'><span className='spanName'>- Restecg</span> (Resultados Eletrocardiográficos em Repouso): Mede a atividade elétrica do coração em repouso.</p>
          <p className='dataNameExplain'><span className='spanName'>- Thalach</span> (Frequência Cardíaca Máxima Atigida): Representa a frequência cardíaca máxima atingida durante um teste de esforço.</p>
          <p className='dataNameExplain'><span className='spanName'>- Exang</span> (Angina Induzida por Exercício): Indica se a angina (dor ou desconforto no peito) é induzida pelo exercício.</p>
          <p className='dataNameExplain'><span className='spanName'>- Oldpeak</span> (Depressão do Segmento ST Induzida por Exercício em Relação ao Repouso): Mede a depressão do segmento ST em um eletrocardiograma durante o exercício em comparação ao repouso.</p>
          <p className='dataNameExplain'><span className='spanName'>- Slope</span> (Inclinação do Segmento ST de Pico Induzida por Exercício): Descreve a inclinação do segmento ST no eletrocardiograma durante o pico do exercício.</p>
          <p className='dataNameExplain'><span className='spanName'>- CA</span> (Número de Vasos Principais Coloridos por Fluoroscopia): Número de vasos coronários principais que mostram evidências de aterosclerose durante fluoroscopia.</p>
          <p className='dataNameExplain'><span className='spanName'>- Thal</span> (Resultado do Teste de Estresse com Tálio): Tálio é uma substância radioativa usada em alguns testes de estresse. O resultado indica se há um defeito reversível no músculo cardíaco, o que pode sugerir áreas de fluxo sanguíneo inadequado.</p>
          <p className='dataNameExplain'><span className='spanName'>- Resultado</span> (Resultado final, se positivo ou não para doença cardiada): Resultado após apresentar os dados ao modelo e o modelo definir se é positivo ou não.</p>
        </div>
    </main>
  )
}