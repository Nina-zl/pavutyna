// // helper functions
// const PI2 = Math.PI * 2
// const random = (min, max) => Math.random() * (max - min + 1) + min | 0
// const timestamp = _ => new Date().getTime()

// // container
// class Birthday {
//   constructor() {
//     this.resize()

//     // create a lovely place to store the firework
//     this.fireworks = []
//     this.counter = 0

//   }
  
//   resize() {
//     this.width = canvas.width = window.innerWidth
//     let center = this.width / 2 | 0
//     this.spawnA = center - center / 4 | 0
//     this.spawnB = center + center / 4 | 0
    
//     this.height = canvas.height = window.innerHeight
//     this.spawnC = this.height * .1
//     this.spawnD = this.height * .5
    
//   }
  
//   onClick(evt) {
//      let x = evt.clientX || evt.touches && evt.touches[0].pageX
//      let y = evt.clientY || evt.touches && evt.touches[0].pageY
     
//      let count = random(3,5)
//      for(let i = 0; i < count; i++) this.fireworks.push(new Firework(
//         random(this.spawnA, this.spawnB),
//         this.height,
//         x,
//         y,
//         random(0, 260),
//         random(30, 110)))
          
//      this.counter = -1
     
//   }
  
//   update(delta) {
//     ctx.globalCompositeOperation = 'hard-light'
//     ctx.fillStyle = `rgba(20,20,20,${ 7 * delta })`
//     ctx.fillRect(0, 0, this.width, this.height)

//     ctx.globalCompositeOperation = 'lighter'
//     for (let firework of this.fireworks) firework.update(delta)

//     // if enough time passed... create new new firework
//     this.counter += delta * 3 // each second
//     if (this.counter >= 1) {
//       this.fireworks.push(new Firework(
//         random(this.spawnA, this.spawnB),
//         this.height,
//         random(0, this.width),
//         random(this.spawnC, this.spawnD),
//         random(0, 360),
//         random(30, 110)))
//       this.counter = 0
//     }

//     // remove the dead fireworks
//     if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

//   }
// }

// class Firework {
//   constructor(x, y, targetX, targetY, shade, offsprings) {
//     this.dead = false
//     this.offsprings = offsprings

//     this.x = x
//     this.y = y
//     this.targetX = targetX
//     this.targetY = targetY

//     this.shade = shade
//     this.history = []
//   }
//   update(delta) {
//     if (this.dead) return

//     let xDiff = this.targetX - this.x
//     let yDiff = this.targetY - this.y
//     if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
//       this.x += xDiff * 2 * delta
//       this.y += yDiff * 2 * delta

//       this.history.push({
//         x: this.x,
//         y: this.y
//       })

//       if (this.history.length > 20) this.history.shift()

//     } else {
//       if (this.offsprings && !this.madeChilds) {
        
//         let babies = this.offsprings / 2
//         for (let i = 0; i < babies; i++) {
//           let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
//           let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

//           birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

//         }

//       }
//       this.madeChilds = true
//       this.history.shift()
//     }
    
//     if (this.history.length === 0) this.dead = true
//     else if (this.offsprings) { 
//         for (let i = 0; this.history.length > i; i++) {
//           let point = this.history[i]
//           ctx.beginPath()
//           ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
//           ctx.arc(point.x, point.y, 1, 0, PI2, false)
//           ctx.fill()
//         } 
//       } else {
//       ctx.beginPath()
//       ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
//       ctx.arc(this.x, this.y, 1, 0, PI2, false)
//       ctx.fill()
//     }

//   }
// }

// let canvas = document.getElementById('birthday')
// let ctx = canvas.getContext('2d')

// let then = timestamp()

// let birthday = new Birthday
// window.onresize = () => birthday.resize()
// document.onclick = evt => birthday.onClick(evt)
// document.ontouchstart = evt => birthday.onClick(evt)

//   ;(function loop(){
//   	requestAnimationFrame(loop)

//   	let now = timestamp()
//   	let delta = now - then

//     then = now
//     birthday.update(delta / 1000)
  	

//   })()








//-----------Var Inits--------------
// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// cx = ctx.canvas.width / 2;
// cy = ctx.canvas.height / 2;

