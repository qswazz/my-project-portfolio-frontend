//#region [Tab Function]
const tabs = document.querySelectorAll(".item-tab");
const tabContents = document.querySelectorAll(".item-tab-content");

tabs.forEach(function(t)
            {
                t.addEventListener("click", clickTabs);
            });

function clickTabs(t)
{
    t.preventDefault();

    tabContents.forEach(function(tc)
    {
        tc.classList.remove("active");
    });

    tabs.forEach(function(t)
    {
        t.classList.remove("active");
    });
    
    const selectedTab = this.getAttribute("href");
    const focusedTab = document.querySelector(selectedTab);

    this.classList.add("active");
    focusedTab.classList.add("active");    
}
//#endregion [Tab Function]