
const { spawn } = require('child_process');
const fetch = require('node-fetch')
child = spawn('./py/parse.exe')
let star = '★'


champNameCorrection = {
	"Fiddle": "Fiddlestick",
	"Naut": "Nautilis",
	"Heimerdinger": "Heimer"
}

champCosts = {
	"Teemo": 'fiveCostChamp',
	"Yasuo": 'threeCostChamp'
}


function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {

	const res = await fetch("http://localhost:8080/",);

	const data = await res.text();


	lines = data.split('\n')

	for (let i = 0; i < lines.length; i++) {
		fields = lines[i].split('&');

		compId = "comp" + (i + 1)

		createComp1(compId, fields[0]);


	}

	return res;
}

child.on('spawn', async () => {

	await sleep(2000)

	fetchData();
})


const createChamps = (compId, champNames, items) => {
	//string, List[str], List[str]
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let champImgDiv = document.createElement("div");
	champImgDiv.setAttribute("class", "champImgDiv");

	champImages = []

	for (let i = 0; i < champNames.length; i++) {
		if (champNames[i] in champNameCorrection) {
			champNames[i] = champNameCorrection[champName];
		}

		let champImg = document.createElement("div");

		attributes = "champImg " + (items.length === 0 ? "champImgNoItem" : "") + (champCosts[champNames[i]]) + (champNames[i].charAt(0)=== star? 'champImgStar' : "") 
		champImg.setAttribute("class", attributes); // twoCostChamp is temp
		champImg.setAttribute(
			"style",
			"background-image: url('res/all-champions/" + champNames[i] + ".png')"
		);
		champImages.push(champImg)

		champImgDiv.appendChild(champImg)
	
	


	
	}


	if (champName in champNameCorrection) {
		champName = champNameCorrection[champName];
	}



	// temp

}


const createComp1 = (compId, compNameStr) => {
	let compDiv = document.createElement("div");
	compDiv.setAttribute("id", compId);
	compDiv.setAttribute("class", "comp");


	let collapsedView = document.createElement("div");
	collapsedView.setAttribute("class", "collapsedView");
	collapsedView.setAttribute("id", compId + "CollapsedView");

	let compName = document.createElement("span");
	compName.setAttribute("class", "compName");
	compName.innerHTML = compNameStr;

	let viewMore = document.createElement("span");
	viewMore.setAttribute("id", "viewMore" + compId);
	viewMore.setAttribute("class", "viewCompDetailsText");
	viewMore.innerHTML = "Click to view more";

	let breaktag = document.createElement("br");

	let compNameAndDetailsDiv = document.createElement("div");
	compNameAndDetailsDiv.setAttribute("class", "compNameAndDetailsDiv");
	compNameAndDetailsDiv.appendChild(compName);
	compNameAndDetailsDiv.appendChild(breaktag);
	compNameAndDetailsDiv.appendChild(viewMore);

	let compRow1 = document.createElement("div");
	compRow1.setAttribute("id", compId + "Row1");
	compRow1.setAttribute("class", "compRow");
	compRow1.setAttribute("style", "padding-bottom: 20px;");

	let compRow2 = document.createElement("div");
	compRow2.setAttribute("id", compId + "Row2");
	compRow2.setAttribute("class", "compRow");

	let compChampsDiv = document.createElement("div");
	compChampsDiv.setAttribute("class", "compChampsDiv");
	compChampsDiv.appendChild(compRow1);
	compChampsDiv.appendChild(compRow2);

	let champsDivRow1 = document.createElement("div");
	champsDivRow1.setAttribute("class", "champsDivRow");
	champsDivRow1.setAttribute("id", compId + "champsDivRow1");

	let champsDivRow2 = document.createElement("div");
	champsDivRow2.setAttribute("class", "champsDivRow");
	champsDivRow2.setAttribute("id", compId + "champsDivRow2");

	document.getElementById("main-comps").appendChild(compDiv);
	collapsedView.appendChild(compNameAndDetailsDiv);
	collapsedView.appendChild(compChampsDiv);
	compDiv.appendChild(collapsedView);
	compRow1.appendChild(champsDivRow1);
	compRow2.appendChild(champsDivRow2);

}


