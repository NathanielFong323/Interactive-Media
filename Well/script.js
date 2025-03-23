// Edited from DeepSeek with prompt "Based on MMO Dialogue option, how to code it with css html"
document.addEventListener("DOMContentLoaded", function () {
    const peerButton = document.getElementById("Kick");
    const throwCoinButton = document.getElementById("Ignore");
    const callOutButton = document.getElementById("Greet");
    const npcResponse = document.getElementById("NpcResponse");

    // Kick the Old Man
    peerButton.addEventListener("click", function () {
        npcResponse.textContent = "ARRGGH!? Blasted Kangaroo, PISS OFF!!";
        npcResponse.style.display = "block";
    });

    // Ignore the Old Man
    throwCoinButton.addEventListener("click", function () {
        npcResponse.textContent = "Great, now even a dumb kangaroo is ignoring me, that's a new low for me in this bloody well";
        npcResponse.style.display = "block";
    });

    // Greet the Old Man
    callOutButton.addEventListener("click", function () {
        npcResponse.textContent = "So we now have talking kangaroos huh... The world must be ending.";
        npcResponse.style.display = "block";
    });
});