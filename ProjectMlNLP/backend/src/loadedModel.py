from sklearn.feature_extraction.text import TfidfVectorizer
import pickle
import os


def Prediction(text):
    loaded_vec = TfidfVectorizer(
        decode_error="replace",
        vocabulary=set(pickle.load(open(os.path.join("tfidf", "idf.pkl"), "rb"))),
    )

    predictor_load = pickle.load(open(os.path.join("model", "knn_model.pkl"), "rb"))

    tfidf_newData = loaded_vec.fit_transform([text])  # Transform the input text
    result = predictor_load.predict(tfidf_newData)
    return result[0]
