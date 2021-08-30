//#region [Popup Control]
const popupBackground = document.querySelector("#body>.popup-background");
const SHOW_POPUP = "show";

function ShowPopup(event)
{
    var popupContent = document.getElementById(this.dataset.link);
    
    if(popupContent === null)
    {
        alert("상세 내용이 없습니다.");
    }
    else
    {
        popupContent.classList.toggle(SHOW_POPUP);
        popupBackground.classList.toggle(SHOW_POPUP);
    }
}

popupBackground.addEventListener("click", ClickPopup);

function ClickPopup(event)
{
    if(event.target === popupBackground)
    {
        popupBackground.classList.toggle(SHOW_POPUP);
        popupBackground.querySelectorAll(".popup-content").forEach(function(p)
        {
            p.classList.remove("show");
        });
        
    }
}

// popup.addEventListener("click", PopupClicked);

// function PopupClicked(event)
// {
//     if(event.target === popup || event.target.parentNode === contentVideo)
//     {
//         popup.classList.toggle(SHOW_POPUP);
//     }

    
//     if(popup.classList.contains(SHOW_POPUP) === false)
//     {
//         const vdos = popupDetail.querySelectorAll(".js-video");
//     }
// }
//#endregion [Popup Control]