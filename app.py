from flask import Flask, render_template, request, session
import requests

app = Flask(__name__)
app.secret_key = 'ifajsdkflja;sdlkf'

headers = {
    'Content-Type': 'application/json'
}

@app.route('/', methods=['GET', 'POST'])
def index():
    if 'balance' not in session:
        session['balance'] = 10000
    if 'stocksPurchased' not in session:
        session['stocksPurchased'] = []
    if 'stocksPurchasedValues' not in session:
        session['stocksPurchasedValues'] = []

    balance = session['balance']
    stocksPurchased = session['stocksPurchased']
    stocksPurchasedValues = session['stocksPurchasedValues']

    if request.method == 'POST':
      #  message = str(balance) + "\n"
        ticker = request.form['stock_name']
        response = requests.get(f"https://api.tiingo.com/tiingo/daily/{ticker}/prices?token=cfc471e20e736fc030042c46647b273fbe0ad56b", headers=headers)

        try:
            price = response.json()[0]["close"]
         #   message = message+ f"Closing Price for {ticker}: ${price}"
             # buying stock
            if 'buy' in request.form:
                quantity =float(request.form['shares_amt'])
                message = f"Buying {ticker}"
                if (balance - (price * quantity) < 0):
                    raise IndexError
                balance = balance - (price * quantity)

                if ticker in stocksPurchased:
                    for i in range(len(stocksPurchased)):
                        if(ticker == stocksPurchased[i]):
                            stocksPurchasedValues[i] += quantity
                else:
                    stocksPurchased.append(ticker)
                    stocksPurchasedValues.append(quantity)
                message ="Current balance: "+ str(balance) + "\n"
                message = message + f"Closing Price for {ticker}: ${price}"+ "\n"
                for i in range(len(stocksPurchased)):
                    message = message + "\n"+ stocksPurchased[i] + ": " + str(stocksPurchasedValues[i]) + "\n"
                
             # selling stock
            elif 'sell' in request.form:
                 quantity =float(request.form['shares_amt'])
                 message = f"Selling {ticker}"
            elif 'get-price' in request.form:
                message ="Current balance: "+ str(balance) + "\n"
                message = message + f"\nClosing Price for {ticker}: ${price}"


        except (IndexError, KeyError):
            message = f"Could not find information for stock {ticker}"

        session['balance'] = balance
        session['stocksPurchased'] = stocksPurchased
        session['stocksPurchasedValues'] = stocksPurchasedValues

        return render_template('test.html', message=message)

    return render_template('test.html', message="")

if __name__ == '__main__':
    app.run(debug=True)