let openComps = [];

const createComp = (compId) => {
	let compDiv = document.createElement("div");
	compDiv.setAttribute("id", compId);
	compDiv.setAttribute("class", "comp");

	let collapsedView = document.createElement("div");
	collapsedView.setAttribute("class", "collapsedView");
	collapsedView.setAttribute("id", compId + "CollapsedView");

	let compName = document.createElement("span");
	compName.setAttribute("class", "compName");
	compName.innerHTML = "Comp name"; // temp

	let viewMore = document.createElement("span");
	viewMore.setAttribute("id", "viewMore" + compId);
	viewMore.setAttribute("class", "viewCompDetailsText");
	viewMore.innerHTML = "Click to view more";

	let breaktag = document.createElement("br");

	let compNameAndDetailsDiv = document.createElement("div");
	compNameAndDetailsDiv.setAttribute("class", "compNameAndDetailsDiv");
	compNameAndDetailsDiv.appendChild(compName);
	compNameAndDetailsDiv.appendChild(breaktag);
	compNameAndDetailsDiv.appendChild(viewMore);

	let compRow1 = document.createElement("div");
	compRow1.setAttribute("id", compId + "Row1");
	compRow1.setAttribute("class", "compRow");
	compRow1.setAttribute("style", "padding-bottom: 20px;");

	let compRow2 = document.createElement("div");
	compRow2.setAttribute("id", compId + "Row2");
	compRow2.setAttribute("class", "compRow");

	let compChampsDiv = document.createElement("div");
	compChampsDiv.setAttribute("class", "compChampsDiv");
	compChampsDiv.appendChild(compRow1);
	compChampsDiv.appendChild(compRow2);

	let champsDivRow1 = document.createElement("div");
	champsDivRow1.setAttribute("class", "champsDivRow");
	champsDivRow1.setAttribute("id", compId + "champsDivRow1");

	let champsDivRow2 = document.createElement("div");
	champsDivRow2.setAttribute("class", "champsDivRow");
	champsDivRow2.setAttribute("id", compId + "champsDivRow2");

	document.getElementById("main-comps").appendChild(compDiv);
	collapsedView.appendChild(compNameAndDetailsDiv);
	collapsedView.appendChild(compChampsDiv);
	compDiv.appendChild(collapsedView);
	compRow1.appendChild(champsDivRow1);
	compRow2.appendChild(champsDivRow2);

	compDiv.addEventListener("click", () => {
		viewMoreDetails(compId);
	});

	createChamp(compId + "champsDivRow1"); // temp
	createChamp(compId + "champsDivRow1"); // temp
	createChamp(compId + "champsDivRow1"); // temp
	select2Champs(compId + "champsDivRow1"); // temp
	select2ChampsWithItems(compId + "champsDivRow1"); // temp
	select3ChampsWithItems(compId + "champsDivRow1"); // temp
	createChampWithItems(compId + "champsDivRow2"); // temp
	createChampWithItems(compId + "champsDivRow2"); // temp
	createChampWithItems(compId + "champsDivRow2"); // temp
	create3StarChamp(compId + "champsDivRow2"); // temp
	create3StarChampWithItems(compId + "champsDivRow2"); // temp
	create3StarChampWithItems(compId + "champsDivRow2"); // temp
	select3Champs(compId + "champsDivRow2"); // temp
};

const createChamp = (compId) => {
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let champImg = document.createElement("div");
	champImg.setAttribute("class", "champImg champImgNoItem twoCostChamp"); // twoCostChamp is temp
	champImg.setAttribute(
		"style",
		"background-image: url('res/all-champions/Aatrox.png')"
	); // temp

	let champName = document.createElement("span");
	champName.setAttribute("class", "champName");
	champName.innerHTML = "Aatrox"; // temp

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(champImg);
	champDiv.appendChild(champName);
};

