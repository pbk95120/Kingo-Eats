import socket
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity



host = "127.0.0.1"
port = 9123

#IPv4 체계, TCP 타입 소켓 객체를 생성
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#포트를 사용 중 일때 에러를 해결하기 위한 구문
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

#ip주소와 port번호를 함께 socket에 바인드 한다.
#포트의 범위는 1-65535 사이의 숫자를 사용할 수 있다.
server_socket.bind((host, port))

#서버가 클라이언트의 접속을 허용한다.
server_socket.listen()

#클라이언트 함수가 접속하면 새로운 소켓을 반환한다.
client_socket, addr = server_socket.accept()

print("접속한 클라이언트의 주소 입니다. : ", addr)



###추천
menu_data = pd.read_csv('menu1113.csv',encoding='cp949')
menu_data = menu_data.dropna()

print("메뉴 데이터",menu_data.shape)


#tfidf 벡터화
tfidf_vector = TfidfVectorizer()
tfidf_matrix = tfidf_vector.fit_transform(menu_data['menu']).toarray()
tfidf_matrix_feature = tfidf_vector.get_feature_names_out()

print("TFIDF",tfidf_matrix.shape)

tfidf_matrix = pd.DataFrame(tfidf_matrix, columns=tfidf_matrix_feature, index = menu_data.place)
print(tfidf_matrix.shape)
tfidf_matrix

#코사인 유사도
cosine_sim = cosine_similarity(tfidf_matrix)

cosine_sim_df = pd.DataFrame(cosine_sim, index = menu_data.place, columns = menu_data.place)
print("코사인유사도",cosine_sim_df.shape)

# 유사도 큰 데이터 가져오는 함수
def genre_recommendations_typing(target_title, matrix, items, k=1):
    recom_idx = matrix.loc[:, target_title].values.reshape(1, -1).argsort()[:, ::-1].flatten()[1:k+1]
    recom_title = items.iloc[recom_idx, :].place.values
    recom_genre = items.iloc[recom_idx, :].menu.values
    target_title_list = np.full(len(range(k)), target_title)
    target_genre_list = np.full(len(range(k)), items[items.place == target_title].menu.values)
    d = {
        'target_title':target_title_list,
        'target_menu':target_genre_list,
        'recom_place' : recom_title,
        'recom_menu' : recom_genre
    }
    return pd.DataFrame(d)


rmenu = genre_recommendations_typing('like', cosine_sim_df, menu_data)
print(rmenu.recom_place)
send2client = rmenu.to_string(columns=['recom_place'], index=False, header= None)










while 1:
    #string = client_socket.recv(1024).decode()
    #if string == "": break
    #print("받은 데이터는 \"", string, "\" 입니다.", sep="")

    client_socket.sendall(send2client.encode())
# 소켓을 닫는다.
print("접속을 종료합니다.")
client_socket.close()
server_socket.close()