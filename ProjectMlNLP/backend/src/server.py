from typing import Union

from fastapi import FastAPI

from processing import preprocessing_text

from loadedModel import Prediction

from database import InsertRecord,allTable


app = FastAPI()


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
def addUsers(text: str):
    hasil = preprocessing_text(Prediction(text))
    dataInsert = InsertRecord(text, prediction=hasil)
    return {"Msg": dataInsert}
