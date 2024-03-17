from typing import Union

from fastapi import FastAPI

from processing import preprocessing_text

from loadedModel import Prediction

app = FastAPI()


@app.get("/")
def read_root():
    hasil = preprocessing_text(
        "UpgrdCentre Orange customer, you may now claim your FREE CAMERA PHONE upgrade for your loyalty. Call now on 0207 153 9153. Offer ends 26th July. T&C's apply. Opt-out available"
    )
    return {
        "Hello": "World",
        "Processing Text": hasil,
        "clasifikasi": Prediction(hasil),
    }
