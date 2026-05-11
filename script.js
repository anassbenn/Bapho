function copyAddress() {
    const address = document.getElementById("contractAddress").innerText;
    navigator.clipboard.writeText(address).then(() => {
        const btn = document.querySelector(".copy-btn");
        btn.innerText = "COPIED!";
        btn.style.background = "#ffd700";
        btn.style.color = "#000";
        
        setTimeout(() => {
            btn.innerText = "COPY";
            btn.style.background = "#ff0000";
            btn.style.color = "#fff";
        }, 2000);
    });
}
