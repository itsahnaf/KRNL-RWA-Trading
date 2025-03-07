// frontend/app.js

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    root.innerHTML = 
    `
        <h1>KRNL RWA Trading</h1>
        <input id="userAddress" type="text" placeholder="User Address" />
        <input id="amount" type="number" placeholder="Amount" />
        <button id="executeTrade">Execute Trade</button>
        <p id="status"></p>
    `;

    document.getElementById("executeTrade").addEventListener("click", async () => {
        const userAddress = document.getElementById("userAddress").value;
        const amount = document.getElementById("amount").value;
        const statusElem = document.getElementById("status");

        try {
            const response = await fetch("http://localhost:3000/check-compliance", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userAddress, amount }),
            });

            const data = await response.json();
            if (data.isCompliant) {
                statusElem.innerText = "Trade Approved";
            } else {
                statusElem.innerText = "Trade Denied";
            }
        } catch (error) {
            console.error(error);
            statusElem.innerText = "Error processing trade";
        }
    });
});
