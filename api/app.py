from flask_openapi3 import OpenAPI, Info, Tag
from flask import redirect
from urllib.parse import unquote

from sqlalchemy.exc import IntegrityError
from model import Client, Model
from schema import ClientDTO

from model import Session
# from logger import logger
# from schemas import *
from flask_cors import CORS

# Instanciando o objeto OpenAPI
info = Info(title="Minha API", version="1.0.0")
app = OpenAPI(__name__, info=info)
CORS(app)

home_tag = Tag(name="Documentação", description="Seleção de documentação: Swagger, Redoc ou RapiDoc")
clients_tag = Tag(name="Paciente", description="Adição, visualização, remoção e predição de pacientes com Diabetes")

@app.get('/', tags=[home_tag])
def home():
    """Redireciona para /openapi, tela que permite a escolha do estilo de documentação.
    """
    return redirect('/openapi')


@app.post('/client', tags=[clients_tag])
def client(form: ClientDTO):
    
    modelPath = './model_dataset/model.pkl'
    model = Model.load_model(modelPath)

    client = Client(
        name=form.name.strip(),
        age=form.age,
        sex=form.sex,
        cp=form.cp,
        trestbps=form.trestbps,
        chol=form.chol,
        fbs=form.fbs,
        restecg=form.restecg,
        thalach=form.thalach,
        exang=form.exang,
        oldpeak=form.oldpeak,
        slope=form.slope,
        ca=form.ca,
        thal=form.thal,
        outcome=Model.predict(model, form), 
    )

    print(client)

    return 'ie'