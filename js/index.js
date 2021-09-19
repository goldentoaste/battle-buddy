
const { spawn } = require('child_process');
const fetch = require('node-fetch')



let star = '★'


champNameCorrection = {
    "Fiddle": "Fiddlesticks",
    "Naut": "Nautilus",
    "MF": "MissFortune",
    "Nida": "Nidalee",
    "Nida.": "Nidalee",
    "Voli": "Volibear",
}

champCosts = {

	"Aatrox": 'oneCostChamp',
	"Akshan": 'fiveCostChamp',
	"Aphelios": 'fourCostChamp',
	"Ashe": 'threeCostChamp',
	"Brand": 'twoCostChamp',
	"Diana": 'fourCostChamp',
	"Draven": 'fourCostChamp',
	"Fiddle": 'fourCostChamp',
	"Fiddlesticks": 'fourCostChamp',
	"Fiddlestick": 'fourCostChamp',
	"Fiddle[ASSA]": 'fourCostChamp',
	"Galio": 'fourCostChamp',
	"Garen": 'fiveCostChamp',
	"Gragas": 'oneCostChamp',
	"Gwen": 'fiveCostChamp',
	"Hecarim": 'twoCostChamp',
	"Heimer": 'fiveCostChamp',
	"Heimerdinger": 'fiveCostChamp',
	"Irelia": 'twoCostChamp',
	"Ivern": 'fourCostChamp',
	"Jax": 'fourCostChamp',
	"Kalista": 'oneCostChamp',
	"Karma": 'fourCostChamp',
	"Kayle": 'fiveCostChamp',
	"Kennen": 'twoCostChamp',
	"Kha'Zix": 'oneCostChamp',
	"Kled": 'oneCostChamp',
	"LeeSin": 'threeCostChamp',
	"Leona": 'oneCostChamp',
	"Lucian": 'fourCostChamp',
	"Lulu": 'threeCostChamp',
	"Lux": 'threeCostChamp',
	"MissFortune": 'threeCostChamp',
	"Nautilus": 'twoCostChamp',
	"Naut": 'twoCostChamp',
	"Nidalee": 'threeCostChamp',
	"Nocturne": 'threeCostChamp',
	"Nunu": 'threeCostChamp',
	"Olaf": 'oneCostChamp',
	"Poppy": 'oneCostChamp',
	"Pyke": 'twoCostChamp',
	"Rakan": 'threeCostChamp',
	"Rell": 'fourCostChamp',
	"Riven": 'threeCostChamp',
	"Sejuani": 'twoCostChamp',
	"Senna": 'oneCostChamp',
	"Sett": 'twoCostChamp',
	"Soraka": 'twoCostChamp',
	"Syndra": 'twoCostChamp',
	"Teemo": 'fiveCostChamp',
	"Thresh": 'twoCostChamp',
	"Tristana": 'twoCostChamp',
	"Udyr": 'oneCostChamp',
	"Varus": 'twoCostChamp',
	"Vayne": 'oneCostChamp',
	"Vel'Koz": 'fourCostChamp',
	"Viego": 'fiveCostChamp',
	"Vladimir": 'oneCostChamp',
	"Voli": 'fiveCostChamp',
	"Volibear": 'fiveCostChamp',
	"Yasuo": 'threeCostChamp',
	"Ziggs": 'oneCostChamp',
	"Zyra": 'threeCostChamp'
}

