// bacground
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let numberOfLeafes = 0;
if (canvas.width < 1024) {
  numberOfLeafes = 50;
} else if (canvas.width >= 1024 && canvas.width < 1440) {
  numberOfLeafes = 100;
} else if (canvas.width >= 1440 && canvas.width < 1920) {
  numberOfLeafes = 150;
}else {
  numberOfLeafes = 175;
}
let leafesArray = [];
const sakura = new Image();
sakura.src = "img/sakura.png";
const sakuras = new Image();
sakuras.src = "img/sakuras.png";

class Leaf {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    
    if (canvas.width < 1024) {
      this.size = Math.random() * 16 + 18;
    }else if (canvas.width >= 1024 && canvas.width <= 1440) {
      this.size = Math.random() * 18 + 20;
    }else if (canvas.width > 1440) {
      this.size = Math.random() * 20 + 25;
    }

    this.speed = Math.random() * 1.5 + 1;
    if (canvas.width >= 1920) {
      this.speed = Math.random() * 3 + 2;
    }
    this.angle = Math.random() * 360;
    this.spin = Math.random() < 0.5 ? -1 : 1; 
    this.directionX = 0;

    // sprite sheet control
    this.frameX = Math.floor(Math.random() * 3);
    this.frameY = Math.floor(Math.random() * 3);
    this.spriteSize = 300 / 3;
  }
  draw() {
    c.save();
    c.translate(this.x, this.y);
    c.rotate(this.angle * Math.PI/360 * this.spin);
    c.shadowBlur = 30;
    c.shadowColor = "pink";
    c.drawImage(sakuras, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, 0, 0, this.size, this.size )
    c.restore();
  }
  update() {
    this.angle += 2;

    if (this.y - this.size > canvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;   
      
    if (canvas.width < 1024) {
      this.size = Math.random() * 10 + 15;
    }else if (canvas.width >= 1024 && canvas.width <= 1440) {
      this.size = Math.random() * 15 + 20;
    }else if (canvas.width > 1440) {
      this.size = Math.random() * 20 + 25;
      }
      
    this.speed = Math.random() * 2 + 1;
      if (canvas.width >= 1920) {
        this.speed = Math.random() * 3 + 2;
      }
    }

    this.y += this.speed;
    this.x += this.directionX;
  }
}

function init() {
  leafesArray = [];
  for (let i = 0; i < numberOfLeafes; i++){
    leafesArray.push( new Leaf())
  }
}
init();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 1; i < leafesArray.length; i++){
    leafesArray[i].draw();
    leafesArray[i].update();
  }
}
animate();

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (canvas.width < 1024) {
    numberOfLeafes = 70;
  } else if (canvas.width >= 1024 && canvas.width < 1920) {
    numberOfLeafes = 150;
  }else {
    numberOfLeafes = 300;
  }
  init();
})

window.addEventListener('mousemove', function (e) {
  if (e.clientX < canvas.width / 2) {
    for (let i = 1; i < leafesArray.length; i++){
      leafesArray[i].directionX = 0.5 + ((e.clientX - canvas.width) / canvas.width);
    }
  } else if (e.clientX > canvas.width / 2) {
    for (let i = 1; i < leafesArray.length; i++){
      leafesArray[i].directionX = -0.5 + (e.clientX / canvas.width);
    }
  }
})



// main script
const servicePic = ['img/JS_html_css_icons_1820x522px.png', 'img/retouching_tools_icons_1460x644px.png']; // 'url("img/interior  3840x2160.png")'
const servicePicMid = ['img/JS_html_css_icons_1820x522px.png', 'img/retouching_tools_icons_1460x644px.png']; // 'url("img/interior 1024x1000.png")'
const servicePicLow = ['img/JS_html_css_icons_1820x522px.png', 'img/retouching_tools_icons_1460x644px.png']; // 'url("img/interior 600x1000.png")'
const serviceHeader = ["Web design", "Retouching"]; // "3d design"
const serviceText = ["I am a front-end developer experienced in creating modern, static websites. I handle website design and development from scratch, as well as modernization and optimization. I use the latest technologies and tools such as HTML, CSS, and JavaScript to ensure the best results. In addition I specialize in creating animated backgrounds with HTML canvas and personalized icons that will capture the attention of visitors and make your website stand out from others", "I have solid experience in retouching, color correcting and image processing wide range of photos for e-commerce and notable magazines such as Prevention, Maxim, Glamour, Men's Health, Rolling Stone, Vogue, Vanity Fair, Allure, National Geographic. With my skills and experience, I am able to handle the most demanding photo retouching tasks and provide the best results. Whether you need photos for your online store, magazine, or web, my services are perfect for you"]; // "product presentation, interior visualisation, real estate visualisation"
const serviceImg = document.querySelector('.services img');
const serviceH1 = document.querySelector('.services h1');
const serviceP = document.querySelector('.services p');
const serviceDiv = document.querySelector('.services div:last-child');
const menu = document.querySelector('.nav');
const menuLi = [...document.querySelectorAll('li')];
const burger = document.querySelector('.OliNav');
const content = document.querySelectorAll('.mainContainer>div');
const logo = document.querySelectorAll('.Oli');
const olioli = document.querySelector('.olioli');
const btnLeft = document.querySelector('.services i:nth-child(3)');
const btnRight = document.querySelector('.services i:nth-child(4)');



