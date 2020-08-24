const video= document.getElementById("video");

function startStream(){
    navigator.getUserMedia(
        {
            video: {}
        },
        stream => (video.srcObj = stream),
        err=>console.log(err)
    );
}

startStream();