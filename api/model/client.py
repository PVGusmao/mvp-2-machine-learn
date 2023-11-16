from sqlalchemy import Column, String, Integer, DateTime, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from typing import Union

from  model import Base

class Client(Base):
    __tablename__ = 'clients'
    
    id = Column(Integer, primary_key=True)
    name= Column("Name", String(50))
    age = Column("Idade", Integer)
    sex = Column("Sexo", Integer)
    cp = Column("cp", Float)
    trestbps = Column("trestbps", Float)
    chol = Column("chol", Float)
    fbs = Column("fbs", Float)
    restecg = Column("restecg", Float)
    thalach = Column("thalach", Float)
    exang = Column("exang", Float)
    oldpeak = Column("oldpeak", Float)
    slope = Column("slope", Float)
    ca = Column("ca", Float)
    thal = Column("thal", Float)
    outcome = Column("outcome", Integer)
    data_insercao = Column(DateTime, default=datetime.now())
    
    def __init__(self, name: String, age: int,
                 sex: int, cp: float, trestbps: float,
                 chol: float, fbs: float, restecg: float,
                 thalach: float, exang: float, oldpeak: float,
                 slope: float, ca: float, thal: float, outcome: int,
                 data_insercao:Union[DateTime, None] = None):
    #     """
    #     Cria um Cliente

    #     Arguments:
    #     name: nome do cliente
    #     age: idade do cliente
    #     sex: sexo do cliente
    #     cp:
    #     trestbps:
    #     chol:
    #     fbs:
    #     restecg:
    #     thalach:
    #     exang:
    #     oldpeak:
    #     slope:
    #     ca:
    #     thal:
    #     outcome:
    #     data_insercao: data de quando o paciente foi inserido à base

    #     """
        self.name = name
        self.age = age
        self.sex = sex
        self.cp = cp
        self.trestbps = trestbps
        self.chol = chol
        self.fbs = fbs
        self.restecg = restecg
        self.thalach = thalach
        self.exang = exang
        self.oldpeak = oldpeak
        self.slope = slope
        self.ca = ca
        self.thal = thal
        self.outcome = outcome

        # se não for informada, será o data exata da inserção no banco
        if data_insercao:
            self.data_insercao = data_insercao