output = `Legendary Itemization&9+Garen,Galio,Teemo,Heimer,Ivern,Voli,Fiddle,Lulu,Gwen+2-KNT,2-INVO,2-HELL,2-RNEW,3-RVNT,3-MYST&8+Garen,Karma,Syndra,Teemo,Heimer,Ivern,Voli,Fiddle+2-DAWN,4-INVO,2-RNEW,3-RVNT&Heimer:Shojin/AS/JG/DCap/GRB|Teemo:GA/JG/HoJ/Blue/Shojin&Garen:WM/BV/DClaw/Morello|Volibear:Morello/FH/SC/IS&Kayle:GRB/DB/BT/GS/HoJ/GB/GA|Gwen:Blue/Shojin/GB/HoJ/JG/IE/TR/WM&champItems|Viego:QSS/Blue/RFC/GA|Akshan:DB/BT/RH/GRB/HoJ/IE&
Yasuo&8+Irelia,Yasuo,LeeSin,Diana,Sejuani,Rell,Jax,Nautilus+2-LEGI,3-SKRM,4-NITE,2-CAVA,3-IRON&8+Irelia,Yasuo,LeeSin,Diana,Sejuani,Vladimir,Aphelios,Viego+2-LEGI,3-SKRM,6-NITE,2-ASSA&★Yasuo:RH/HoJ/RFCGB/DCap/JG/AS/TR/GA/CAVA&★Sejuani:SC/Rdmp/BV/WM/DClaw/GaSt/IS&Diana:FH/Shojin|LeeSin:ASSA/CAVA/TG&slowRoll|(champs)|L7|Yasuo/LeeSin/Sejuani&
Nocturne&8+Kha'Zix,Pyke,Diana,Viego,Nocturne,Fiddle[ASSA],Ivern,Volibear+6-ASSA,3-RVNT&8+Gwen,Pyke,Diana,Viego,Nocturne,Fiddle,Ivern,Volibear+2-MYST,4-ASSA,4-RVNT&★Nocturne:LW/RH/DB/IE/GRB/QSS/GS/RFC/TR&Fiddlesticks:ASSA/FH/IS/DCap/Morello&Ivern:Zekes/Zekes|Volibear:Morello|Diana:FH/Shojin/RVNT|Viego:QSS/Blue&slowRoll|(champs)|L7|Nocturne/Pyke&
Kayle&8+Galio,Nautilus,Rell,Kayle,Syndra,Ivern,Volibear,Irelia+2-KNT,2-IRON,2-LEGI,2-INVO,2-RVNT&8+Galio,Nautilus,Rell,Kayle,Aatrox,Thresh,Garen,Jax+4-KNT,3-IRON,2-LEGI&Kayle:GRB/DB/BT/GS/HoJ/GB/GA&Galio:WM/GaSt/BV/DClaw/Rdmp/SC&&2Legionnaire if no sustain on Kayle.|Optional: 6Knight&
Lucian&8+Senna,Lucian,Pyke,Akshan,Rakan,Galio,Ivern,Voli+6-SENT,2-CANN,2-RNEW,2-RVNT&8+Senna,Lucian,Pyke,Akshan,Rakan,Galio,Nautilus,Rell+6-SENT,2-CANN,2-KNT,2-IRON&Lucian:IE/JG/TRDB/GS/HoJ/LW/BT/GRB&Galio:WM/GaSt/BV/DClaw/Rdmp/SC&Akshan:DB/BT/HoJ/GRB/RH|Senna/Rakan:Zekes/TClaw&Optional: Pivot to 2*Akshan lategame&
Abom  X&8+Brand,Nunu,Fiddle,Voli,Ivern,Heimer,Lulu,Teemo+3-ABOM,2-BRWL,2-MYST,3-RVNT,2-RNEW,2-INVO,2-HELL&8+Brand,Nunu,Fiddle,Voli,Ivern,Syndra,Vel'Koz,Lux+3-ABOM,2-SPLW,2-BRWL,2-MYST,3-RVNT,2-INVO,3-REDM&Heimer/Vel'Koz:Shojin/AS/JG/IE/DCap/HoJ/GS&Abomination:SC/IS/BV/DClaw/WM/TR/Rdmp&Fiddle:IS/FH|Teemo:GA/RVNT|Volibear:Morello&&
Fortnite Jax&8+Garen,Galio,Thresh,Nautilus,Rell,Jax,Irelia,Olaf+4-KNT,3-SENT,3-IRON,3-SKRM&6+Senna,Olaf,Irelia,Nidalee,Thresh,Nautilus+3-SENT,3-SKRM,2-KNT&Jax:BT/LW/RH/TR/IE/DB/HoJ/RFC/QSS/GA&Galio/Irelia:WM/BV/DClaw/TR/GaSt/Rdmp/SC&Galio:Morello&Late: Nidalee+Viego > Olaf+Irelia|Level 9: Akshan/Gwen/2.Jax&
Rangers&8+Lulu,Fiddle,Volibear,Ivern,Teemo,Diana,Aphelios,Akshan+2-HELL,2-MYST,3-RVNT,2-INVO,2-NITE,2-RNGR&8+Rell,Nautilus,Thresh,Galio,Garen,Diana,Aphelios,Akshan+2-IRON,4-KNT,2-NITE,2-RNGR&Aphelios/Akshan:DB/BT/GRBHoJ/IE/LW/Shojin/RH/GS&Rell/Ivern/Volibear:WM/BV/DClaw/GaSt/Rdmp/SC&Volibear:Morello/SC/TG&&
Vayne Reroll&8+Vayne,Hecarim,Thresh,MF,Draven,Viego,Nautilus,Rell+5-FORG,2-CAVA,2-KNT,2-IRON&8+Vayne,Hecarim,Thresh,MF,Ashe/Akshan,Nautilus,Rell,Jax+3-FORG,2-CAVA,2-KNT,3-IRON&★Vayne:RH/GRB/GS/JG/HoJ/RH/RFC&★Hecarim:WM/BV/DClaw/GaSt/Rdmp/SC&MissFortune/Ashe:Zekes/TClaw&slowRoll|(champs)|L5|Vayne/Hecarim/Thresh/Sejuani&
Draven&8+Hecarim,Thresh,Draven,Viego,Irelia,Jax,Nautilus,Rell+4-FORG,2-CAVA,2-KNT,2-LEGI,3-SKRM,3-IRON&&Draven:LW/GS/RFCRH/IE/BT/DB/GRB&Hecarim/Rell:WM/BV/DClaw/GaSt/Rdmp/SC&Jax:TClaw/Zekes&&
Kalista/Aatrox Reroll&8+Kalista,Aatrox,Leona,Poppy,Galio,Nautilus,Rell,Jax+2-LEGI,4-KNT,3-IRON&8+Kalista,Aatrox,Leona,Syndra,Rell,Kayle,Lux,Lulu/Naut/Irelia+3-LEGI,5-REDM&★Kalista:LW/IE/GRB/GS/HoJ/RH/DB/Shojin&★Aatrox:TR/BV/DClaw/GaSt/WM/AS/SC&&slowRoll|(champs)|L5|Aatrox/Kalista/Leona&
Dawnbringer Invoker&8+Garen,Soraka,Nida./Riven,Karma,Ivern,Volibear,Fiddle,Gwen+3-DAWN,2-RNEW,2-INVO,3-RVNT,2-MYST&8+Garen,Nidalee,Riven,Karma,Kha'Zix,Soraka,Ivern,Voli+6-DAWN,2-INVO,2-RNEW,2-RVNT&Garen:WM/BV/DClaw/WM/Morello&Karma:Blue/DCap/DCap/JG/IE/HoJ/Shojin&★Riven:RH/BT/DB/LW|Soraka:CoP|Volibear:Morello/SC/DAWN&&
Redeemed&8+Leona,Rell,Kayle,Lux,Vel'Koz,Syndra,Ivern,Volibear+5-REDM,2-INVO,2-RVNT&&Vel'Koz:Shojin/JG/HoJ/GB/IE/DCap&Rell:WM/BV/DClaw/GaSt/Rdmp/IS&★Lux:Shojin/GRB/AS/DCap&&
Riven/Nidalee Reroll&8+Irelia,Riven,Nidalee,Jax,Rell,Nautilus,Galio,Rakan+2-LEGI,3-SENT,3-SKRM,2-DAWN,3-IRON,2-KNT&8+Irelia,Riven,Nidalee,Soraka,Garen,Galio,Rakan,Viego+2-LEGI,3-SENT,3-SKRM,4-DAWN,2-RNEW,2-KNT&★Riven:BT/RH/DBRFC/LW/IE/HoJ/GS/QSS/GA&Galio/Irelia:WM/BV/DClaw/GaSt/Rdmp/SC&★Nidalee:GRB/HoJ/BT/Statikk/TG|Jax:RFC/BT/RH/LW&slowRoll|(champs)|L7|Riven/Nidalee&
Miss Fortune&8+Garen,Galio,Rell,Nautilus,Thresh,Hecarim,MissFortune,Viego+4-KNT,2-IRON,2-CAVA,4-FORG&6+Sejuani,Hecarim,MissFortune,Vayne,Thresh,Nautilus+2-CAVA,4-FORG,2-KNT&★MissFortune:Shojin/AS/HoJ/GRB/JG/IE/GB&★Hecarim/Sejuani:WM/BV/IS/DClaw/GaSt/Rdmp/SC&★Thresh/★Nautilus:CAVA|Galio:TClaw/Shroud&slowRoll|(champs)|L6/L7|MissFortune/Hecarim/Thresh/Sejuani&
Hellion Reroll&8+Galio,Poppy,Kennen,Lulu,Tristana,Senna,MissFortune,Lucian+3-SENT,2-KNT,4-HELL,4-CANN&6+Thresh,Poppy,Kennen,Tristana,Lulu,MissFortune+2-FORG,2-KNT,4-HELL,2-CANN&★Tristana:LW/BT/RH/IE/DB/HoJ/GS/TR/QSS/GA&★Kennen:Morello/FH/GA/Shojin&Lulu:TClaw/Zekes/CoP/Shojin&slowRoll|(trait)|L6|Tristana/Kennen/Lulu/Thresh/MF*(trait)|L8|2RVNT/3MYST/4KNT/6HELL&
Soraka/Irelia Reroll&8+Pyke,Rakan,Irelia,Kennen,Nidalee,Soraka,Lulu,Gwen+3-SENT,2-RNEW,3-SKRM,2-HELL,2-DAWN,2-MYST&6+Pyke,Rakan,Irelia,Kennen,Nidalee,Soraka+3-SENT,2-RNEW,3-SKRM,2-DAWN&★Soraka:Shojin/AS/JGDCap&★Irelia:WM/BV/DClaw/GaSt/BT/IE/TR&★Pyke:SC/Morello|★Rakan:Rdmp/GRB|★Nidalee:GRB/BT/LW&slowRoll|(champs)|L6|Soraka/Irelia/Pyke/Rakan/Kennen/Nidalee&
Skirmishers&8+Diana,Viego,Kennen,LeeSin,Irelia,Nidalee,Jax,Rell+2-NITE,2-ASSA,6-SKRM,2-IRON&8+Diana,Viego,Kennen,LeeSin,Jax,Olaf,Irelia,Akshan+2-NITE,2-ASSA,6-SKRM,3-SENT&Jax:RH/BT/QSSLW/IE/GS/HoJ/RFC&★Kennen:Morello/GA/FH&&Roll@Level 6 6Skirmishers&
`


