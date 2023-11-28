import json
from summa import keywords, summarizer


def lambda_handler(event, context):
    obj = []
    if 'queryStringParameters' in event:
        params = event['queryStringParameters']
        if len(params) == 1:
            max_length = 300  # 최대 글자수
            text = params['article']
            # 키워드 추출
            text_keywords = keywords.keywords(text).split('\n')
            sentence_scores = {}
            sentences = text.split('.')
            for sentence in sentences:
                score = 0
                for keyword in text_keywords:
                    if keyword in sentence:
                        score += 1
                sentence_scores[sentence] = score
            sorted_sentences = sorted(
                sentence_scores.items(), key=lambda item: item[1], reverse=True)
            summary_sentences = [sentence for sentence,
                                 score in sorted_sentences[:2]]
            summary = " ".join(summary_sentences)
            if len(summary) > max_length:
                summary = summary[:max_length] + "…"
            return {
                'statusCode': 200,
                'body': json.dumps({'summary': summary}, ensure_ascii=False)
            }
        elif len(params) == 2:
            name = params['name']
            company = params['company']
            query = company + " " + name
            url = f"https://www.google.com/search?q={query}"
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
            response = requests.get(url, headers=headers)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, "html.parser")
            search_results = soup.select("div.yuRUbf")
            for result in search_results:
                title = result.select_one("h3").text
                link = result.select_one("a")["href"]
                company = ""
                company_element = result.select_one(".VuuXrf")
                if company_element is not None:
                    company = (company_element.text).split(".")[0]
                obj.append({
                    'title': title,
                    'link': link,
                    'company': company
                })
            return {
                'statusCode': 200,
                'body': json.dumps({"data": obj}, ensure_ascii=False)
            }
        elif len(params) == 3:
            top_k = 5  # 키워드 개수
            text = params['article']
            # 문장에서 한글을 제외한 문자 제거
            # text = re.sub(r"[^ㄱ-ㅎㅏ-ㅣ가-힣\s]", "", text)
            # 형태소 분석기를 활용한 토큰화
            tokenizer = Okt()
            tokens = tokenizer.pos(text, stem=True)
            keywords = [word for word,
                        pos in tokens if pos in ['Noun', 'Adjective']]
            tfidf = TfidfVectorizer()
            tfidf_matrix = tfidf.fit_transform([' '.join(keywords)])
            feature_names = tfidf.get_feature_names_out()
            stopwords = ['있다', '이다']
            feature_names = [
                keyword for keyword in feature_names if keyword not in stopwords]
            top_keywords = []
            if len(feature_names) > 0:
                sorted_indices = tfidf_matrix.toarray().argsort(axis=1)[
                    :, ::-1]
            top_indices = sorted_indices[:, :top_k].flatten()
            top_keywords = [feature_names[idx] for idx in top_indices]
            return {
                'statusCode': 200,
                'body': json.dumps({'keywowrds': top_keywords}, ensure_ascii=False)
            }
        return {
            'statusCode': 200,
            'body': json.dumps("Success!!")
        }
