function showSurprise() {
    document.getElementById("surprise-section").classList.remove("hidden");
}

function sayYes() {
    document.getElementById("photo-popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("photo-popup").classList.add("hidden");
}

// Make NO button run away
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function() {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 200) - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
