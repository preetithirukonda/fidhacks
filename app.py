from flask import Flask, render_template, request
import requests

app = Flask(__name__)

headers = {
    'Content-Type': 'application/json'
}

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        stock_name = request.form['stock_name']
        response = requests.get(f"https://api.tiingo.com/tiingo/daily/{stock_name}/prices?token=cfc471e20e736fc030042c46647b273fbe0ad56b", headers=headers)

        try:
            price = response.json()[0]["close"]
            message = f"Closing Price for {stock_name}: ${price}"
        except (IndexError, KeyError):
            message = f"Could not find information for stock {stock_name}"

        return render_template('test.html', message=message)

    return render_template('test.html', message="")

if __name__ == '__main__':
    app.run(debug=True)
