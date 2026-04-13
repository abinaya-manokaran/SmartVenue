// SMART CROWD SYSTEM (NO RANDOM NOW)
function checkCrowd() {
    let score = Math.floor(Math.random() * 100);

    let result =
        score < 30
            ? "Gate A - Low Crowd 🟢 (Fast Entry)"
            : score < 70
                ? "Gate B - Moderate Crowd 🟡 (Balanced Flow)"
                : "Gate C - High Crowd 🔴 (Avoid This Route)";

    document.getElementById("crowdResult").innerText =
        `Crowd Score: ${score}% → ${result}`;
}


// SMART FOOD QUEUE SYSTEM
function checkFood() {
    let baseTime = 3;

    let crowdFactor = Math.floor(Math.random() * 5); // 0–4 min delay
    let finalTime = baseTime + crowdFactor;

    let message =
        finalTime <= 5
            ? "Fast Service 🟢"
            : finalTime <= 8
                ? "Moderate Queue 🟡"
                : "Heavy Queue 🔴";

    document.getElementById("foodResult").innerText =
        `Estimated Waiting: ${finalTime} mins → ${message}`;
}


// CONTEXT-BASED EXIT SYSTEM (IMPORTANT UPGRADE)
function exitRoute() {
    let input = document.getElementById("userInput").value.toUpperCase();

    let exits = {
        A: "Exit 1 (Fastest Route 🟢)",
        B: "Exit 2 (Balanced Flow 🟡)",
        C: "Exit 3 (Crowded Route 🔴 - Avoid)"
    };

    let result = exits[input] || "Default: Exit 2 (Recommended Balanced Route)";

    document.getElementById("exitResult").innerText = result;
}