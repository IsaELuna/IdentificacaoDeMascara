function setup() {
    anvas = createCanvas(300, 300);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    classifier = n15.imageClassifier("https://teachablemachine.withgoogle.com/models/DibC1voZ2/", modelLoaded)
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else { 
     console.log(results);
     document.getElementById("result_object_name").innerHTML = results[0].label;
     document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
