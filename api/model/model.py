import numpy as np
import pickle
import joblib

class Model:
    
    def load_model(path):
        if path.endswith('.pkl'):
            model = pickle.load(open(path, 'rb'))
        else:
            raise Exception('Formato de arquivo não suportado')
        return model
    
    def predict(model, form):
        X_input = np.array([form.age, 
                            form.sex, 
                            form.cp, 
                            form.trestbps, 
                            form.chol, 
                            form.fbs, 
                            form.restecg,
                            form.thalach,
                            form.exang,
                            form.oldpeak,
                            form.slope,
                            form.ca,
                            form.thal,
                          ])
        # Faremos o reshape para que o modelo entenda que estamos passando
        diagnosis = model.predict(X_input.reshape(1, -1))
        return int(diagnosis[0])