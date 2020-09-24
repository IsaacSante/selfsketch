let obj, pg, datanew, datalength, dl;
var url = 'comment.json';
function preload() { 
  obj = loadModel('models/bb.obj', true)
} 
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pg = createGraphics(width, height)
  background(255)
  fetch(url)
    .then(response => response.json())
    .then(json => {
         datanew = json.media_comments; 
          dl = datanew.length
              })
    .catch(err => console.log(err)) 
}

function draw() {
     background(255,0)
      noStroke()
      rotateZ(PI)
      rotateX(QUARTER_PI/4)
      rotateY(radians(frameCount/2))
      rotateY(radians(40))
      scale(3.5)
      model(obj)
      pg.clear()
      pg.push()
      pg.background(255,1)
      pg.translate(pg.width/2, pg.height)
      pg.rotate(radians(180))
      pg.textAlign(LEFT, CENTER)
      pg.randomSeed(4)
        fill(255)
        for(let i = 0; i < dl; i++) {
            let txtSize = 20
            let x = (pg.random(pg.width)+frameCount*5)%(pg.width+txtSize)-pg.width/2
            let y = i * 50
            pg.textSize(80)
            pg.fill(255,220)
            pg.text(datanew[i][0],x, y)
        }
      pg.pop()
      texture(pg)
}