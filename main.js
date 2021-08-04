NoseX = 0;
NoseY = 0;


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snap() {
    save("pic1.jpg");
}

function draw() {
    image(video, 0, 0, 300, 300);
    //fill("red");
    //stroke("red");
    //circle(NoseX, NoseY, 20);
    image(clown_nose, NoseX, NoseY, 30, 30);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x - 15;
        NoseY = results[0].pose.nose.y + 20;

    }

}