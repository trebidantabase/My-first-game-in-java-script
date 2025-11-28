
function setup() {
  createCanvas(screen.width, screen.height);
  initGame()
    background(200);
    describe('A gray canvas that switches between default and full-screen display when clicked.');
}

// If the mouse is pressed,
// toggle full-screen mode.
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }



}

function initGame(){
  barres = []
  positionY =-0
  positionX =200
  vitesse = 0
  vitesseBloc = 0.5
  mort = false
 // barres.push( new Rectangle('red'))

let intervalBarres=setInterval(()=>{barres.push( new Rectangle('red'))},random(5000,15000))
let intervalVitesse;


  // Nettoyer les anciens timers
  if(intervalBarres) clearInterval(intervalBarres);
  if(intervalVitesse) clearInterval(intervalVitesse);
  
  barres = [];
  positionY = -0;
  // ... etc
  
  intervalBarres = setInterval(() => {
    barres.push(new Rectangle('red'))
  }, random(5000,15000));
  
  intervalVitesse = setInterval(() => {
    vitesseBloc += 0.15
  }, 5000);

}

let positionY =0
let positionX =screen.width
let vitesse =0
const gravite=1
let vitesseBloc=1
let mort = false
let taille = 30
let show_bonus = false

class Rectangle {
  constructor(couleur) {
    this.x = width
    this.h = random(30,600);
    this.w = random(10,40);
    this.couleur = color(random(20,255), random(20,20), random(20,255));
        }
  move(){
    if(!mort){
    this.x = this.x - vitesseBloc
    }
  }
}
 class gel {
  constructor(x, y, h, w, color) {
    this.x = random (0, width);
    this.y = random(10, height/1.5);
    this.h = 20
    this.w = 20
    this.couleur = color(random(20,255), random(20,20), random(20,255));
  }
}

let barres
if (show_bonus == true )
  {
    
  }


setInterval(()=>{vitesseBloc = vitesseBloc + 0.15},5000)
function draw() {
  
  background(mort ? 255 : 0);
  
  stroke(0,255,0);
  strokeWeight(taille);
  point(positionX,positionY)
  if(!mort){
  vitesse = vitesse + gravite
  positionY = positionY + vitesse
  
    if (keyIsDown(81) === true){
      positionX = positionX - 6
    }
    if (keyIsDown (68) === true){
      positionX = positionX + 6

    }  
  }
  
  
  if(positionY >= screen.height-15){
     vitesse=(-vitesse)/1.5
      positionY = screen.height-15
    
  }
  
  for (let barre of barres){
    stroke(barre.couleur)
    strokeWeight(1)
    fill(barre.couleur)
    
    rect(barre.x,height-barre.h,barre.w,barre.h)
    const hg = [barre.x,height-barre.h]
    const bd = [barre.x+barre.w,height]
    
    if((positionX+taille/2 > hg[0] && positionX-taille/2 < bd[0] && positionY+taille/2 > hg[1] && positionY-taille/2 < height && !mort || positionX == 0 )|| positionX == width){
       mort = true
       setTimeout(initGame,3000)
    }
    barre.move()
    
    if(barre.x-barre.w < 0){
      barre.x = width
    }
  }
  
  

}

function keyPressed() {

  if (keyCode === 32) {
    // Code to run.
    if(positionY===screen.height-15){
      vitesse = -40       
    }
    
  }
}
