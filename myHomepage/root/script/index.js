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


//#region [Hover mp4 Play]
const vdo = document.querySelector(".content-mp4");

const VIDEO_PLAY = "play";

vdo.addEventListener("mouseover", PlayVideo);
vdo.addEventListener("mouseout", PauseVideo);

function PlayVideo()
{
    vdo.classList.add(VIDEO_PLAY);
    vdo.play();
}
function PauseVideo()
{
    vdo.classList.remove(VIDEO_PLAY);
    vdo.pause();
}
//#endregion [Hover mp4 Play]
