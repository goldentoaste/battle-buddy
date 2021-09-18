let openComps = [];

const createComp = (compId) => {
  let compDiv = document.createElement("div");
  compDiv.setAttribute("id", compId);
  compDiv.setAttribute("class", "comp");

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
  compDiv.appendChild(compNameAndDetailsDiv);
  compDiv.appendChild(compChampsDiv);
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
  champItemsDiv.appendChild(champItem2);
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
};

const viewLessDetails = (compId) => {};

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
