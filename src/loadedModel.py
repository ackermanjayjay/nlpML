from sklearn.feature_extraction.text import TfidfVectorizer
import pickle
import os


def Prediction(text: str):
    loaded_vec = TfidfVectorizer(
        decode_error="replace",
        vocabulary=set(pickle.load(open(os.path.join("tfidf\idf.pkl"), "rb"))),
    )

    predictor_load_dec_pakaian = pickle.load(open("model\knn_model.pkl", "rb"))

    tfidf_pakaian = loaded_ve.fit_transform(text)
    return predictor_load_dec_pakaian.predict(tfidf_pakaian)
