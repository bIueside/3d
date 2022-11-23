let canvas;

let audio;

var a= -1500;

let angle = 0;

let graphics;

let graphics2;

let eye;

var b = -2000;

function preload() {
eye = loadModel('assets/eyeball.obj', true);
}

function setup() {
canvas= createCanvas(windowWidth, windowHeight, WEBGL);
canvas.position(0,0);

frameRate (50);

audio = createAudio('assets/heart.mp3'); 
audio.autoplay(true);
audio.loop();

graphics = createGraphics (200,200);
graphics.fill (255);
graphics.textAlign (CENTER);
graphics.text("b  u  r  n  o  u  t", 150, 50);

graphics2 = createGraphics (200,200);
graphics2.fill (225);
graphics2.textAlign (CENTER);
graphics2.text("L   A   Z   Y", 150, 50);
}

function draw(){
background(0);

push ();
ambientLight(100);
pointLight(255, 255, 255, -600, -50 , -100);
specularMaterial(150);
shininess(50);
translate(0, 0, a);
noStroke();
torus (100,10,50,50);
a=a+30;
if (a > 900) {
a= -1500
}
pop();

push ();
ambientLight(100);
pointLight(255, 255, 255, -600, -50 , -100);
specularMaterial(100);
shininess(50);
translate(0, 0, a);
noStroke();
torus (50,5,50,50);
a=a+30;
if (a > 900) {
a= -1500
}
pop();

push ();
ambientLight(100);
pointLight(255, 255, 255, -600, -50 , -100);
specularMaterial(50);
shininess(50);
translate(0, 0, a);
noStroke();
torus (25,2.5,50,50);
a=a+30;
if (a > 900) {
a= -1500
}
pop();

push();
ambientLight(100);
pointLight(255, 255, 255, -600, -50 , -100);
texture (graphics2);
translate(-400, 100, 0);
rotateX(angle);
rotateY(angle * 1.3);
rotateZ(angle * 0.7);
noStroke();
plane (500);
angle += 0.03; 
pop();

push();
ambientLight(100);
pointLight(255, 255, 255, 600, 50 , 100);
texture (graphics);
translate(400, -100, 0);
rotateX(angle);
rotateY(angle * 1);
rotateZ(angle * 0.5);
noStroke();
plane(500);
angle += 0.01; 
pop();

push();
ambientLight(100);
pointLight(255, 255, 255, -300, -25 , -50);
texture (graphics2);
translate(500, 200, 0);
rotateX(angle*0.3);
rotateY(angle);
rotateZ(angle * 0.5);
noStroke();
box (300, 600, 200);
angle += 0.01; 
pop();

push();
ambientLight(100);
pointLight(255, 255, 255, -300, -25, -50);
texture (graphics);
translate(-500, -200, 0);
rotateX(angle*1);
rotateY(angle);
rotateZ(angle*0.7);
noStroke();
box (300, 600, 200);
angle += 0.01; 
pop();

push ();
scale(1);
translate(0, 0, b); 
ambientLight(255, 255, 255);
directionalLight(138,5, 5, 100, 5000 , -8000);
lightFalloff(1, 0, 0);
specularMaterial(138,5, 5);
shininess(10);
strokeWeight(0.5);
model(eye);
b=b+30;
if (b > 100) {
b= -2000
}
pop();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}