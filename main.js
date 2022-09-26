function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture
    video.hide();
    poseNet = ml5.poseNet(video,modalLoaded)
    poseNet.poseNet("pose",gotPoses)
}

function modalLoaded(){
    console.log("poseNet is Initialised")
}

function gotPoses(results){
    if(results.length > 0)
    {
    console.log(results)
    console.log("nosex = " + results[0].pose.nose.x);
    console.log("nosey = " + results[0].pose.nose.x);

 }
}

function draw(){
    image(video,0,0,350,350)
}

function take_snapshot(){
    save("mymustache.png");
}