const createChampWithItems = (compId) => {
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let champImg = document.createElement("div");
	champImg.setAttribute("class", "champImg threeCostChamp"); // threeCostChamp is temp
	champImg.setAttribute(
		"style",
		"background-image: url('res/all-champions/Kennen.png')"
	); // temp

	let champItem1 = document.createElement("div");
	champItem1.setAttribute("class", "champItem champItemWidthSlightlyLarger");
	champItem1.setAttribute(
		"style",
		"background-image: url('res/all-items/DClaw.png')"
	); // temp

	let champItem2 = document.createElement("div");
	champItem2.setAttribute(
		"style",
		"background-image: url('res/all-items/FON.png')"
	); // temp
	champItem2.setAttribute("class", "champItem champItemNoMargin");

	let champItem3 = document.createElement("div");
	champItem3.setAttribute(
		"style",
		"background-image: url('res/all-items/FH.png')"
	); // temp
	champItem3.setAttribute(
		"class",
		"champItem champItemWidthSlightlyLarger champItemNoMargin"
	);

	let champItemsDiv = document.createElement("div");
	champItemsDiv.setAttribute("class", "champItemsDiv");
	champItemsDiv.appendChild(champItem1);
	champItemsDiv.appendChild(champItem2);
	champItemsDiv.appendChild(champItem3);

	let champName = document.createElement("span");
	champName.setAttribute("class", "champName");
	champName.innerHTML = "Kennen"; // temp

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(champImg);
	champDiv.appendChild(champItemsDiv);
	champDiv.appendChild(champName);
};

const create3StarChamp = (compId) => {
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let starDiv = document.createElement("div");
	starDiv.setAttribute("class", "starDiv");

	let champImg = document.createElement("div");
	champImg.setAttribute(
		"class",
		"champImg champImgStar champImgNoItem threeCostChamp"
	); // threeCostChap is temp
	champImg.setAttribute(
		"style",
		"background-image: url('res/all-champions/Yasuo.png')"
	); // temp

	let champName = document.createElement("span");
	champName.setAttribute("class", "champName");
	champName.innerHTML = "Yasuo"; // temp

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(starDiv);
	champDiv.appendChild(champImg);
	champDiv.appendChild(champName);
};

const create3StarChampWithItems = (compId) => {
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let starDiv = document.createElement("div");
	starDiv.setAttribute("class", "starDiv");

	let champImg = document.createElement("div");
	champImg.setAttribute("class", "champImg champImgStar oneCostChamp"); // oneCostChamp  is temp
	champImg.setAttribute(
		"style",
		"background-image: url('res/all-champions/Yasuo.png')"
	); // temp

	let champItem1 = document.createElement("div");
	champItem1.setAttribute("class", "champItem champItemWidthSlightlyLarger");
	champItem1.setAttribute(
		"style",
		"background-image: url('res/all-items/DClaw.png')"
	); // temp

	let champItem2 = document.createElement("div");
	champItem2.setAttribute(
		"style",
		"background-image: url('res/all-items/FON.png')"
	); // temp
	champItem2.setAttribute("class", "champItem champItemNoMargin");

	let champItem3 = document.createElement("div");
	champItem3.setAttribute(
		"style",
		"background-image: url('res/all-items/FH.png')"
	); // temp
	champItem3.setAttribute(
		"class",
		"champItem champItemWidthSlightlyLarger champItemNoMargin"
	);

	let champItemsDiv = document.createElement("div");
	champItemsDiv.setAttribute("class", "champItemsDiv");
	champItemsDiv.appendChild(champItem1);
	champItemsDiv.appendChild(champItem2);;
	champItemsDiv.appendChild(champItem3);

	let champName = document.createElement("span");
	champName.setAttribute("class", "champName");
	champName.innerHTML = "Yasuo"; // temp

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(starDiv);
	champDiv.appendChild(champImg);
	champDiv.appendChild(champItemsDiv);
	champDiv.appendChild(champName);
};

