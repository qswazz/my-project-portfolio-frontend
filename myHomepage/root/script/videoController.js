//#region [Hover mp4 Play]
const vdoSections = document.querySelectorAll("#tab-content3>.content-video");

vdoSections.forEach(function(v)
{
    v.addEventListener("mouseenter", PlayVideo, false);
    v.addEventListener("mouseleave", PauseVideo, false);

    v.addEventListener("click", ShowPopup); // popupController.js
});

function PlayVideo(event)
{
    event.stopPropagation();
    var vdo = this.querySelector(".js-video");
    vdo.play();
}

function PauseVideo(event)
{
    event.stopPropagation();
    var vdo = this.querySelector(".js-video");
    vdo.currentTime = 0;
    vdo.pause();
}
//#endregion [Hover mp4 Play]
