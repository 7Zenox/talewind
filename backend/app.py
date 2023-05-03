from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from TalewindPredictor import TalewindPredictor

app = FastAPI()
predictor = TalewindPredictor(path_to_model="../AI/models/Dense_NN_CURRENT-BEST_20230502-190500.h5",
                              color_path='../AI/colors.pkl')

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "*.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