// let confetti = [];
// const confettiCount = 300;
// const gravity = 0.5;
// const terminalVelocity = 5;
// const drag = 0.075;
// const colors = [
// { front: 'red', back: 'darkred' },
// { front: 'green', back: 'darkgreen' },
// { front: 'blue', back: 'darkblue' },
// { front: 'yellow', back: 'darkyellow' },
// { front: 'orange', back: 'darkorange' },
// { front: 'pink', back: 'darkpink' },
// { front: 'purple', back: 'darkpurple' },
// { front: 'turquoise', back: 'darkturquoise' }];


// //-----------Functions--------------
// resizeCanvas = () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   cx = ctx.canvas.width / 2;
//   cy = ctx.canvas.height / 2;
// };

// randomRange = (min, max) => Math.random() * (max - min) + min;

// initConfetti = () => {
//   for (let i = 0; i < confettiCount; i++) {
//     confetti.push({
//       color: colors[Math.floor(randomRange(0, colors.length))],
//       dimensions: {
//         x: randomRange(10, 20),
//         y: randomRange(10, 30) },

//       position: {
//         x: randomRange(0, canvas.width),
//         y: canvas.height - 1 },

//       rotation: randomRange(0, 2 * Math.PI),
//       scale: {
//         x: 1,
//         y: 1 },

//       velocity: {
//         x: randomRange(-25, 25),
//         y: randomRange(0, -50) } });


//   }
// };

// //---------Render-----------
// render = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   confetti.forEach((confetto, index) => {
//     let width = confetto.dimensions.x * confetto.scale.x;
//     let height = confetto.dimensions.y * confetto.scale.y;

//     // Move canvas to position and rotate
//     ctx.translate(confetto.position.x, confetto.position.y);
//     ctx.rotate(confetto.rotation);

//     // Apply forces to velocity
//     confetto.velocity.x -= confetto.velocity.x * drag;
//     confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
//     confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

//     // Set position
//     confetto.position.x += confetto.velocity.x;
//     confetto.position.y += confetto.velocity.y;

//     // Delete confetti when out of frame
//     if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

//     // Loop confetto x position
//     if (confetto.position.x > canvas.width) confetto.position.x = 0;
//     if (confetto.position.x < 0) confetto.position.x = canvas.width;

//     // Spin confetto by scaling y
//     confetto.scale.y = Math.cos(confetto.position.y * 0.1);
//     ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

//     // Draw confetti
//     ctx.fillRect(-width / 2, -height / 2, width, height);

//     // Reset transform matrix
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//   });

//   // Fire off another round of confetti
//   if (confetti.length <= 10) initConfetti();

//   window.requestAnimationFrame(render);
// };

// //---------Execution--------
// initConfetti();
// render();

// //----------Resize----------
// window.addEventListener('resize', function () {
//   resizeCanvas();
// });

// //------------Click------------
// window.addEventListener('click', function () {
//   initConfetti();
// });



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cx = ctx.canvas.width / 2;
const cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
    { front: '#D7141D', back: '#9B0C10' },
    { front: '#273285', back: '#1A2255' }
];

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function initConfetti() {
    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            color: colors[Math.floor(randomRange(0, colors.length))],
            dimensions: {
                x: randomRange(10, 20),
                y: randomRange(10, 30)
            },
            position: {
                x: randomRange(0, canvas.width),
                y: canvas.height - 1
            },
            rotation: randomRange(0, 2 * Math.PI),
            scale: { x: 1, y: 1 },
            velocity: {
                x: randomRange(-25, 25),
                y: randomRange(0, -50)
            }
        });
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((confetto, index) => {
        let width = confetto.dimensions.x * confetto.scale.x;
        let height = confetto.dimensions.y * confetto.scale.y;
        ctx.translate(confetto.position.x, confetto.position.y);
        ctx.rotate(confetto.rotation);
        confetto.velocity.x -= confetto.velocity.x * drag;
        confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
        confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
        confetto.position.x += confetto.velocity.x;
        confetto.position.y += confetto.velocity.y;
        if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
        if (confetto.position.x > canvas.width) confetto.position.x = 0;
        if (confetto.position.x < 0) confetto.position.x = canvas.width;
        confetto.scale.y = Math.cos(confetto.position.y * 0.1);
        ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
        ctx.fillRect(-width / 2, -height / 2, width, height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    });
    if (confetti.length > 0) {
        requestAnimationFrame(render);
    }
}

function startConfetti() {
    initConfetti();
    render();
    setTimeout(() => {
        confetti = [];
    }, 5000);
}

window.onload = startConfetti();