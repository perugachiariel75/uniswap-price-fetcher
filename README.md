# Uniswap Price Fetcher

This project is a simple Node.js application that fetches the USDT price of a specified token on the Binance Smart Chain (BSC), using a decentralized exchange (DEX) interface similar to Uniswap, such as PancakeSwap. It's structured in three layers: API, Service, and Blockchain Interaction, to cleanly separate concerns and enhance maintainability.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Before you begin, ensure you have the following installed:

. Node.js (version 12.x or higher recommended)
. npm (normally comes with Node.js)
. Access to a BSC node or use a service like Binance Smart Chain (BSC) DataSeed

## Installation
Clone the repository to your local machine:

## Running the Server
Start the server by running:

node api.js

The server will start, and you can fetch token prices by accessing http://localhost:3000/price/{TOKEN_SYMBOL} through a web browser or a tool like curl or Postman.

## Usage Example
http://localhost:3000/price/BTC


This will return the current USDT price of BTC on the configured DEX in JSON format, like so:

{
  "symbol": "BTC",
  "price": "12345.67"
}
