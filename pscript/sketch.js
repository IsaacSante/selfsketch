let obj, pg;
let datanew, loopdata, datalength, dl;
var url = 'comment.json';

function preload() { 
  obj = loadModel('models/rl.obj', true)
} 

function setup() {
  createCanvas(windowWidth/3, windowHeight/1.2, WEBGL);
  pg = createGraphics(width, height)
  background(255,0)
  fetch(url)
    .then(response => response.json())
    .then(json => {
         datanew = json.media_comments; 
          dl = datanew.length
              })
    .catch(err => console.log(err)) 
}

function draw() {
    // clear()
      background(0,100)
      noStroke()
      rotateZ(PI)
      rotateX(QUARTER_PI/4)
      rotateY(radians(frameCount/2))
      rotateY(radians(40))
      scale(3)
      model(obj)
      pg.clear()
      pg.push()
      pg.background(255,200)
      pg.translate(pg.width/2, pg.height)
      pg.rotate(radians(180))
      pg.textAlign(LEFT, CENTER)
      pg.randomSeed(4)
        fill(255)
        for(let i = 0; i < dl; i++) {
            let txtSize = 300
            let x = (pg.random(pg.width)+frameCount*2.5)%(pg.width+txtSize)-pg.width/2
            let y = i * 50
            pg.textSize(50)
            pg.fill(0)
            pg.text(datanew[i][1],-x, y)
        }
      pg.pop()
      texture(pg)
}