const select2Champs = (compId) => {
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let champImg1 = document.createElement("div");
	champImg1.setAttribute("class", "champImg champImgNoItem oneCostChamp"); //oneCostChamp is temp
	champImg1.setAttribute(
		"style",
		"background-image: url('res/all-champions/Akshan.png')"
	); // temp

	let champImg2 = document.createElement("div");
	champImg2.setAttribute("class", "champImg champImgNoItem fiveCostChamp"); // fiveCostChamp is temp
	champImg2.setAttribute(
		"style",
		"background-image: url('res/all-champions/Aphelios.png'); margin-left: -16px"
	); // temp

	let champImgDiv = document.createElement("div");
	champImgDiv.setAttribute("class", "champImgDiv");
	champImgDiv.appendChild(champImg1);
	champImgDiv.appendChild(champImg2);

	champName1 = "Aphelios"; //temp
	champName2 = "Akshan"; //temp

	let champNames = document.createElement("span");
	champNames.setAttribute("class", "champName");
	champNames.innerHTML = champName1 + "/" + champName2; // temp

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(champImgDiv);
	champDiv.appendChild(champNames);
};

const select2ChampsWithItems = (compId) => {
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let champImg1 = document.createElement("div");
	champImg1.setAttribute("class", "champImg twoCostChamp"); // twoCostChamp is temp
	champImg1.setAttribute(
		"style",
		"background-image: url('res/all-champions/Akshan.png')"
	); // temp

	let champImg2 = document.createElement("div");
	champImg2.setAttribute("class", "champImg threeCostChamp"); //threeCostChamp is temp
	champImg2.setAttribute(
		"style",
		"background-image: url('res/all-champions/Aphelios.png'); margin-left: -16px"
	); // temp

	let champImgDiv = document.createElement("div");
	champImgDiv.setAttribute("class", "champImgDiv");
	champImgDiv.appendChild(champImg1);
	champImgDiv.appendChild(champImg2);

	let champItem1 = document.createElement("div");
	champItem1.setAttribute("class", "champItem champItemWidthSlightlyLarger");
	champItem1.setAttribute(
		"style",
		"background-image: url('res/all-items/DClaw.png')"
	); // temp

	let champItem2 = document.createElement("div");
	champItem2.setAttribute(
		"style",
		"background-image: url('res/all-items/FON.png')"
	); // temp
	champItem2.setAttribute("class", "champItem champItemNoMargin");

	let champItem3 = document.createElement("div");
	champItem3.setAttribute(
		"style",
		"background-image: url('res/all-items/FH.png')"
	); // temp
	champItem3.setAttribute(
		"class",
		"champItem champItemWidthSlightlyLarger champItemNoMargin"
	);

	let champItemsDiv = document.createElement("div");
	champItemsDiv.setAttribute("class", "champItemsDiv");
	champItemsDiv.appendChild(champItem1);
	champItemsDiv.appendChild(champItem2);
	champItemsDiv.appendChild(champItem3);

	champName1 = "Aphelios"; //temp
	champName2 = "Akshan"; //temp

	let champNames = document.createElement("span");
	champNames.setAttribute("class", "champName");
	champNames.innerHTML = champName1 + "/" + champName2; // temp

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(champImgDiv);
	champDiv.appendChild(champItemsDiv);
	champDiv.appendChild(champNames);
};

const select3Champs = (compId) => {
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let champImg1 = document.createElement("div");
	champImg1.setAttribute("class", "champImg champImgNoItem oneCostChamp"); // oneCostchamp is temp
	champImg1.setAttribute(
		"style",
		"background-image: url('res/all-champions/Lulu.png')"
	); // temp

	let champImg2 = document.createElement("div");
	champImg2.setAttribute("class", "champImg champImgNoItem twoCostChamp"); // twoCostChamp is temp
	champImg2.setAttribute(
		"style",
		"background-image: url('res/all-champions/Irelia.png'); margin-left: -16px"
	); // temp

	let champImg3 = document.createElement("div");
	champImg3.setAttribute("class", "champImg champImgNoItem fiveCostChamp"); //fiveCostChamp is temp
	champImg3.setAttribute(
		"style",
		"background-image: url('res/all-champions/Naut.png'); margin-left: -16px"
	); // temp

	let champImgDiv = document.createElement("div");
	champImgDiv.setAttribute("class", "champImgDiv");
	champImgDiv.appendChild(champImg1);
	champImgDiv.appendChild(champImg2);
	champImgDiv.appendChild(champImg3);

	champName1 = "Lulu"; //temp
	champName2 = "Irelia"; //temp
	champName3 = "Nautilus"; // temp

	let champNames = document.createElement("span");
	champNames.setAttribute("class", "champName");
	champNames.innerHTML = champName1 + "/" + champName2 + "/" + champName3; // temp

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(champImgDiv);
	champDiv.appendChild(champNames);
};

