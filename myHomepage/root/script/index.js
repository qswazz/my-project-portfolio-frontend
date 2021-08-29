//#region [Tab Function]
const tabs = document.querySelectorAll(".item-tab");
const tabContents = document.querySelectorAll(".item-tab-content");

const CLICKED_STAT = "active";

tabs.forEach(function(t)
            {
                t.addEventListener("click", clickTabs);
            });

function clickTabs(t)
{
    t.preventDefault();

    tabContents.forEach(function(tc)
    {
        tc.classList.remove(CLICKED_STAT);
    });

    tabs.forEach(function(t)
    {
        t.classList.remove(CLICKED_STAT);
    });
    
    const selectedTab = this.getAttribute("href");
    const focusedTab = document.querySelector(selectedTab);

    this.classList.add(CLICKED_STAT);
    focusedTab.classList.add(CLICKED_STAT);    
}
//#endregion [Tab Function]



//#region [Popup Control]
const popup = document.querySelector(".popup");
const popupDetail = popup.querySelector(".popup-detail");

const SHOW_POPUP = "show";

popup.addEventListener("click", ModalClicked);

function ModalClicked(event)
{
    if(event.target !== popupDetail)
    {
        popup.classList.toggle(SHOW_POPUP);
    }
}
//#endregion [Popup Control]



//#region [Hover mp4 Play]
const vdoSections = document.querySelectorAll(".content-video");

vdoSections.forEach(function(v)
{
    v.addEventListener("mouseenter", PlayVideo, false);
    v.addEventListener("mouseleave", PauseVideo, false);
    v.addEventListener("click", ModalClicked);
});

function PlayVideo(event)
{
    event.stopPropagation();
    const vdo = this.querySelector(".js-video");
    vdo.play();
}

function PauseVideo(event)
{
    event.stopPropagation();
    const vdo = this.querySelector(".js-video");
    vdo.currentTime = 0;
    vdo.pause();
}
//#endregion [Hover mp4 Play]
