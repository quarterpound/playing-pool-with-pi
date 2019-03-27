let box0;
let box1;
let clack;


// If you wish to get more digits of pi, you will have to increase this
const timesteps = 100000;


// Change this to get more or less digits of pi
const digits = 5;
const actualPi = "314159265358979";

let nDigitsOfPi;

let collisions = 0;

function preload () {
	clack = new Audio("clack.wav");
}

function setup () {
	createCanvas(600, 400);

	box0 = new Box(width / 4, height - 30, 30, 30, 1, 0);
	let m2 = pow(100, digits -1);
	box1 = new Box(width / 2, height - 50, 50, 50, m2, -5 / timesteps);

	nDigitsOfPi = actualPi.substring(0, digits);

	document.getElementById('digits').innerHTML = digits;
}

function draw () {
	background(0);

	let collided = false;

	for(let i = 0; i < timesteps; i++){
		if(box1.collide(box0)){
			collisions++;
			clack.play();
		};

		if(box0.hitWall()){
			collisions++;
			clack.play();
		}

		box0.update();
		box1.update();
	}

	box0.show();
	box1.show();

	if(box0.offScreen() && box1.offScreen()){
		noLoop();
	}

	document.getElementById('pi').innerHTML = collisions;

	if(collisions == nDigitsOfPi){
		document.getElementById('pi').style.color = "#4cbb17";
	}
}
