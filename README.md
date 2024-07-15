# $MOON

![Screenshot of Website](./public/images/crypto-moon.png)

Crypto Moon is a website that allows users to track the top 10 cryptocurrencies by market capitalization. It provides accurate, real-time data on coin prices, market caps, 24-hour price changes, and trading volume. The app was built with Express.js for the backend, Axios for making API requests to Coingecko API, EJS for templating, and SCSS for styling.

Live demo: [Crypto Moon Demo](https://crypto-moon-uetp.onrender.com/)

## Features:
1. Displays the top 10 cryptocurrencies sorted by market cap.
2. Provides information about each cryptocurrency, including its name, current price, market cap, 24-hour price change, and trading volume.
3. Responsive design for optimal viewing on various devices.

## Changes to Make
1. Allows users to search for specific cryptocurrencies.
2. Provides historical price data for each cryptocurrency over the past 30 days.
3. Better mobile responsiveness

## How to Use:
1. Clone the repository to your local machine.
2. Install dependencies by running npm install.
3. Create a .env file in the project root directory and add your CoinGecko API key: token=YOUR_API_KEY
4. Run the application using node index.js.
5. Open your web browser and navigate to http://localhost:3000.

Example: 
    git clone git@github.com:jere67/crypto-moon.git
    cd crypto-moon
    npm install
    echo "token=YOUR_API_KEY" > .env
    node index.js