// logo home button
// logo.forEach(item => {
//   item.addEventListener('click', function(){
//     menu.classList.remove('active');
//     burger.classList.remove('active');
//     content.forEach(item => {
//       item.classList.remove('active');
//     })
//   })
// })

// opening menu
burger.addEventListener('click', function(){
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    
})

menuLi.forEach(li =>{
    li.addEventListener('click', function(){
        menu.classList.toggle('active');
        burger.classList.toggle('active');
        olioli.classList.add('inactive');
      
        const current = this.getAttribute('id');
        
        content.forEach(item =>{
            if(item.classList.contains(current)){
                item.classList.add('active')
            }else {
              item.classList.remove('active');
              // olioli.classList.remove('inactive')
            }
        })
    })
})


document.querySelector('#home').addEventListener('click', () => {
  olioli.classList.remove('inactive')
})


// services animation
const opacityAnimate = [
  { opacity: '0' },
  { opacity: '1' },
];

const appearAnimate = [
  { clipPath : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
  { clipPath : "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
];

const textAppearAnimate = [
  { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
  { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
];
const swipeAnimateLeft = [
  { transform: 'translate(-5px)' },
  { transform: 'translate(5px)' },
  { transform: 'translate(-5px)' },
];
const swipeAnimateRight = [
  { transform: 'translate(5px)' },
  { transform: 'translate(-5px)' },
  { transform: 'translate(5px)' },
];

const showTiming = {
  duration: 1000,
  iterations: 1,
}

const clipTiming = {
  duration: 1000,
  iterations: 1,
}

const textClipingTiming = {
  duration: 1000,
  iterations: 1,
}

const swipeTiming = {
  duration: 500,
  iterations: Infinity,
}

document.querySelector('.services i:nth-child(1)').animate(swipeAnimateLeft, swipeTiming);
document.querySelector('.services i:nth-child(2)').animate(swipeAnimateRight, swipeTiming);



// SWIPE IMPLEMENTATION

let startingY, movingY;
let startingX, movingX;
let moving = false;
let activeElement = 0;

// init styles
if (window.innerWidth <= 600 ) {
  serviceImg.src = servicePicLow[activeElement];
} else if (window.innerWidth > 600 && window.innerWidth <= 1024) {
  serviceImg.src = servicePicMid[activeElement];
} else if(window.innerWidth > 1024){
  serviceImg.src = servicePic[activeElement];
}
serviceH1.textContent = serviceHeader[activeElement];
serviceP.textContent = serviceText[activeElement];

document.querySelector('.mainContainer').addEventListener('touchstart', (e) => {
  startingY = e.touches[0].clientY;
  startingX = e.touches[0].clientX;
});

document.querySelector('.mainContainer').addEventListener('touchmove', (e) => {
  moving = true;
  movingY = e.touches[0].clientY;
  movingX = e.touches[0].clientX;
});

document.querySelector('.mainContainer').addEventListener('touchend', (e) => {

  // swipe left
  if( startingX - movingX < -100){
    activeElement++;
// jeśli dodam pozycję do tablicy to trzeba zmienić active element na 3, itd
    if(activeElement == 2){
        activeElement = 0
    }
  
    if (window.innerWidth <= 600 ) {
      serviceImg.src = servicePicLow[activeElement];
    } else if (window.innerWidth > 600 && window.innerWidth <= 1024) {
      serviceImg.src = servicePicMid[activeElement];
    } else if(window.innerWidth > 1024){
      serviceImg.src = servicePic[activeElement];
    }
    serviceH1.textContent = serviceHeader[activeElement];
    serviceP.textContent = serviceText[activeElement];

    serviceDiv.animate(appearAnimate, clipTiming);
    serviceH1.animate(appearAnimate, clipTiming);
    serviceP.animate(textAppearAnimate, textClipingTiming);
    serviceImg.animate(opacityAnimate, showTiming);
  }

  // swipe right
  if( startingX - movingX > 100){
    activeElement--;
// jeśli dodam pozycję do tablicy to trzeba zmienić active element z 1 na 2, itd
    if(activeElement == -1){
        activeElement = 1
    }
  
    if (window.innerWidth <= 600 ) {
      serviceImg.src = servicePicLow[activeElement];
    } else if (window.innerWidth > 600 && window.innerWidth <= 1024) {
      serviceImg.src = servicePicMid[activeElement];
    } else if(window.innerWidth > 1024){
      serviceImg.src = servicePic[activeElement];
    }
    serviceH1.textContent = serviceHeader[activeElement];
    serviceP.textContent = serviceText[activeElement];

    serviceDiv.animate(appearAnimate, clipTiming);
    serviceH1.animate(appearAnimate, clipTiming);
    serviceP.animate(textAppearAnimate, textClipingTiming);
    serviceImg.animate(opacityAnimate, showTiming);
  }

  // swipe up
  if( startingY - movingY > 100 ){
    activeElement--;
// jeśli dodam pozycję do tablicy to trzeba zmienić active element z 1 na 2, itd
    if(activeElement == -1){
      activeElement = 1
  }

  if (window.innerWidth <= 600 ) {
    serviceImg.src = servicePicLow[activeElement];
  } else if (window.innerWidth > 600 && window.innerWidth <= 1024) {
    serviceImg.src = servicePicMid[activeElement];
  } else if(window.innerWidth > 1024){
    serviceImg.src = servicePic[activeElement];
  }
  serviceH1.textContent = serviceHeader[activeElement];
  serviceP.textContent = serviceText[activeElement];

  serviceDiv.animate(appearAnimate, clipTiming);
  serviceH1.animate(appearAnimate, clipTiming);
  serviceP.animate(textAppearAnimate, textClipingTiming);
  serviceImg.animate(opacityAnimate, showTiming);
}
  }
    );

// services button for desktop
btnLeft.addEventListener('click', () => {
  activeElement--;
// jeśli dodam pozycję do tablicy to trzeba zmienić active element z 1 na 2, itd
    if(activeElement == -1){
        activeElement = 1
  }
  
  if (window.innerWidth <= 600 ) {
    serviceImg.src = servicePicLow[activeElement];
  } else if (window.innerWidth > 600 && window.innerWidth <= 1024) {
    serviceImg.src = servicePicMid[activeElement];
  } else if(window.innerWidth > 1024){
    serviceImg.src = servicePic[activeElement];
  }
  serviceH1.textContent = serviceHeader[activeElement];
  serviceP.textContent = serviceText[activeElement];

  serviceDiv.animate(appearAnimate, clipTiming);
  serviceH1.animate(appearAnimate, clipTiming);
  serviceP.animate(textAppearAnimate, textClipingTiming);
  serviceImg.animate(opacityAnimate, showTiming);
})

btnRight.addEventListener('click', () => {
  activeElement++;
// jeśli dodam pozycję do tablicy to trzeba zmienić active element na 3, itd
    if(activeElement == 2){
        activeElement = 0
  }
  
  if (window.innerWidth <= 600 ) {
    serviceImg.src = servicePicLow[activeElement];
  } else if (window.innerWidth > 600 && window.innerWidth <= 1024) {
    serviceImg.src = servicePicMid[activeElement];
  } else if(window.innerWidth > 1024){
    serviceImg.src = servicePic[activeElement];
  }
  serviceH1.textContent = serviceHeader[activeElement];
  serviceP.textContent = serviceText[activeElement];

  serviceDiv.animate(appearAnimate, clipTiming);
  serviceH1.animate(appearAnimate, clipTiming);
  serviceP.animate(textAppearAnimate, textClipingTiming);
  serviceImg.animate(opacityAnimate, showTiming);
})