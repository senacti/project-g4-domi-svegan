async function getData() {
    // Set the API endpoint URL
    const API_ENDPOINT = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&ids=ethereum%2Cbitcoin%2Cmaker%2Cpax-gold%2Ctether-gold%2Cwrapped-bitcoin%2Cstaked-ether%2C&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    // Send a GET request to the API endpoint
    const response = await fetch(API_ENDPOINT);

    // Get the response data as a JSON object
    const data = await response.json();

    return data;
}

// Function to create the chart

async function createChart() {
    // Get the data from the API
    const dato = await getData();

    // Get the labels (x-axis) and data (y-axis) for the chart
    const labels = dato.map((coin) => coin.name);
    const chartData = dato.map((coin) => coin.current_price);

    // Create the chart
    const contexto = document.getElementById("chart");
    const charts = new Chart(contexto, {
        type: "doughnut",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Cryptocurrency Price (MXN)",
                    data: chartData,
                    backgroundColor: [
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(102, 0, 0)',
                        'rgb(128,128,0)',
                        'rgb(32,178,170)',
                        'rgb(255,140,0)',
                        'rgb(128,0,128)',

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
// createChart();

export { createChart };