const tabs = document.querySelectorAll(".item-tab");
const tabContents = document.querySelectorAll(".item-tab-content");

console.log(tabs);
console.log(tabContents);

tabs.forEach(function(x)
            {
                x.addEventListener("click", clickTabs);
            });

function clickTabs(x)
{
    x.preventDefault();

    tabContents.forEach(function(y)
    {
        y.classList.remove("active");
    });

    //
}