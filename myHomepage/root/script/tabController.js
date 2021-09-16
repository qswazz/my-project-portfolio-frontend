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
