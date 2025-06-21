            var typed = new Typed(".typewriter-text",
    {
        strings: [" ",
            "Purificação",

            "Oxigênio",

            "Feira Tecnológica",
            
            "Matias Machline"
        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop:true
        
    }
)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['#45f6cb', '#0000FF', '#00b3d6']; 

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1; 
        this.speedX = Math.random() * 3 - 1.5; 
        this.speedY = Math.random() * 3 - 1.5; 
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.95; 
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

       
        if (particlesArray[i].size <= 0.5) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}


window.addEventListener('mousemove', (event) => {
    const mouseX = event.x;
    const mouseY = event.y;
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle(mouseX, mouseY));
    }
});


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

