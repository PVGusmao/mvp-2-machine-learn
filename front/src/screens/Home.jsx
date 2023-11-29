import { useState } from 'react'
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../assets/backArrow.png';

// EXMPLOS DE DADOS A SEREM INPUTADOS.
//  __________________________________________________________________________________________________________________________
// |  ID  | Age  | Sex |    CP    | Trestbps |  Chol  |   FBS   | Restecg | Thalach |  Exang  | Oldpeak | Slope |  CA |  Thal |
// |  0   | 63.0 | 1.0 |   1.0    |	  145.0	 | 233.0	|   1.0  	|   2.0   |	 150.0	|   0.0   |	  2.3   |	 3.0  |	0.0	|   6.0 |
// |  1   | 67.0 | 1.0 |   4.0    |	  160.0	 | 286.0	|   0.0  	|   2.0   |	 108.0	|   1.0   |	  1.5   |	 2.0  |	3.0	|   3.0 |
// |  2   | 67.0 | 1.0 |   4.0    |	  120.0	 | 229.0	|   0.0  	|   2.0   |	 129.0	|   1.0   |	  2.6   |	 2.0  |	2.0	|   7.0 |
// |  3   | 37.0 | 1.0 |   3.0    |	  130.0	 | 250.0	|   0.0  	|   0.0   |	 187.0	|   0.0   |	  3.5   |	 3.0  |	0.0	|   3.0 |
// |  4   | 41.0 | 0.0 |   2.0    |	  130.0	 | 204.0	|   0.0  	|   2.0   |	 172.0	|   0.0   |	  1.4   |	 1.0  |	0.0	|   3.0 |
// |______|______|_____|__________|__________|________|_________|_________|_________|_________|_________|_______|_____|_______| 

export function Home() {
  const [body, setBody] = useState({});
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  }

  function predict() {
    let formData = new FormData(); 

    formData.append('name', body.name);
    formData.append('age', body.age);
    formData.append('sex', body.sex);
    formData.append('cp', body.cp);
    formData.append('trestbps', body.trestbps);
    formData.append('chol', body.chol);
    formData.append('fbs', body.fbs);
    formData.append('restecg', body.restecg);
    formData.append('thalach', body.thalach);
    formData.append('exang', body.exang);
    formData.append('oldpeak', body.oldpeak);
    formData.append('slope', body.slope);
    formData.append('ca', body.ca);
    formData.append('thal', body.thal);

    axios.post('http://localhost:5000/client', formData)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err)); 
  }
  function result() {
    navigate('/list')
  }

  return (
    <main className='main'>
      <button className="back-button" onClick={() => navigate('/')}>
        <img width={'30px'} height={'30px'} src={image} alt="back-arrow" />
      </button>
      <h1 className='title'>Heart Disease Model Probability</h1>
      <section>
        <div>
          <input onChange={handleChange} type='text' className='input' placeholder="Nome" name="name" />
          <input onChange={handleChange} type='number' className='input' placeholder="Idade" name="age" />
          <input onChange={handleChange} type='number' className='input' placeholder="Sexo" name="sex" />
          <input onChange={handleChange} type='number' className='input' placeholder="Dor no Peito" name="cp" />
          <input onChange={handleChange} type='number' className='input' placeholder="Pressão Arterial em Repouso" name="trestbps" />
          <input onChange={handleChange} type='number' className='input' placeholder="Colesterol Sérico" name="chol" />
          <input onChange={handleChange} type='number' className='input' placeholder="Glicose no Sangue em Jejum" name="fbs" />
          <input onChange={handleChange} type='number' className='input' placeholder="Resultados Eletrocardiográficos em Repouso" name="restecg" />
          <input onChange={handleChange} type='number' className='input' placeholder="Frequência Cardíaca Máxima Atigida" name="thalach" />
          <input onChange={handleChange} type='number' className='input' placeholder="Angina Induzida por Exercício" name="exang" />
          <input onChange={handleChange} type='number' className='input' placeholder="Depressão do Segmento ST Induzida por Exercício em Relação ao Repouso" name="oldpeak" />
          <input onChange={handleChange} type='number' className='input' placeholder="Inclinação do Segmento ST de Pico Induzida por Exercício" name="slope" />
          <input onChange={handleChange} type='number' className='input' placeholder="Número de Vasos Principais Coloridos por Fluoroscopia" name="ca" />
          <input onChange={handleChange} type='number' className='input' placeholder="Resultado do Teste de Estresse com Tálio" name="thal" />
        </div>

        <button onClick={predict} className='predict-button'>Predict</button>

        <div>
          <p className='meaning'>O significado de cada input acima:</p>

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
        </div>
      </section>

      <button onClick={result} className='see-all-data'>See all data</button>
    </main>
  )
}
