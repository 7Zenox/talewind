from fastapi import FastAPI, Request
from ..AI.TalewindPredictor import TalewindPredictor

app = FastAPI()
predictor = TalewindPredictor(path_to_model="path/to/your/model")

@app.post("/predict")
async def predict(request: Request):
    data = await request.json()
    query = data["query"]
    mode = data["mode"]
    result = predictor(query, mode)
    return result
