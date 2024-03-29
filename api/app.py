from flask_openapi3 import OpenAPI, Info, Tag
from flask import redirect, request
from urllib.parse import unquote

from sqlalchemy.exc import IntegrityError
from model import Client, Model
from schema import ClientDTO, show_all_clients, show_one_client

from model import Session
from flask_cors import CORS

# Instanciando o objeto OpenAPI
info = Info(title="MVP-2-Machine-Learn", version="1.0.0")
app = OpenAPI(__name__, info=info)
CORS(app)

home_tag = Tag(name="Documentação", description="Seleção de documentação: Swagger, Redoc ou RapiDoc")
clients_tag = Tag(name="Paciente", description="Adição, visualização, remoção e predição de pacientes com Diabetes")

@app.get('/', tags=[home_tag])
def home():
    """Redireciona para /openapi, tela que permite a escolha do estilo de documentação.
    """
    return redirect('/openapi')

@app.get('/clients', tags=[clients_tag])
def list_client():
    session = Session()
    clients = session.query(Client).all()
    print(clients)
    return show_all_clients(clients), 200

@app.get('/client', tags=[clients_tag])
def get_client():
    name = request.args.get('name')

    session = Session()
    client = session.query(Client).filter(Client.name == name).first()
    return show_one_client(client)

@app.post('/client', tags=[clients_tag])
def client(form: ClientDTO):
    
    modelPath = './model_dataset/model.pkl'
    model = Model.load_model(modelPath)

    print('oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', form.name == "")

    if (form.name == ""):
        message = "Digite um nome."
        return {"message": message}, 400

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

    try:
        session = Session()

        if (session.query(Client).filter(Client.name == client.name).first()):
            message = "Cliente já cadastrado."
            return {"message": error}, 409
        
        session.add(client)
        session.commit()

        return {"message": "Cliente adicionado com sucesso!"}, 201

    except Exception as error:
        message = "Algo errado aconteceu, tente novamente em segundos."
        return {"message": message}, 500