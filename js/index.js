const createComp = (compId) => {
  let compDiv = document.createElement("div");
  compDiv.setAttribute("id", compId);
  compDiv.setAttribute("class", "comp");

  let compName = document.createElement("span");
  compName.setAttribute("class", "compName");
  compName.innerHTML = "Comp name"; // temp

  let viewMore = document.createElement("span");
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

  document.getElementById("main-comps").appendChild(compDiv);
  compDiv.appendChild(compNameAndDetailsDiv);
  compDiv.appendChild(compChampsDiv);

  createChamp(compId + "Row1");
  createChamp(compId + "Row1");
  createChamp(compId + "Row1");
  select2Champs(compId + "Row1");
  select2ChampsWithItems(compId + "Row1");
  select3ChampsWithItems(compId + "Row1")
  createChampWithItems(compId + "Row2");
  createChampWithItems(compId + "Row2");
  createChampWithItems(compId + "Row2");
  create3StarChamp(compId + "Row2");
  create3StarChampWithItems(compId + "Row2");
  create3StarChampWithItems(compId + "Row2");
  select3Champs(compId + "Row2");
};

const createChamp = (compId) => {
  let champDiv = document.createElement("div");
  champDiv.setAttribute("class", "champDiv");

  let champImg = document.createElement("div");
  champImg.setAttribute("class", "champImg champImgNoItem");
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
  champImg.setAttribute("class", "champImg");
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
  champImg.setAttribute("class", "champImg champImgStar champImgNoItem");
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
  champImg.setAttribute("class", "champImg champImgStar");
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
  champImg1.setAttribute("class", "champImg champImgNoItem");
  champImg1.setAttribute(
    "style",
    "background-image: url('res/all-champions/Akshan.png')"
  ); // temp

  let champImg2 = document.createElement("div");
  champImg2.setAttribute("class", "champImg champImgNoItem");
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
  champImg1.setAttribute("class", "champImg");
  champImg1.setAttribute(
    "style",
    "background-image: url('res/all-champions/Akshan.png')"
  ); // temp

  let champImg2 = document.createElement("div");
  champImg2.setAttribute("class", "champImg");
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
  champImg1.setAttribute("class", "champImg champImgNoItem");
  champImg1.setAttribute(
    "style",
    "background-image: url('res/all-champions/Lulu.png')"
  ); // temp

  let champImg2 = document.createElement("div");
  champImg2.setAttribute("class", "champImg champImgNoItem");
  champImg2.setAttribute(
    "style",
    "background-image: url('res/all-champions/Irelia.png'); margin-left: -16px"
  ); // temp

  let champImg3 = document.createElement("div");
  champImg3.setAttribute("class", "champImg champImgNoItem");
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
  champImg1.setAttribute("class", "champImg");
  champImg1.setAttribute(
    "style",
    "background-image: url('res/all-champions/Karma.png')"
  ); // temp

  let champImg2 = document.createElement("div");
  champImg2.setAttribute("class", "champImg");
  champImg2.setAttribute(
    "style",
    "background-image: url('res/all-champions/Riven.png'); margin-left: -16px"
  ); // temp

  let champImg3 = document.createElement("div");
  champImg3.setAttribute("class", "champImg");
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
