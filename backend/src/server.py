from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from processing import preprocessing_text

from loadedModel import Prediction

from database import InsertRecord, allTable


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to limit access to specific origins if needed
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS","XMLHttpRequest"],  # Adjust the HTTP methods as needed
    allow_headers=["*"],  # Allow all headers, adjust according to your requirements
)

@app.get("/")
def read_root():
    fetching = allTable()
    if not fetching:
        return {"Message": "Data not connected or web service turn of", "Response": 400}

    return {"Message": fetching, "Response": 200}


@app.get("/prediction/{query}")
def classification(query: str, q: str):
    simpan = []
    simpan.append({"Text": q, "Result": preprocessing_text(Prediction(q))})
    return {"Message": "success", "Response": 200, "Result": simpan}


@app.post("/add/prediction")
async def addUsers(text: str):
    hasil = preprocessing_text(Prediction(text))
    dataInsert = InsertRecord(text, prediction=hasil)
    return {"Msg": dataInsert}
