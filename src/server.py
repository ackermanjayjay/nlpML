from typing import Union

from fastapi import FastAPI

from processing import preprocessing_text

app = FastAPI()


@app.get("/")
def read_root():
    return {
        "Hello": "World",
        "Processing Text": preprocessing_text(
            "UpgrdCentre Orange customer, you may now claim your FREE CAMERA PHONE upgrade for your loyalty. Call now on 0207 153 9153. Offer ends 26th July. T&C's apply. Opt-out available"
        ),
    }
