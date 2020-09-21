let obj, pg;
let lon, lan , con, humidity, zone, temp, nameV, descVal, size, cam;
let datanew, loopdata, datalength, dl;
var url = 'comment.json';

function preload() { 
  obj = loadModel('rl.obj', true)
} 

function setup() {
  createCanvas(800, 800, WEBGL);
  pg = createGraphics(width, height)
  background(0)
   fetch(url)
  .then(response => response.json())
  .then(json => {
       datanew = json.media_comments; 
        dl = datanew.length
            })
  .catch(err => console.log(err)) 
  
 
}

function draw() {
   for(a = 0 ; a < dl; a++){
     for (b = 0; b < datanew[a].length; b++) {
        loopdata= datanew[a][1]
     }
  }
  
   //background(255)
  	clear()
   background(0)
	//stroke(200)
    noStroke()
	rotateZ(PI)
	rotateX(QUARTER_PI/4)
	rotateY(radians(frameCount/2))
	rotateY(radians(40))
	scale(3)
	model(obj)
	pg.clear()
	pg.push()
	pg.background(0)
	pg.translate(pg.width/2, pg.height)
	pg.rotate(radians(180))
	pg.textAlign(LEFT, CENTER)
	pg.randomSeed(4)
	for(let i = 0; i < 900; i++) {
		let txtSize = 300
		let x = (pg.random(pg.width)+frameCount)%(pg.width+txtSize)-pg.width/2
		let y = i * 40
		pg.textSize(200)
		pg.text(loopdata, -x, y)
	}
	pg.pop()
	texture(pg)
}