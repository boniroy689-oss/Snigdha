// ===== Loader =====

const loader = document.getElementById("loader");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);

    createStars();
    createPetals();

};

// ===== Continue Button =====

function nextSection() {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
}

// ===== Stars =====

function createStars() {

    const stars = document.getElementById("stars");

    for(let i=0;i<180;i++){

        let s=document.createElement("div");

        s.style.position="absolute";
        s.style.width="2px";
        s.style.height="2px";
        s.style.borderRadius="50%";
        s.style.background="white";

        s.style.left=Math.random()*100+"vw";
        s.style.top=Math.random()*100+"vh";

        s.style.opacity=Math.random();

        s.animate([
            {opacity:.2},
            {opacity:1},
            {opacity:.2}
        ],{
            duration:1500+Math.random()*3000,
            iterations:Infinity
        });

        stars.appendChild(s);

    }

}

// ===== Petals =====

function createPetals(){

const petals=document.getElementById("petals");

setInterval(()=>{

let p=document.createElement("div");

p.innerHTML="🌸";

p.style.position="absolute";

p.style.left=Math.random()*100+"vw";

p.style.top="-30px";

p.style.fontSize=(18+Math.random()*20)+"px";

p.animate([

{
transform:"translateY(0) rotate(0deg)"
},

{
transform:`translateY(${window.innerHeight+100}px) rotate(360deg)`
}

],{

duration:7000+Math.random()*3000,

easing:"linear"

});

petals.appendChild(p);

setTimeout(()=>{

p.remove();

},10000);

},500);

}

// ===== Proposal =====

const popup=document.getElementById("popup");

document.getElementById("yes").onclick=()=>{

popup.style.display="flex";

popup.innerHTML=`

<div class="popupCard">

<h2>❤️</h2>

<h3>Thank You, Snigdha</h3>

<p>

Whether today becomes the beginning of something new or not,

I'm genuinely happy that you took the time to read everything.

Happy Girlfriend Day 🌸

— Boni

</p>

<button onclick="location.reload()">

Close

</button>

</div>

`;

confetti();

}

document.getElementById("time").onclick=()=>{

popup.style.display="flex";

popup.innerHTML=`

<div class="popupCard">

<h2>🌸</h2>

<h3>Take Your Time</h3>

<p>

Thank you for reading this.

No matter what your answer is,

I respect it.

❤️

</p>

<button onclick="popup.style.display='none'">

Close

</button>

</div>

`;

}

// ===== Confetti =====

function confetti(){

for(let i=0;i<200;i++){

let c=document.createElement("div");

c.style.position="fixed";
c.style.left=Math.random()*100+"vw";
c.style.top="-20px";
c.style.width="8px";
c.style.height="8px";
c.style.background=`hsl(${Math.random()*360},100%,60%)`;
c.style.borderRadius="50%";
c.style.zIndex="9999";

document.body.appendChild(c);

c.animate([
{
transform:"translateY(0) rotate(0deg)"
},
{
transform:`translateY(${window.innerHeight+100}px) rotate(720deg)`
}
],{
duration:3000+Math.random()*2000,
easing:"linear"
});

setTimeout(()=>c.remove(),5000);

}

}