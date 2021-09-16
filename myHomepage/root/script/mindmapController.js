const OFFSET = 5;
const TEXT_MARGIN = 20;

//#region 객체
var objGroup0 =
[
	{level: "lv0", parentId: null, id:"lv0-0", x: 200, y: 200, txt: "I am."}
];

var objGroup1 =
[ 
	 {level: "lv1", parentId: "lv0-0", id: "lv1-1", dir:  60, len: 180, x: 0, y: 0 , txt: "성실함"}
	,{level: "lv1", parentId: "lv0-0", id: "lv1-2", dir: 120, len: 180, x: 0, y: 0 , txt: "계획적"}
	,{level: "lv1", parentId: "lv0-0", id: "lv1-3", dir: 210, len: 180, x: 0, y: 0 , txt: "도전적"}
	,{level: "lv1", parentId: "lv0-0", id: "lv1-4", dir: 350, len: 180, x: 0, y: 0 , txt: "즐거움"}
];

var objGroup2 =
[
	 {level: "lv2", parentId: "lv1-1", id: "lv2-1", dir:  45, len: 180, x: 0 , y: 0, txt: "학점 4.1 / 4.5"}
	,{level: "lv2", parentId: "lv1-1", id: "lv2-2", dir: 100, len: 180, x: 0 , y: 0, txt: "학업+아르바이트"}
	,{level: "lv2", parentId: "lv1-1", id: "lv2-3", dir: -5, len: 180, x: 0 , y: 0, txt: "시계는 항상 5분 빠르게 설정"}
	
	,{level: "lv2", parentId: "lv1-2", id: "lv2-4", dir: 190, len: 130, x: 0 , y: 0, txt: "일의 시작은 펜과 종이로"}
	,{level: "lv2", parentId: "lv1-2", id: "lv2-5", dir: 150, len: 180, x: 0 , y: 0, txt: "계획은 여유롭게"}
	,{level: "lv2", parentId: "lv1-2", id: "lv2-6", dir: 80, len: 150, x: 0 , y: 0, txt: "내 자신을 알라"}

	,{level: "lv2", parentId: "lv1-3", id: "lv2-7", dir: 170, len: 180, x: 0 , y: 0, txt: "궁금증 => 도전!"}
	,{level: "lv2", parentId: "lv1-3", id: "lv2-8", dir: 220, len: 130, x: 0 , y: 0, txt: "직접 해봐야겠어"}
	,{level: "lv2", parentId: "lv1-3", id: "lv2-9", dir: 310, len: 130, x: 0 , y: 0, txt: "엇 저 그거 해봤어요!"}
	
	,{level: "lv2", parentId: "lv1-4", id: "lv2-10", dir: 240, len: 110, x: 0 , y: 0, txt: "웃음 多"}
	,{level: "lv2", parentId: "lv1-4", id: "lv2-11", dir: 320, len: 140, x: 0 , y: 0, txt: "롯데월드 아르바이트"}
	,{level: "lv2", parentId: "lv1-4", id: "lv2-12", dir: 30, len: 160, x: 0 , y: 0, txt: "같이 하는 재미"}
];

