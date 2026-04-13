function checkCrowd() {
    let routes = ["Gate A - Low Crowd", "Gate B - Moderate", "Gate C - High Crowd"];
    let result = routes[Math.floor(Math.random() * routes.length)];
    document.getElementById("crowdResult").innerText =
        "Recommended: " + result;
}

function checkFood() {
    let time = [2, 5, 10];
    let result = time[Math.floor(Math.random() * time.length)];
    document.getElementById("foodResult").innerText =
        "Waiting time: " + result + " mins";
}

function exitRoute() {
    let exits = ["Exit 1 (Fast)", "Exit 2 (Medium)", "Exit 3 (Busy)"];
    let result = exits[Math.floor(Math.random() * exits.length)];
    document.getElementById("exitResult").innerText =
        "Best Exit: " + result;
}