import requests
import json

headers = {
    'Content-Type': 'application/json'
}

balance = 1000
stocksPurchased = []
stocksPurchasedValues = []
while True:
    print("Values of stocks update at market closure.")
    print("Your current balance is: " + str(balance))
    print("The stocks you currently possess are: ")
    for i in range(len(stocksPurchased)):
        print(stocksPurchased[i] + ": " + str(stocksPurchasedValues[i]))

    print("Select one of the following options: ")
    print("Press 1 to BUY")
    print("Press 2 to SELL")
    print("Press 3 to SEE PROFITS/LOSSES")
    print("Press any other key to EXIT")
    option = input("Select Option: ")

    if option == "1":
        ticker = input("Enter the TICKER of the stock you want to purchase: ")

        response = requests.get("https://api.tiingo.com/tiingo/daily/" + ticker + "/prices?token=cfc471e20e736fc030042c46647b273fbe0ad56b", headers=headers)

        price = response.json()[0]["close"]
        print("Closing Price for " + ticker + " on " + str(response.json()[0]["date"]) + ": $" + str(price))

        quantity = int(input("Number of Stocks to Purchase [Enter 0 if you no longer want to make the trade]: "))
        if (balance - (price * quantity) < 0):
            quantity = int(input("Invalid input. Re-enter: "))

        balance = balance - (price * quantity)

        if ticker in stocksPurchased:
            for i in range(len(stocksPurchased)):
                if(ticker == stocksPurchased[i]):
                    stocksPurchasedValues[i] += 1
        else:
            stocksPurchased.append(ticker)
            stocksPurchasedValues.append(quantity)
    elif option == "2":
        print()
    elif option == "3":
        totalValue = 0
        for i in range(len(stocksPurchased)):
            response = requests.get("https://api.tiingo.com/tiingo/daily/" + stocksPurchased[i] + "/prices?token=cfc471e20e736fc030042c46647b273fbe0ad56b", headers=headers)
            print("Value of " + stocksPurchased[i] + " Stocks: " + str(stocksPurchasedValues[i] * response.json()[0]["close"]))
            totalValue += stocksPurchasedValues[i] * response.json()[0]["close"]
        print("Total Value of Stocks: " + str(totalValue))
        print("Total Value of Stocks Plus Balance: " + str(totalValue + balance))
    else:
        exit()
        