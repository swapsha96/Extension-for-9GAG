import requests, json
json.dump(requests.get("http://memeful.com/web/ajax/posts?count=10000").json()['data'], open('js/memeful_data.json', 'w'))