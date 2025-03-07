KRNL RWA Trading Platform

This project is a basic trading platform built on the KRNL protocol for trading Real-World Assets (RWAs) on the Oasis Sapphire Testnet. The platform uses smart contracts to check if trades meet the required compliance rules.

How it Works

Smart Contract - This contract checks if trades meet compliance requirements. Backend - Handles requests between the dApp and the blockchain. Frontend - A simple webpage for users to interact with the trading platform.
Setup Instructions
Step 1: Clone the Project
git clone https://github.com/yourusername/KRNL-RWA-Trading.git
cd KRNL-RWA-Trading
Step 2: Set Up the Backend
Go to the backend folder:

cd backend
Install the required modules:

npm install
Run the server:

node server.js
The backend will run on http://localhost:3000.

Step 3: Deploy the Smart Contract
Open the file contracts/RWACompliance.sol in Remix (remix.ethereum.org). Deploy it on the Oasis Sapphire Testnet. Note the contract address.
Step 4: Start the Frontend
Open frontend/index.html in your browser to load the dApp. Interact with the trading form to execute a compliant RWA trade.


Project Structure:

KRNL-RWA-Trading/
├>>backend/
│   └>>server.js
├>>contracts/
│   └>>RWACompliance.sol
├>>frontend/
│   ├>>index.html
│   └>>app.js
└>>README.md


Usage
Open the Frontend - Load frontend/index.html. Enter Trade Details - Fill in your address and trade amount. Execute - Click the Execute Trade button to process the transaction.
sorry no video demo :(
    