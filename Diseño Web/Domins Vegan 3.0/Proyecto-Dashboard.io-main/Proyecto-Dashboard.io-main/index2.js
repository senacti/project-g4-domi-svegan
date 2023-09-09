async function getData2() {
    // Set the API endpoint URL
    const API_ENDPOINT = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum%2Cbitcoin%2Cmaker%2Cpax-gold%2Ctether-gold%2Cwrapped-bitcoin%2Cstaked-ether%2C&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    // Send a GET request to the API endpoint
    const response = await fetch(API_ENDPOINT);

    // Get the response data as a JSON object
    const data = await response.json();

    return data;
}

// Function to create the chart

async function createChart2() {
    // Get the data from the API
    const dato = await getData2();

    // Get the labels (x-axis) and data (y-axis) for the chart
    const labels2 = dato.map((coin) => coin.name);
    const chartData2 = dato.map((coin) => coin.current_price);





    // Create the chart
    const contexto = document.getElementById("chart2");
    const charts = new Chart(contexto, {
        type: "bar",
        data: {
            labels: labels2,
            datasets: [
                {
                    label: "Cryptocurrency Price (USD)",
                    data: chartData2,
                    backgroundColor: [
                        'rgb(128,0,0)',
                        'rgb(128,128,0)',
                        'rgb(0,128,0)',
                        'rgb(128,0,128)',
                        'rgb(0,128,128)',
                        'rgb(218,165,32)',
                        'rgb(210,105,30)',
                    ],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}

// Call the createChart function when the page loads
createChart2();