function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {

	//TODO const res = await fetch("http://localhost:8080/",);

	//const data = await res.text();
	const data = output

	lines = data.split('\n')

	for (let i = 0; i < lines.length - 1; i++) {
		fields = lines[i].split('&');
		compId = "comp" + (i + 1)
		createComp1(compId, fields[0]);


		group1 = fields[1].split('+')
		champs1 = group1[1].split(",")
		traits1 = group1[2].split(",")


		group2 = fields[2].split('+')

		champs2 = group2[0].length == 0 ? [] : group2[1].split(",")
		traits2 = group2[0].length == 0 ? [] : group2[2].split(",")

		for(let j = 0; j < group1.length; j++){
			if(group1[j] in champNameCorrection){
				group1[j] = champNameCorrection[group1[j]]
			}
		}
		for(let j = 0; j < group2.length; j++){
			if(group2[j] in champNameCorrection){
				group2[j] = champNameCorrection[group1[j]]
			}
		}

		itemsGroups = fields[3].split('|').concat(fields[4].split('|')).concat(fields[5].split('|'))
		itemsGroups = itemsGroups.filter(item => item.length > 0)

		starredChamps = new Set();
		champItemDict = {};

		


		for (let j = 0; j < itemsGroups.length; j++) {
			stuff = itemsGroups[j].split(':')

			items = stuff[1].split('/')

			champItemDict["" + stuff[0]] = items;

			champs = stuff[0].split("/");


			if (champs.length > 1) {
				for (let k = 0; k < champs.length; k++) {
					champItemDict["" + champs[k]] = items;

					if (champs[k].charAt(0) === star) {
						starredChamps.add(champs[k].substr(1, champs[k].length));
					}
				}
			}
			else {
				if (stuff[0].charAt(0) === star) {
					starredChamps.add(stuff[0].substr(1, stuff[0].length));
				}

			}

		}
		console.log(starredChamps, champItemDict);
		for (let j = 0; j < champs1.length; j++) {
			let items;
			if (starredChamps.has(champs1[j])) {
				items = champItemDict[star + champs1[j]];
				console.log(star + champs1[j], (star + champs1[j]) in champItemDict, champs1[j], items)
			}
			else {
				items = champItemDict[champs1[j]];
			}

			if (!items) {
				items = [];
			}

			createChamps(compId + "champsDivRow" + 1, champs1[j].split('/'), items)
		}
		for (let j = 0; j < champs2.length; j++) {
			let items;
			if (starredChamps.has(champs2[j])) {
				items = champItemDict[star + champs2[j]];
			}
			else {
				items = champItemDict[champs2[j]];
			}
			if (!items) {
				items = [];
			}
			createChamps(compId + "champsDivRow" + 2, champs2[j].split('/'), items)
		}
	}

}
const doStuff =  async()=>{
	await sleep(500);
	fetchData();
}
doStuff()
// child = spawn('./py/parse.exe')
// child.on('spawn', async () => {

