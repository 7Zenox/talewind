from fastapi import FastAPI, Request
from pydantic import BaseModel
from TalewindPredictor import TalewindPredictor

app = FastAPI()
predictor = TalewindPredictor(path_to_model="../AI/models/Dense_NN_CURRENT-BEST_20230502-190500.h5",
                              color_path='../AI/colors.pkl')


class JSONObject(BaseModel):
    query: str
    mode: str

@app.get('/')
async def hello():
    return {"message" : "this is the backend. why are you here?"}

@app.post("/predict")
async def predict(request: JSONObject):
    query = request.query
    mode = request.mode
    result = predictor(query, mode)
    return result
