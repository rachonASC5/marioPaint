function setup(){
    createCanvas(500,500);
    background("blue");

    fill("black");
    rect(50,300,50,50);

    fill("red");
    rect(150,300,50,50);

    fill("yellow");
    rect(250,300,50,50);
    
}

function mouseDragged() {
    let x = random([50],[100]);
    let y = random([50],[100]);
    ellipse( mouseX,mouseY,x,y); 
}
 
function mouseClicked(){
    if (mouseX>50 && mouseX<100 && mouseY>300 && mouseY<350){
        fill("black");
    } else if (mouseX>150 && mouseX<200 && mouseY>300 && mouseY<350){
        fill("red");
    } else if (mouseX>250 && mouseX<300 && mouseY>300 && mouseY<350){
        fill("yellow")
    }
}