// 	await sleep(4000);

// 	//fetchData();
// })


const createChamps = (compId, champNames, items) => {
	//string, List[str], List[str]
	let champDiv = document.createElement("div");
	champDiv.setAttribute("class", "champDiv");

	let champImgDiv = document.createElement("div");
	champImgDiv.setAttribute("class", "champImgDiv");

	let champItemsDiv = document.createElement("div");
	champItemsDiv.setAttribute("class", "champItemsDiv");

	for (let i = 0; i < champNames.length; i++) {
		if (champNames[i] in champNameCorrection) {
			champNames[i] = champNameCorrection[champNames[i]];
		}

		let individualDiv = document.createElement("div");
		individualDiv.setAttribute('class', 'individualChamp');


		//(champCosts[champNames[i]])

		let champImg = document.createElement("div");
		attributes = "champImg " + (items.length === 0 ? " champImgNoItem " : "") + champCosts[champNames[i]] + (champNames[i].charAt(0) === star ? 'champImgStar' : "")
		champImg.setAttribute("class", attributes); // twoCostChamp is temp
		champImg.setAttribute(
			"style",
			"background-image: url('res/all-champions/" + champNames[i] + ".png')"
		);

		if (champNames[i].charAt(0) === star) {

			let starDiv = document.createElement("div");
			starDiv.setAttribute("class", "starDiv");
			champImg.appendChild(starDiv);
		}

		individualDiv.appendChild(champImg)
		champImgDiv.appendChild(individualDiv)

	}

	for (let i = 0; i < Math.min(3, items.length); i++) {
		item = document.createElement("div");
		item.setAttribute("style",
			"background-image: url('res/all-items/" + items[i] + ".png')")
		item.setAttribute('class', "champItem " + ((i == 0 || i == items.length - 1) ? "champItemWidthSlightlyLarger" : "") + (i != 0 ? "champItemNoMargin" : ""))
		champItemsDiv.appendChild(item)
	}

	let champNamesSpan = document.createElement("span");
	champNamesSpan.setAttribute("class", "champName");
	champNamesSpan.innerHTML = champNames.join("/");

	document.getElementById(compId).appendChild(champDiv);
	champDiv.appendChild(champImgDiv);
	if (items.length> 0 ) champDiv.appendChild(champItemsDiv)
	champDiv.appendChild(champNamesSpan);



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