const select3ChampsWithItems = (compId) => {
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let champImg1 = document.createElement("div");
	champImg1.setAttribute("class", "champImg oneCostChamp"); //oneCostChamp is temp
	champImg1.setAttribute(
		"style",
		"background-image: url('res/all-champions/Karma.png')"
	); // temp

	let champImg2 = document.createElement("div");
	champImg2.setAttribute("class", "champImg fourCostChamp"); //fourCostChamp is temp
	champImg2.setAttribute(
		"style",
		"background-image: url('res/all-champions/Riven.png'); margin-left: -16px"
	); // temp

	let champImg3 = document.createElement("div");
	champImg3.setAttribute("class", "champImg fourCostChamp"); //fourCostChamp is temp
	champImg3.setAttribute(
		"style",
		"background-image: url('res/all-champions/Nidalee.png'); margin-left: -16px"
	); // temp

	let champImgDiv = document.createElement("div");
	champImgDiv.setAttribute("class", "champImgDiv");
	champImgDiv.appendChild(champImg1);
	champImgDiv.appendChild(champImg2);
	champImgDiv.appendChild(champImg3);

	let champItem1 = document.createElement("div");
	champItem1.setAttribute("class", "champItem champItemWidthSlightlyLarger");
	champItem1.setAttribute(
		"style",
		"background-image: url('res/all-items/DClaw.png')"
	); // temp

	let champItem2 = document.createElement("div");
	champItem2.setAttribute(
		"style",
		"background-image: url('res/all-items/FON.png')"
	); // temp
	champItem2.setAttribute("class", "champItem champItemNoMargin");

	let champItem3 = document.createElement("div");
	champItem3.setAttribute(
		"style",
		"background-image: url('res/all-items/FH.png')"
	); // temp
	champItem3.setAttribute(
		"class",
		"champItem champItemWidthSlightlyLarger champItemNoMargin"
	);

	let champItemsDiv = document.createElement("div");
	champItemsDiv.setAttribute("class", "champItemsDiv");
	champItemsDiv.appendChild(champItem1);
	champItemsDiv.appendChild(champItem2);
	champItemsDiv.appendChild(champItem3);

	champName1 = "Karma"; //temp
	champName2 = "Riven"; //temp
	champName3 = "Nidalee"; // temp

	let champNames = document.createElement("span");
	champNames.setAttribute("class", "champName");
	champNames.innerHTML = champName1 + "/" + champName2 + "/" + champName3; // temp

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(champImgDiv);
	champDiv.appendChild(champItemsDiv);
	champDiv.appendChild(champNames);
};

