function showSurprise() {
    document.getElementById("surprise-section").classList.remove("hidden");
}

function sayYes() {
    document.getElementById("photo-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("photo-popup").style.display = "none";
}

// Make NO button run away
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function() {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 200) - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
