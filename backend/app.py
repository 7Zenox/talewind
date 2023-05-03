from fastapi import FastAPI, Request
from ..AI.TalewindPredictor import TalewindPredictor

app = FastAPI()
predictor = TalewindPredictor(path_to_model="../AI/models/Dense_NN_CURRENT-BEST_20230502-190500.h5")

@app.post("/predict")
async def predict(request: Request):
    data = await request.json()
    query = data["query"]
    mode = data["mode"]
    result = predictor(query, mode)
    return result