const viewMoreDetails = (compId) => {
	let viewMoreId = "viewMore" + compId;
	let viewMore = document.getElementById(viewMoreId);
	viewMore.innerHTML = "Click to collapse";

	let traitRow1 = document.createElement("div");
	traitRow1.setAttribute("class", "traitRow");
	traitRow1.setAttribute("id", compId + "traitRow1");
	traitRow1.appendChild(createTrait("ABOM", "2")); // temp
	traitRow1.appendChild(createTrait("RNGR", "4")); // temp
	traitRow1.appendChild(createTrait("MYST", "3")); // temp
	traitRow1.appendChild(createTrait("DAWN", "2")); // temp
	traitRow1.appendChild(createTrait("KNT", "2")); // temp
	traitRow1.appendChild(createTrait("SPLW", "2")); // temp
	traitRow1.appendChild(createTrait("DRAC", "2")); // temp
	traitRow1.appendChild(createTrait("LEGI", "2")); // temp

	let traitRow2 = document.createElement("div");
	traitRow2.setAttribute("id", compId + "traitRow2");
	traitRow2.setAttribute("class", "traitRow");
	traitRow2.appendChild(createTrait("HELL", "2")); // temp
	traitRow2.appendChild(createTrait("BRWL", "4")); // temp
	traitRow2.appendChild(createTrait("NITE", "3")); // temp
	traitRow2.appendChild(createTrait("IRON", "2")); // temp
	traitRow2.appendChild(createTrait("FORG", "2")); // temp
	traitRow2.appendChild(createTrait("SKRM", "2")); // temp
	traitRow2.appendChild(createTrait("SENT", "3")); // temp
	traitRow2.appendChild(createTrait("ASSA", "4")); // temp

	document.getElementById(compId + "Row1").prepend(traitRow1);
	document.getElementById(compId + "Row2").prepend(traitRow2);

	let expandedView = document.createElement("div");
	expandedView.setAttribute("id", compId + "ExpandedView");
	expandedView.setAttribute("class", "expandedView");

	let carryItemsRow1 = document.createElement("div");
	carryItemsRow1.setAttribute("id", compId + "CarryItemsRow1");
	carryItemsRow1.setAttribute("class", "carryItemsRow");
	carryItemsRow1.setAttribute("style", "margin-bottom: 20px;");

	let carryItemsRow2 = document.createElement("div");
	carryItemsRow2.setAttribute("id", compId + "CarryItemsRow2");
	carryItemsRow2.setAttribute("class", "carryItemsRow");

	expandedView.appendChild(carryItemsRow1);
	expandedView.appendChild(carryItemsRow2);
	document.getElementById(compId).appendChild(expandedView);

	carryItemsRow1.appendChild(
		create2CarryColumn("Carry #1", false, "Jax", 12, true, "Sejuani", 4)
	); // temp
	carryItemsRow1.appendChild(
		createCarryColumn("Carry #3", false, "Nidalee", 4)
	); // temp
	carryItemsRow1.appendChild(
		createCarryColumn("Further itemization", true, "Teemo", 8)
	); // temp
	carryItemsRow2.appendChild(createCarryColumn("Carry #2", false, "Rell", 8)); // temp
	carryItemsRow2.appendChild(createStartingItems("Starting items", 3)); // temp
	carryItemsRow2.appendChild(createStartingItems("Starting items", 4)); // temp
};

const viewLessDetails = (compId) => { };

const createTrait = (traitName, traitNumber) => {
	let traitDiv = document.createElement("div");
	traitDiv.setAttribute("class", "traitDiv");

	let traitImg = document.createElement("img");
	traitImg.setAttribute("class", "traitImg");
	traitImg.src = "res/all-traits/" + traitName + ".svg";

	let traitNumberSpan = document.createElement("span");
	traitNumberSpan.setAttribute("class", "traitNumberSpan");
	traitNumberSpan.innerHTML = traitNumber; // TEMP

	traitDiv.appendChild(traitImg);
	traitDiv.appendChild(traitNumberSpan);

	return traitDiv;
};

const createCarryColumn = (carryLabel, is3Star, carryChampName, numOfItems) => {
	let carryColumnDiv = document.createElement("div");
	carryColumnDiv.setAttribute("class", "carryColumnDiv");

	let carryLabelSpan = document.createElement("span");
	carryLabelSpan.setAttribute("class", "carryLabelSpan");
	carryLabelSpan.innerHTML = carryLabel;

	carryColumnDiv.appendChild(carryLabelSpan);
	carryColumnDiv.appendChild(createCarry(is3Star, carryChampName, numOfItems));

	return carryColumnDiv;
};

