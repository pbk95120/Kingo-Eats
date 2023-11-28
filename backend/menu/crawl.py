from flask import Flask, request, jsonify
from konlpy.tag import Komoran
from summa import keywords, summarizer
import re
from konlpy.tag import Okt
from sklearn.feature_extraction.text import TfidfVectorizer
import json
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)


@app.route('/summarize_text', methods=['POST'])
def summarize_text():
    data = request.get_json()
    url = data.get('url')
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    search_results = soup.find_all("p")
    text = ""
    for result in search_results:
        text = text + " " + result
    max_length = 300
    komoran = Komoran()
    text_keywords = keywords.keywords(text).split('\n')
    sentence_scores = {}
    sentences = text.split('.')
    for sentence in sentences:
        score = 0
        for keyword in text_keywords:
            if keyword in sentence:
                score += 1
        sentence_scores[sentence] = score
    sorted_sentences = sorted(sentence_scores.items(),
                              key=lambda item: item[1], reverse=True)
    summary_sentences = [sentence for sentence, score in sorted_sentences[:2]]
    summary = " ".join(summary_sentences)
    if len(summary) > max_length:
        summary = summary[:max_length] + "…"
    return jsonify({'summary': summary}, ensure_ascii=False)


@app.route('/extract_keywords', methods=['POST'])
def extract_keywords():
    top_k = 5
    data = request.get_json()
    text = data.get('article')
    tokenizer = Okt()
    tokens = tokenizer.pos(text, stem=True)
    keywords = [word for word, pos in tokens if pos in ['Noun', 'Adjective']]
    tfidf = TfidfVectorizer()
    tfidf_matrix = tfidf.fit_transform([' '.join(keywords)])
    feature_names = tfidf.get_feature_names_out()
    stopwords = ['있다', '이다']
    feature_names = [
        keyword for keyword in feature_names if keyword not in stopwords]
    top_keywords = []
    if len(feature_names) > 0:
        sorted_indices = tfidf_matrix.toarray().argsort(axis=1)[:, ::-1]
        top_indices = sorted_indices[:, :top_k].flatten()
        top_keywords = [feature_names[idx] for idx in top_indices]
    return jsonify({'keywowrds': top_keywords})


if __name__ == '__main__':
    app.run()
