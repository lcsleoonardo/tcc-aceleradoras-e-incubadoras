const video = document.getElementById("myVideo");

const btn = document.getElementById("myBtn");

function myFunction() {

    if (video.paused)

    {
        video.play();
        btn.innerHTML = "Pause";
    }

    else

    {
        video.pause();
        btn.innerHTML = "play";
    }
}

window.revelar = ScrollReveal({reset:true});

revelar.reveal('.efeito-roll', {
    duration: 2000,
    distance: '150px'
})