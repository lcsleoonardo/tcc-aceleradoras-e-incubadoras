const video = document.getElementById("myVideo");

const btn = document.getElementById("myBtn");

function myFunction() {

    if (video.paused)

    {
        video.onplay();
        btn.innerHTML = "Pause";
    }

    else

    {
        video.pause();
        btn.innerHTML = "play";
    }
}