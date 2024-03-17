from itertools import chain
import mysql.connector


def connectDb():
    try:
        mydb = mysql.connector.connect(
            host="localhost", user="root", password="", database="nlpapp"
        )
        return mydb
    except mysql.connector.Error as err:
        print("Error connecting to MySQL:", err)
        return None


def allTable():
    dbExec = connectDb()
    mycursor = dbExec.cursor()
    mycursor.execute("SELECT * FROM users")
    simpan = []
    for data in mycursor.fetchall():
        simpan.append({"id": data[0], "text": data[1], "prediction": data[2]})
    return simpan


def userDetailsbyId(queryId: int):
    simpan = []
    datas = allTable()
    for data in range(len(datas)):
        db = datas[data]
        try:
            if db.get("id") == queryId:
                simpan.append(
                    {
                        "id": db.get("id"),
                        "text": db.get("text"),
                        "prediction": db.get("prediction"),
                    }
                )
        except:
            return "id not found "

    return simpan


def InsertRecord(text: str, prediction: str):
    datas = connectDb()
    insertted = datas.cursor()
    sql = "INSERT INTO users (id, text, prediction) VALUES (NULL,%s, %s)"
    val = (text, prediction)
    insertted.execute(sql, val)
    print(insertted.rowcount, "record inserted.")
    return datas.commit()
