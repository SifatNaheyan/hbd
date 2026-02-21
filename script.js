// 🎁 Surprise Section + Fireworks
function showSurprise() {
    document.getElementById("surprise-section").classList.remove("hidden");
    startFireworks();
}

// ❤️ YES Section + Love Symbol
function sayYes() {
    document.getElementById("photo-popup").style.display = "flex";
    showLoveSymbol();
}

function closePopup() {
    document.getElementById("photo-popup").style.display = "none";
}

// ❌ NO Button runs away
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function() {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 200) - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// 💖 Show floating love symbol
function showLoveSymbol() {
    const love = document.getElementById("love-symbol");
    love.classList.remove("hidden");
    setTimeout(() => love.classList.add("hidden"), 2000);
}

// 🎆 Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max){ return Math.random()*(max-min)+min; }

let particles = [];

function createParticles(x, y){
    for(let i=0;i<30;i++){
        particles.push({
            x:x,
            y:y,
            vx:random(-3,3),
            vy:random(-3,3),
            alpha:1,
            color:`hsl(${Math.random()*360},100%,50%)`
        });
    }
}

function updateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=particles.length-1;i>=0;i--){
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;
        if(p.alpha<=0) particles.splice(i,1);
        else{
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x,p.y,3,0,Math.PI*2);
            ctx.fill();
        }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(updateParticles);
}

function startFireworks(){
    const x = canvas.width/2;
    const y = canvas.height/2;
    createParticles(x, y);
}

updateParticles();
