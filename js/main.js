const video= document.getElementById("video");

function startStream(){
    navigator.getUserMedia(
        { video: {} },
        stream => (video.srcObject = stream),
        err=>console.log(err)
    );
}

startStream();