Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 134567890,
    constraints:
    {facingMode:"enviroment"}
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap( function (data_uri){
        document.getElementById("result").innerHTML= "<img id='capture_image' src='" + data_uri+ "'/>";
    });}

    console.log("ml5.version",ml5.verson);

    classifier=ml5.imageClassifier("MobileNet",modelLoaded);

    function modelLoaded(){
        console.log("model loaded!!!")
    }

function check(){
    image=document.getElementById("capture_image");
    classifier.classify(image,gotResults);
}

function gotResults(error,results){
 if(error){
     console.log(error);
 }
     else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
     }
 }

    
    
