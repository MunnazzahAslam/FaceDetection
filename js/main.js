const video= document.getElementById("video");

function startStream(){
    navigator.mediaDevices.getUserMedia({video: {}}) .then((stream)=> {video.srcObject = stream;}, (err)=> console.error(err));
}

startStream();