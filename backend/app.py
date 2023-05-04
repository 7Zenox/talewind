from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from TalewindPredictor import TalewindPredictor

app = FastAPI()
predictor = TalewindPredictor(path_to_model="../AI/models/Dense_NN_CURRENT-BEST_20230502-190500.h5",
                              color_path='../AI/colors.pkl')

print("""                                                                                                                                                    
                                                                                                                                               dddddddd
TTTTTTTTTTTTTTTTTTTTTTT                lllllll                                                              iiii                               d::::::d
T:::::::::::::::::::::T                l:::::l                                                             i::::i                              d::::::d
T:::::::::::::::::::::T                l:::::l                                                              iiii                               d::::::d
T:::::TT:::::::TT:::::T                l:::::l                                                                                                 d:::::d 
TTTTTT  T:::::T  TTTTTTaaaaaaaaaaaaa    l::::l     eeeeeeeeeeee  wwwwwww           wwwww           wwwwwwwiiiiiiinnnn  nnnnnnnn        ddddddddd:::::d 
        T:::::T        a::::::::::::a   l::::l   ee::::::::::::ee w:::::w         w:::::w         w:::::w i:::::in:::nn::::::::nn    dd::::::::::::::d 
        T:::::T        aaaaaaaaa:::::a  l::::l  e::::::eeeee:::::eew:::::w       w:::::::w       w:::::w   i::::in::::::::::::::nn  d::::::::::::::::d 
        T:::::T                 a::::a  l::::l e::::::e     e:::::e w:::::w     w:::::::::w     w:::::w    i::::inn:::::::::::::::nd:::::::ddddd:::::d 
        T:::::T          aaaaaaa:::::a  l::::l e:::::::eeeee::::::e  w:::::w   w:::::w:::::w   w:::::w     i::::i  n:::::nnnn:::::nd::::::d    d:::::d 
        T:::::T        aa::::::::::::a  l::::l e:::::::::::::::::e    w:::::w w:::::w w:::::w w:::::w      i::::i  n::::n    n::::nd:::::d     d:::::d 
        T:::::T       a::::aaaa::::::a  l::::l e::::::eeeeeeeeeee      w:::::w:::::w   w:::::w:::::w       i::::i  n::::n    n::::nd:::::d     d:::::d 
        T:::::T      a::::a    a:::::a  l::::l e:::::::e                w:::::::::w     w:::::::::w        i::::i  n::::n    n::::nd:::::d     d:::::d 
      TT:::::::TT    a::::a    a:::::a l::::::le::::::::e                w:::::::w       w:::::::w        i::::::i n::::n    n::::nd::::::ddddd::::::dd
      T:::::::::T    a:::::aaaa::::::a l::::::l e::::::::eeeeeeee         w:::::w         w:::::w         i::::::i n::::n    n::::n d:::::::::::::::::d
      T:::::::::T     a::::::::::aa:::al::::::l  ee:::::::::::::e          w:::w           w:::w          i::::::i n::::n    n::::n  d:::::::::ddd::::d
      TTTTTTTTTTT      aaaaaaaaaa  aaaallllllll    eeeeeeeeeeeeee           www             www           iiiiiiii nnnnnn    nnnnnn   ddddddddd   ddddd
                                                                                                                                                       
                                                                                                                                                       
Developed by Vasu Jain and Anand Chauhan, Version 1.0. May, 2023.""")

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
