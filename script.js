// ===========================
// Smooth Scroll Active Nav
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ===========================
// Reveal Animation
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.project,.about-text,.stats div")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".stats h2");

const speed = 120;

counters.forEach(counter=>{

let update = ()=>{

const target = +counter.innerText.replace("+","").replace("%","");

const count = +counter.dataset.count || 0;

const inc = target/speed;

if(count<target){

counter.dataset.count=Math.ceil(count+inc);

counter.innerText=Math.ceil(count+inc)+"+";

requestAnimationFrame(update);

}
else{

if(counter.innerText.includes("%"))
counter.innerText=target+"%";
else if(counter.innerText.includes("/"))
counter.innerText="24/7";
else
counter.innerText=target+"+";

}

}

update();

});


// ===========================
// Navbar Blur
// ===========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(20,20,20,.75)";

}
else{

nav.style.background="rgba(255,255,255,.06)";

}

});


// ===========================
// Back To Top Button
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:30px;
bottom:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#2997ff;
color:#fff;
font-size:24px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 15px 30px rgba(0,0,0,.4);
`;

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ===========================
// Typing Effect
// ===========================

const role=document.querySelector(".hero-left h2");

const text="Full Stack Developer";

let i=0;

role.innerHTML="";

function typing(){

if(i<text.length){

role.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


// ===========================
// Hero Image Float
// ===========================

const heroImage=document.querySelector(".hero-right img");

let direction=1;

setInterval(()=>{

heroImage.style.transform=`translateY(${direction*10}px)`;

direction*=-1;

},1800);


// ===========================
// Contact Button
// ===========================

document.querySelectorAll(".primary-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// ===========================
// Console Message
// ===========================

console.log("%cDesigned & Developed by DHINESH KARTHIK M 🚀",
"font-size:18px;color:#2997ff;font-weight:bold;");