const create2CarryColumn = (
	carryLabel,
	is3Star1,
	carryChampName1,
	numOfItems1,
	is3Star2,
	carryChampName2,
	numOfItems2
) => {
	let carryColumnDiv = document.createElement("div");
	carryColumnDiv.setAttribute("class", "carryColumnDiv");

	let carryLabelSpan = document.createElement("span");
	carryLabelSpan.setAttribute("class", "carryLabelSpan");
	carryLabelSpan.innerHTML = carryLabel;

	carryColumnDiv.appendChild(carryLabelSpan);
	carryColumnDiv.appendChild(
		createCarry(is3Star1, carryChampName1, numOfItems1)
	);
	carryColumnDiv.appendChild(
		createCarry(is3Star2, carryChampName2, numOfItems2)
	);

	return carryColumnDiv;
};

// ex. Jax, 10
const createCarry = (is3Star, carryChampName, numOfItems) => {
	let carryDiv = document.createElement("div");
	carryDiv.setAttribute("class", "carryDiv");

	let carryChampImgNameAndItems = document.createElement("div");
	carryChampImgNameAndItems.setAttribute("class", "carryChampImgNameAndItems");

	let carryChampImgName = document.createElement("div");
	carryChampImgName.setAttribute("class", "carryChampImgName");
	let carryChampImg = document.createElement("div");
	carryChampImg.setAttribute("class", "champImg fourCostChamp"); // fourCostChamp is temp
	carryChampImg.setAttribute(
		"style",
		"background-image: url('res/all-champions/" + carryChampName + ".png');"
	);

	if (is3Star) {
		carryChampImg.setAttribute("class", "champImg fourCostChamp champImgStar"); // fourCostChamp is temp
	}
	0;
	let carryChampNameSpan = document.createElement("span");
	carryChampNameSpan.setAttribute("class", "champName carryChampNameSpan");
	carryChampNameSpan.innerHTML = carryChampName; //

	if (is3Star) {
		let starDiv = document.createElement("div");
		starDiv.setAttribute("class", "starDiv");
		carryChampImgName.appendChild(starDiv);
	}

	carryChampImgName.appendChild(carryChampImg);
	carryChampImgName.appendChild(carryChampNameSpan);

	let carryChampItems = document.createElement("div");
	carryChampItems.setAttribute("class", "champItems carryChampItems");

	let carryChampItemRow;
	for (let i = 0; i < numOfItems; i++) {
		if (i % 5 == 0) {
			carryChampItemRow = document.createElement("div");
			carryChampItemRow.setAttribute("class", "carryChampItemRow");
		}

		let carryChampItem = document.createElement("div");
		carryChampItem.setAttribute("class", "carryChampItem champItemNoMargin");
		carryChampItem.setAttribute(
			"style",
			"background-image: url('res/all-items/BT.png"
		); // temp

		carryChampItemRow.appendChild(carryChampItem);
		carryChampItems.appendChild(carryChampItemRow);
	}

	carryDiv.appendChild(carryChampImgNameAndItems);
	carryChampImgNameAndItems.appendChild(carryChampImgName);
	carryChampImgNameAndItems.appendChild(carryChampItems);

	return carryDiv;
};

const createStartingItems = (carryLabel, numOfItems) => {
	let startingItemsDiv = document.createElement("div");
	startingItemsDiv.setAttribute("class", "startingItemsDiv");

	let startingItemsSpan = document.createElement("span");
	startingItemsSpan.setAttribute("class", "carryLabelSpan");
	startingItemsSpan.innerHTML = carryLabel;

	let startingItemsItems = document.createElement("div");
	startingItemsItems.setAttribute("class", "startingItems");

	let carryChampItemRow;
	for (let i = 0; i < numOfItems; i++) {
		if (i % 5 == 0) {
			carryChampItemRow = document.createElement("div");
			carryChampItemRow.setAttribute("class", "carryChampItemRow");
		}

		let carryChampItem = document.createElement("div");
		carryChampItem.setAttribute("class", "carryChampItem champItemNoMargin");
		carryChampItem.setAttribute(
			"style",
			"background-image: url('res/all-items/BT.png"
		); // temp

		carryChampItemRow.appendChild(carryChampItem);
		startingItemsItems.appendChild(carryChampItemRow);
	}

	startingItemsDiv.appendChild(startingItemsSpan);
	startingItemsDiv.appendChild(startingItemsItems);
	return startingItemsDiv;
};