var objGroup3 =
[
	  {level: "lv3", parentId: "lv2-1", id: "lv3-1", dir: -20, len: 130, x: 0 , y: 0, txt: "과제 점수 Good!"}
	 ,{level: "lv3", parentId: "lv2-1", id: "lv3-2", dir:  20, len: 180, x: 0 , y: 0, txt: "출석 Perfect!"}
	 ,{level: "lv3", parentId: "lv2-1", id: "lv3-3", dir:  90, len: 100, x: 0 , y: 0, txt: "시험 공부 Excellent!"}

	 ,{level: "lv3", parentId: "lv2-2", id: "lv3-4", dir:  70, len: 110, x: 0 , y: 0, txt: "두 마리 토끼"}
	 ,{level: "lv3", parentId: "lv2-2", id: "lv3-5", dir:  140, len: 180, x: 0 , y: 0, txt: "짜투리 시간 활용"}

	 ,{level: "lv3", parentId: "lv2-4", id: "lv3-6", dir: -70, len: 110, x: 0 , y: 0, txt: "할 일은 얼마나 있지?"}
	 ,{level: "lv3", parentId: "lv2-4", id: "lv3-7", dir: 210, len: 150, x: 0 , y: 0, txt: "시간이 얼마나 있지?"}
	 ,{level: "lv3", parentId: "lv2-4", id: "lv3-8", dir: 170, len: 180, x: 0 , y: 0, txt: "다른 스케줄 뭐 있지?"}
	 
	 ,{level: "lv3", parentId: "lv2-5", id: "lv3-9", dir: 180, len: 180, x: 0 , y: 0, txt: "커피 한 잔하고 시작할까?"}
	 ,{level: "lv3", parentId: "lv2-5", id: "lv3-10", dir: 150, len: 150, x: 0 , y: 0, txt: "여유 ∝ Quality"}
	 ,{level: "lv3", parentId: "lv2-5", id: "lv3-11", dir: 110, len: 150, x: 0 , y: 0, txt: "미리미리!"}
	 
	 ,{level: "lv3", parentId: "lv2-6", id: "lv3-12", dir: 140, len: 110, x: 0 , y: 0, txt: "과대평가 금물"}
	 
	 ,{level: "lv3", parentId: "lv2-7", id: "lv3-13", dir: 160, len: 140, x: 0 , y: 0, txt: "모두 좋은 경험"}
	 ,{level: "lv3", parentId: "lv2-7", id: "lv3-14", dir: 210, len: 150, x: 0 , y: 0, txt: "어디에 쓸 수 있을까?"}
	 
	 ,{level: "lv3", parentId: "lv2-8", id: "lv3-15", dir: 250, len: 130, x: 0 , y: 0, txt: "나를 위한 투자"}
	 ,{level: "lv3", parentId: "lv2-8", id: "lv3-16", dir: 200, len: 130, x: 0 , y: 0, txt: "후회는 없어"}
	 
	 ,{level: "lv3", parentId: "lv2-9", id: "lv3-17", dir: 240, len: 110, x: 0 , y: 0, txt: "적극적인 사람"}
	 ,{level: "lv3", parentId: "lv2-9", id: "lv3-18", dir: 320, len: 130, x: 0 , y: 0, txt: "다재다능"}
	 
	 ,{level: "lv3", parentId: "lv2-10", id: "lv3-19", dir: 250, len: 90, x: 0 , y: 0, txt: "아재개그"}
	 ,{level: "lv3", parentId: "lv2-10", id: "lv3-20", dir: 300, len: 130, x: 0 , y: 0, txt: "서비스직 경험"}

	 ,{level: "lv3", parentId: "lv2-11", id: "lv3-21", dir: 280, len: 110, x: 0 , y: 0, txt: "약 1년 근무"}
	 ,{level: "lv3", parentId: "lv2-11", id: "lv3-22", dir: 330, len: 140, x: 0 , y: 0, txt: "어트랙션"}
	 ,{level: "lv3", parentId: "lv2-11", id: "lv3-23", dir: 10, len: 140, x: 0 , y: 0, txt: "식음료"}
	 
	 ,{level: "lv3", parentId: "lv2-12", id: "lv3-24", dir: 290, len: 90, x: 0 , y: 0, txt: "운동 Like"}
	 ,{level: "lv3", parentId: "lv2-12", id: "lv3-25", dir: 350, len: 120, x: 0 , y: 0, txt: "당구 Like"}
	 ,{level: "lv3", parentId: "lv2-12", id: "lv3-26", dir: 30, len: 120, x: 0 , y: 0, txt: "볼링 Like"}
];

const groups = [objGroup0, objGroup1, objGroup2, objGroup3];

const svg = document.getElementById("svg");
const caution = document.getElementById("caution");
//#endregion



function Create(item)
{
	// if(item.x == null
    // || item.y == null
    // || item.txt == null)
	// {
	// 	return;
	// }	
	
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
	rect.setAttribute('width', bBoxText.width + TEXT_MARGIN);
	rect.setAttribute('height', bBoxText.height + TEXT_MARGIN * 1.5);
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
				const moveX = Math.cos(child[j].dir*Math.PI/180) * child[j].len;
				const moveY = Math.sin(child[j].dir*Math.PI/180) * child[j].len;
			
				child[j].x = parent[i].x + moveX;
				child[j].y = parent[i].y + moveY;
			}
		}
	}
}


const tab = document.querySelector("a[href='#tab-content1']");

function init()
{
    objGroup0[0].x = svg.width.baseVal.value / 2;
    objGroup0[0].y = svg.height.baseVal.value / 2.5;

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
        });
    });
}


window.addEventListener("load", function(r)
{
    init();
});
window.addEventListener("resize", function(r)
{
    init();
});

tab.addEventListener("click", function(r){
	init();
});
