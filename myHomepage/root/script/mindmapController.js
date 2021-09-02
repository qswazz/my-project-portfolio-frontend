const OFFSET = 5;
const TEXT_MARGIN = 20;

//#region 객체
var objGroup0 =
[
	{level: "lv0", parentId: null, id:"lv0-0", x: 0, y: 0, txt: "Center"}
];

var objGroup1 =
[ 
	 {level: "lv1", parentId: "lv0-0", id: "lv1-1", dir: 30, x: 0, y: 0 , txt: "Text22222"}
	,{level: "lv1", parentId: "lv0-0", id: "lv1-2", dir: 210, x: 0, y: 0 , txt: "Text333333333"}
];

var objGroup2 =
[
	 {level: "lv2", parentId: "lv1-1", id: "lv2-1", dir: 120, x: 0 , y: 0, txt: "Child111"}
	,{level: "lv2", parentId: "lv1-1", id: "lv2-2", dir: 45, x: 0 , y: 0, txt: "Child222"}
	,{level: "lv2", parentId: "lv1-1", id: "lv2-3", dir: 340, x: 0 , y: 0, txt: "Child333"}
	,{level: "lv2", parentId: "lv1-2", id: "lv2-4", dir: 190, x: 0 , y: 0, txt: "Child444"}
];

var objGroup3 =
[
	 {level: "lv3", parentId: "lv2-2", id: "lv3-1", dir: 45, x: 0 , y: 0, txt: "ABC111"}
	,{level: "lv3", parentId: "lv2-2", id: "lv3-2", dir: 45, x: 0 , y: 0, txt: "ABC222"}
	,{level: "lv3", parentId: "lv2-3", id: "lv3-3", dir: 45, x: 0 , y: 0, txt: "ABC333"}
	,{level: "lv3", parentId: "lv2-4", id: "lv3-4", dir: 45, x: 0 , y: 0, txt: "ABC444"}
];

const groups = [objGroup0, objGroup1, objGroup2];

const svg = document.getElementById("svg");
//#endregion



function Create(item)
{
	if(item.x == null
    || item.y == null
    || item.txt == null)
	{
		return;
	}	
	
    // Group
	const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	group.setAttribute('transform', `translate(${item.x}, ${item.y})`);
	group.setAttribute('class', '');
	group.setAttribute('id', item.id);
	svg.appendChild(group);
	
    // Text
	const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text.textContent = item.txt;
	group.appendChild(text);
	const bBoxText = text.getBBox();
	
    // Rect
	const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	rect.setAttribute('width', bBoxText.width + TEXT_MARGIN * 2);
	rect.setAttribute('height', bBoxText.height + TEXT_MARGIN * 2);
	group.prepend(rect);
	const bBoxRect = rect.getBBox();
	
	rect.setAttribute('x', bBoxRect.x - bBoxRect.width/2);
	rect.setAttribute('y', bBoxRect.y - bBoxRect.height/2 - OFFSET);
}

	

function CreateLine(parent, child)
{
	for(var i=0; i<parent.length; i++)
	{
		for(var j=0; j<child.length; j++)
		{
			// 라인 긋기
			if(parent[i].id === child[j].parentId)
			{
				// 시작점 (parent[i].x, parent[i].y)
				// 도착점 (child[j].x, child[j].y)
				// 중간점 ( (parent[i].x + child[j].x) / 2 + OFFSET, (parent[i].y + child[j].y) / 2 + OFFSET )
				const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				
				path.setAttribute('d'
					, `M${parent[i].x},${parent[i].y} 
                       Q${(parent[i].x + child[j].x) / 2 + 50}, ${(parent[i].y + child[j].y) / 2 + 50} 
                       ${child[j].x},${child[j].y}`);

				svg.prepend(path);
			}
		}
	}
}


function ChangeLocation(parent, child)
{
	for(var i=0; i<parent.length; i++)
	{
		for(var j=0; j<child.length; j++)
		{
			if(parent[i].id === child[j].parentId)
			{
				const moveX = Math.cos(child[j].dir) * 200;
				const moveY = Math.sin(child[j].dir) * 200;
				
				child[j].x = parent[i].x + moveX;
				child[j].y = parent[i].y - moveY;
				// switch(child[j].dir)
				// {
					// case '+0':
						// child[j].x = parent[i].x + 200;
						// child[j].y = parent[i].y;
						// break;
						
					// case '++':
						// child[j].x = parent[i].x + 150;
						// child[j].y = parent[i].y - 150;
						// break;
						
					// case '0+':
						// child[j].x = parent[i].x;
						// child[j].y = parent[i].y - 200;
						// break;
						
					// case '-+':
						// child[j].x = parent[i].x - 150;
						// child[j].y = parent[i].y - 150;
						// break;
						
					// case '-0':
						// child[j].x = parent[i].x - 200;
						// child[j].y = parent[i].y;
						// break;
						
					// case '--':
						// child[j].x = parent[i].x - 150;
						// child[j].y = parent[i].y + 150;
						// break;
						
					// case '0-':
						// child[j].x = parent[i].x;
						// child[j].y = parent[i].y + 200;
						// break;
						
					// case '+-':
						// child[j].x = parent[i].x + 150;
						// child[j].y = parent[i].y + 150;
						// break;
				// }
			}
		}
	}
}



function ModifyLoc(d1, d2)
{
	const dist = GetDist(d1, d2);
	const dir = GetDirection(d1, d2);
	
	const obj = document.getElementById(d2.id);
	
	console.log(`obj: ${obj.txt}  dist: ${dist}, dir: ${dir}`);
	
	if(dist < 150)
	{
		obj.classList.add(dir);
	}
	else
	{
		obj.classList.remove(dir);
	}
}


function GetDist(d1, d2)
{
	const dist = Math.sqrt(((d2.x - d1.x) ** 2) + ((d2.y - d1.y) ** 2));
	
	return dist;
}


function GetDirection(d1, d2)
{
	var result = null;
	
	if((d2.x > d1.x) && (d2.y < d1.y))
	{
		result = "pp";
	}
	else if((d2.x > d1.x) && (d2.y > d1.y))
	{
		result = "pm";
	}
	else if((d2.x < d1.x) && (d2.y < d1.y))
	{
		result = "mp";
	}
	else if((d2.x < d1.x) && (d2.y > d1.y))
	{
		result = "mm";
	}
	else if((d2.x > d1.x) && (d2.y === d1.y))
	{
		result = "p0";
	}
	else if((d2.x === d1.x) && (d2.y > d1.y))
	{
		result = "0m";
	}
	else if((d2.x === d1.x) && (d2.y < d1.y))
	{
		result = "0p";
	}
	else if((d2.x < d1.x) && (d2.y === d1.y))
	{
		result = "m0";
	}
	
	return result;
}


function init()
{
    objGroup0[0].x = svg.width.baseVal.value / 2;
    objGroup0[0].y = svg.height.baseVal.value / 2;

    while(svg.hasChildNodes())
    {
        svg.removeChild(svg.firstChild);
    }

    // 라인 그리기
    for(var i=0; i<groups.length-1; i++)
    {
		ChangeLocation(groups[i], groups[i+1]);
        CreateLine(groups[i], groups[i+1]);
    }

    //객체 그리기
    groups.forEach(function(gs){
        gs.forEach(function(g){
            Create(g);
            
            // if(g.dir === "--")
            // {
            //     g.classList.add("mm");
            // }
            // else if(g.dir === "++")
            // {
            //     g.classList.add("pp");
            // }
        });
    });
}

init();

window.addEventListener("load", function(r)
{
    init();
});
window.addEventListener("resize", function(r)
{
    init();
});
