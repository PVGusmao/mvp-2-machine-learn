from pydantic import BaseModel
from typing import Optional, List
from model.client import Client
import json
import numpy as np

class ClientDTO(BaseModel):
    name: str = "Ronaldinho"
    age: int = 32
    sex: int = 1
    cp: float = 0.0
    trestbps: float = 130.0
    chol: float = 200.0
    fbs: float = 0.0
    restecg: float = 1.0
    thalach: float = 160.0
    exang: float = 1.0
    oldpeak: float = 0.0
    slope: float = 2.0
    ca: float = 0.0
    thal: float = 2.0

# class PacienteSchema(BaseModel):
#     """ Define como um novo paciente a ser inserido deve ser representado
#     """
#     name: str = "Maria"
#     preg: int = 6
#     plas: int = 148
#     pres: int = 72
#     skin: int = 35
#     test: int = 2
#     mass: float = 33.6
#     pedi: float = 0.627
#     age: int = 50
    
# class PacienteViewSchema(BaseModel):
#     """Define como um paciente será retornado
#     """
#     id: int = 1
#     name: str = "Maria"
#     preg: int = 6
#     plas: int = 148
#     pres: int = 72
#     skin: int = 35
#     test: int = 0
#     mass: float = 33.6
#     pedi: float = 0.627
#     age: int = 50
#     outcome: int = None
    
# class PacienteBuscaSchema(BaseModel):
#     """Define como deve ser a estrutura que representa a busca.
#     Ela será feita com base no nome do paciente.
#     """
#     name: str = "Maria"

# class ListaPacientesSchema(BaseModel):
#     """Define como uma lista de pacientes será representada
#     """
#     pacientes: List[PacienteSchema]

    
# class PacienteDelSchema(BaseModel):
#     """Define como um paciente para deleção será representado
#     """
#     name: str = "Maria"
    
def show_clients(client: Client):
    return {
        # "name": client.name,
        # "age": client.age,
        # "sex": client.sex,
        # "cp": client.cp,
        # "trestbps": client.trestbps,
        # "chol": client.chol,
        # "fbs": client.fbs,
        # "restecg": client.restecg,
        # "thalach": client.thalach,
        # "exang": client.exang,
        # "oldpeak": client.oldpeak,
        # "slope": client.slope,
        # "ca": client.ca,
        # "thal": client.thal,
        # "outcome": client.outcome
    }
    
# # Apresenta uma lista de pacientes
# def apresenta_pacientes(pacientes: List[Paciente]):
#     """ Retorna uma representação do paciente seguindo o schema definido em
#         PacienteViewSchema.
#     """
#     result = []
#     for paciente in pacientes:
#         result.append({
#             "id": paciente.id,
#             "name": paciente.name,
#             "preg": paciente.preg,
#             "plas": paciente.plas,
#             "pres": paciente.pres,    
#             "skin": paciente.skin,
#             "test": paciente.test,
#             "mass": paciente.mass,
#             "pedi": paciente.pedi,
#             "age": paciente.age,
#             "outcome": paciente.outcome
#         })

#     return {"pacientes": result}

