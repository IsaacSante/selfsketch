let obj, pg,datanew,datalength, dl, move;
 var url = 'comment.json';

 function preload() { 
  obj = loadModel('models/medi.obj', true)
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
      background(255,0,0,0)
      noStroke()
      rotateZ(PI)
      rotateX((QUARTER_PI/4))  
      rotateY(radians(180))
      scale(3)
      model(obj)
      pg.clear()
      pg.push()
      pg.background(0,0,0)
      pg.translate(pg.width/2, pg.height)
      pg.rotate(radians(191))
      pg.textAlign(LEFT, CENTER)
      pg.randomSeed(4)
        fill(255)
        for(let i = 0; i < dl; i++) {
            let txtSize = 100
            let x = (pg.random(pg.width)+frameCount*2)%(pg.width+txtSize)-pg.width/2
            let y = i * 500
            pg.textSize(700)
            pg.fill(255)
            pg.text(datanew[i][1],-x, y)
            pg.text(datanew[i][1],width/2, height/2)
        }
      pg.pop()
      texture(pg)
}