/////////////////////////////////////////////////////////
//
// Country is an object holding the following parameters:
//		name, value, color, tags
//
/////////////////////////////////////////////////////////

function City(nm, val, col, tag) {
  this.name = nm;
  this.value = val;
  this.color = col;
  this.tags = tag;
}

var cities = [];

var toronto = new City("toronto", 0, "", ["multicultural", "nightLife", "skiSnowboard", "shopping", "hockey", "baseball", "basketball", "beer"]);
cities.push(toronto);

var vancouver = new City("vancouver", 0, "", ["skiSnowboard", "mountains", "hiking", "multicultural", "aquariums", "hockey", "sailing", "scubaDiving"]);
cities.push(vancouver);

var montreal = new City("montreal", 0, "", ["shopping", "nightLife", "hockey", "skiSnowboard", "artGalleries", "concerts", "cathedrals", "architecture"]);
cities.push(montreal);

var newYorkCity = new City("newYorkCity", 0, "", ['shopping', 'nightLife', 'fashion', 'basketball', 'baseball', 'concerts', 'multicultural', 'architecture']);
cities.push(newYorkCity);

var nashville = new City("nashville", 0, "", ["countryMusic", 'beer', 'hockey', 'football', 'museums', 'concerts', 'nightLife', 'architecture']);
cities.push(nashville);

var chicago = new City("chicago", 0, "", ['pizza', 'hockey', 'baseball', 'artGalleries', 'shopping', 'museums', 'architecture', 'beaches']);
cities.push(chicago);

var losAngeles = new City("losAngeles", 0, "", ['palmTrees', 'beaches', 'shopping', 'fashion', 'surfing', 'nightLife', 'hockey', 'multicultural']);
cities.push(losAngeles);

var amsterdam = new City("amsterdam", 0, "", ['artGalleries', 'museums', 'legalizedMarijuana', 'nightLife', 'beer', 'concerts', 'shopping', 'multicultural']);
cities.push(amsterdam);

var stockholm = new City("stockholm", 0, "", ['hockey', 'skiSnowboard', 'beer', 'architecture', 'museums', 'nightlife', 'concerts', 'auroraBorealis']);
cities.push(stockholm);

var copenhagen = new City("copenhagen", 0, "", ['architecture', 'castles', 'museums', 'artGalleries', 'aquariums', 'beer', 'sailing', 'shopping']);
cities.push(copenhagen);

var marrakech = new City("marrakech", 0, "", ['mosques', 'museums', 'openMarkets', 'mountains', 'nightLife', 'dry', 'exotic animals', 'beaches']);
cities.push(marrakech);

var siemReap = new City("siemReap", 0, "", ['ancientRuins', 'wildlife', 'museums', 'legalizedMarijuana', 'jungles', 'palmTrees', 'exoticAnimals']);
cities.push(siemReap);

var istanbul = new City("istanbul", 0, "", ['openMarkets', 'museums', 'architecture', 'mosques', 'castles', 'nightLife', 'beaches', 'ancientRuins']);
cities.push(istanbul);

var hanoi = new City("hanoi", 0, "", ['architecture', 'museums', 'outdoorMarkets', 'temples', 'beaches', 'nightLife', 'exoticAnimals', 'mountains']);
cities.push(hanoi);

var prague = new City("prague", 0, "", ['cathedrals', 'castles', 'beer', 'legalizedMarijuana', 'concerts', 'museums', 'nightLife', 'hockey']);
cities.push(prague);

var london = new City("london", 0, "", ['artGalleries', 'museums', 'castles', 'shopping', 'concerts', 'soccer', 'multicultural', 'cathedrals']);
cities.push(london);

var buenosAires = new City("buenosAires", 0, "", ['beaches', 'soccer', 'architecture', 'museums', 'nightLife', 'palmTrees', 'hiking', 'vineyards']);
cities.push(buenosAires);

var berlin = new City("berlin", 0, "", ['beer', 'soccer', 'artGalleries', 'museums', 'castles', 'architecture', 'nightLife', 'cathedrals']);
cities.push(berlin);

var rome = new City("rome", 0, "", ['pizza', 'romance', 'ancientRuins', 'cathedrals', 'museums', 'cafes', 'soccer', 'beaches']);
cities.push(rome);

var reykjavik = new City("reykjavik", 0, "", ['northernLights', 'waterfalls', 'hotSprings', 'hiking', 'glaciers', 'nightLife', 'mountains', 'skiSnowboard']);
cities.push(reykjavik);

var kiev = new City("kiev", 0, "", ['museums', 'cathedrals', 'openMarkets', 'architecture', 'beer', 'nightLife', 'soccer', 'artGalleries']);
cities.push(kiev);

var krakow = new City("krakow", 0, "", ['nightLife', 'castles', 'beer', 'concerts', 'architecture', 'cathedrals', 'soccer', 'shopping']);
cities.push(krakow);

var paris = new City("paris", 0, "", ['artGalleries', 'concerts', 'cathedrals', 'museums', 'cafes', 'romance', 'shopping', 'soccer']);
cities.push(paris);

var rioDeJaneiro = new City("rioDeJaneiro", 0, "", ['surfing', 'beaches', 'paragliding', 'mountains', 'palmTrees', 'soccer', 'scubaDiving']);
cities.push(rioDeJaneiro);

var capeTownCentral = new City("capeTownCentral", 0, "", ['surfing', 'beaches', 'vineyards', 'mountains', 'castles', 'outdoorMarkets', 'hiking', 'rugby']);
cities.push(capeTownCentral);

var budapest = new City("budapest", 0, "", ['hotSprings', 'museums', 'castles', 'nightLife', 'mountains', 'cathedrals', 'architecture', 'concerts']);
cities.push(budapest);

var zermatt = new City("zermatt", 0, "", ['legalizedMarijuana', 'hotSprings', 'hiking', 'skiSnowboard', 'mountains', 'glaciers', 'castles', 'shopping']);
cities.push(zermatt);

var barcelona = new City("barcelona", 0, "", ['surfing', 'legalizedMarijuana', 'beaches', 'soccer', 'castles', 'cathedrals', 'nightLife', 'basketball']);
cities.push(barcelona);

var florence = new City("florence", 0, "", ['romance', 'cathedrals', 'artGalleries', 'architecture', 'openMarkets', 'shopping', 'sailing', 'cafes']);
cities.push(florence);

var bangkok = new City("bangkok", 0, "", ['aquariums', 'museums', 'temples', 'beaches', 'exoticAnimals', 'jungles', 'nightLife', 'sailing']);
cities.push(bangkok);

var athens = new City("athens", 0, "", ['ancientRuins', 'mountains', 'museums', 'openMarkets', 'concerts', 'cafes', 'hiking', 'sailing']);
cities.push(athens);

var queenstown = new City("queenstown", 0, "", ['paragliding', 'rugby', 'vineyards', 'nightLife', 'skiSnowboard', 'mountains', 'scubaDiving', 'safari']);
cities.push(queenstown);

var sydney = new City("sydney", 0, "", ['surfing', 'scubaDiving', 'beaches', 'concerts', 'museums', 'aquariums', 'rugby', 'multicultural']);
cities.push(sydney);

var vienna = new City("vienna", 0, "", ['skiSnowboard', 'beer', 'concerts', 'mountains', 'cathedrals', 'vineyards', 'castles', 'museums']);
cities.push(vienna);

var honolulu = new City("honolulu", 0, "", ['surfing', 'scubaDiving', 'beaches', 'romance', 'mountains', 'waterfalls', 'palmTrees', 'aquariums']);
cities.push(honolulu);


/////////////////////////////////////////////////////////
//
// Complete list of tags used in the filter system
//
/////////////////////////////////////////////////////////

function Tags(nm, img, bgC, text) {
	this.name = nm;
	this.image = img;
	this.color = bgC;
	this.text = text;
}

var tagsList = [];

var ancientRuins = new Tags("ancientRuins", "img/tags/ancientRuins.svg", "", "Explore ancient ruins?");
tagsList.push(ancientRuins);

var aquariums = new Tags("aquariums", "img/tags/aquariums.svg", "", "Visit an aquarium?");
tagsList.push(aquariums);

var architecture = new Tags("architecture", "img/tags/architecture.svg", "", "Be surrounded by beautiful architecture?");
tagsList.push(architecture);

var artGalleries = new Tags("artGalleries", "img/tags/artMuseums.svg", "", "Immerse yourself in art?");
tagsList.push(artGalleries);

var auroraBorealis = new Tags("auroraBorealis", "img/tags/auroraBorealis.svg", "", "Witness the Aurora Borealis?");
tagsList.push(auroraBorealis);

var baseball = new Tags("baseball", "img/tags/baseball.svg", "", "Go out to the ball game?");
tagsList.push(baseball);

var basketball = new Tags("basketball", "img/tags/basketball.svg", "", "Watch some hoops?");
tagsList.push(basketball);

var beach = new Tags("beach", "img/tags/beaches.svg", "", "Hit the beach?");
tagsList.push(beach);

var beer = new Tags("beer", "img/tags/beer.svg", "", "Grab a brew?");
tagsList.push(beer);

var cafes = new Tags("cafes", "img/tags/cafes.svg", "", "Have lunch at a cafe?");
tagsList.push(cafes);

var castles = new Tags("castles", "img/tags/castles.svg", "", "Explore castles?");
tagsList.push(castles);

var cathedrals = new Tags("cathedrals", "img/tags/cathedrals.svg", "", "Visit cathedrals?");
tagsList.push(cathedrals);

var concerts = new Tags("concerts", "img/tags/concert.svg", "", "Go see a concert?");
tagsList.push(concerts);

var countryMusic = new Tags("countryMusic", "img/tags/countryMusic.svg", "", "Take in some country music?");
tagsList.push(countryMusic);

var dry = new Tags("dry", "img/tags/dry.svg", "", "Be in a dry climate?");
tagsList.push(dry);

var exoticAnimals = new Tags("exoticAnimals", "img/tags/exoticAnimals.svg", "", "See exotic animals?");
tagsList.push(exoticAnimals);

var fashion = new Tags("fashion", "img/tags/fashion.svg", "", "Take in fashion culture?");
tagsList.push(fashion);

var football = new Tags("fashion", "img/tags/football.svg", "", "Watch a football game?");
tagsList.push(fashion);

var glaciers = new Tags("glaciers", "img/tags/glaciers.svg", "", "Visit glaciers?");
tagsList.push(glaciers);

var hiking = new Tags("hiking", "img/tags/hiking.svg", "", "Take a hike?");
tagsList.push(hiking);

var hockey = new Tags("hockey", "img/tags/hockey.svg", "", "Catch a hockey game?");
tagsList.push(hockey);

var hotSprings = new Tags("hotSprings", "img/tags/hotSprings.svg", "", "Relax in some hot springs?");
tagsList.push(hotSprings);

var humid = new Tags("humid", "img/tags/humid.svg", "", "Be in a humid climate?");
tagsList.push(humid);

var jungles = new Tags("jungles", "img/tags/jungles.svg", "", "Explore the jungle?");
tagsList.push(jungles);

var legalizedMarijuana = new Tags("legalizedMarijuana", "img/tags/legalizedMarijuana.svg", "", "Go Where it is legal?");
tagsList.push(legalizedMarijuana);

var mosques = new Tags("mosques", "img/tags/mosques.svg", "", "Visit mosques?");
tagsList.push(mosques);

var mountains = new Tags("mountains", "img/tags/mountains.svg", "", "Have mountains in the background?");
tagsList.push(mountains);

var multicultural = new Tags("multicultural", "img/tags/multiCultural.svg", "", "Be somewhere multicultural?");
tagsList.push(multicultural);

var museums = new Tags("museums", "img/tags/museums.svg", "", "Visit museums?");
tagsList.push(museums);

var nightLife = new Tags("nightLife", "img/tags/nightLife.svg", "", "Party hard?");
tagsList.push(nightLife);

var outdoorMarkets = new Tags("outdoorMarkets", "img/tags/outdoorMarkets.svg", "", "Shop at outdoor markets?");
tagsList.push(outdoorMarkets);

var palmTrees = new Tags("palmTrees", "img/tags/palmTrees.svg", "", "Lay under the palmtrees?");
tagsList.push(palmTrees);

var paragliding = new Tags("paragliding", "img/tags/paragliding.svg", "", "Go paragliding?");
tagsList.push(paragliding);

var pizza = new Tags("pizza", "img/tags/pizza.svg", "", "Eat authentic local pizza?");
tagsList.push(pizza);

var romance = new Tags("romance", "img/tags/romance.svg", "", "Be where the romance is?");
tagsList.push(romance);

var rugby = new Tags("rugby", "img/tags/football.svg", "", "Witness a live rugby match?");
tagsList.push(rugby);

var sailing = new Tags("sailing", "img/tags/sailing.svg", "", "Go sailing?");
tagsList.push(sailing);

var safari = new Tags("safari", "img/tags/exoticAnimals.svg", "", "Go on a safari?");
tagsList.push(safari);

var scubaDiving = new Tags("scubaDiving", "img/tags/scubaDiving.svg", "", "Go scuba diving?");
tagsList.push(scubaDiving);

var shopping = new Tags("shopping", "img/tags/shopping.svg", "", "Go shopping?");
tagsList.push(shopping);

var skiSnowboard = new Tags("skiSnowboard", "img/tags/skiSnowboard.svg", "", "Shred gnar?");
tagsList.push(skiSnowboard);

var soccer = new Tags("soccer", "img/tags/soccer.svg", "", "Go watch a soccer game?");
tagsList.push(soccer);

var surfing = new Tags("surfing", "img/tags/surfing.svg", "", "Catch some waves?");
tagsList.push(surfing);

var temples = new Tags("temples", "img/tags/temples.svg", "", "Visit temples?");
tagsList.push(temples);

var vineyards = new Tags("vineyards", "img/tags/vineyards.svg", "", "Visit vineyards?");
tagsList.push(vineyards);

var waterfalls = new Tags("waterfalls", "img/tags/waterfalls.svg", "", "Go chasing waterfalls?");
tagsList.push(waterfalls);


// var tagsList = ["hockey", "baseball", "snowboard", "mountains", "hiking", "museums",
// 				"temples", "ancient ruins", "beaches"];

/////////////////////////////////////////////////////////
//
// checkTag function queries through all city objects in 
//		the cities array and then queries through all of 
//		the tags for each city and compares the tags with
//		a specified tag. If a tag is a match for a city,
//		then the city gets a value increase of 1
//
/////////////////////////////////////////////////////////

function checkTag(tag) {
  for(i=0;i<cities.length;i++){
    for(x=0;x<cities[i].tags.length;x++){
        if(cities[i].tags[x] == tag) {
          cities[i].value = cities[i].value + 1;
          console.log(cities[i].name + " = " + cities[i].value);
        } 
      }
  }
}

function getResult(){
  var winNum = 0;
  for(i=0;i<cities.length;i++){
    if(winNum > cities[i].value){
    } else {
      winNum = cities[i].value;
    }
  }       
     
  for(x=0;x<cities.length;x++){
    if(winNum == cities[x].value){
      var winner = document.querySelector('.resultsPageImg');
      // winner.style.background = "url(" + 
    }
  }
}

/////////////////////////////////////////////////////////
//
// functions below are used to attach to cards and are 
//		triggered on swipe events
//
/////////////////////////////////////////////////////////

function beginApp(){
  var main = document.querySelector('.main');
  var cardsSection = document.querySelector('.cardsSection');
  var cardsContainer = document.querySelector('#cardsContainer');
  main.style.display = "none";
  cardsSection.style.display = "flex";
  cardsContainer.style.opacity = "1";
  cardCollector();
  createCards(); 
};

var activeTags = [];
var activeTagging = [];

function cardCollector(){
	if(tagsList.length != 0){
		for(i=0; i < 3; i++){
			randNum = Math.floor(Math.random() * tagsList.length);
			var a = tagsList.splice(randNum, 1);
			activeTags = activeTags.concat(a);
      activeTagging = activeTagging.concat(a);
		}
	} else {}
}

function createCards(){
  var marginBoost = 0;
  var zIndex = "5000";
  var cardW = "100";
  var leftPos = "0";
  var sec = document.querySelector('#cardsContainer');

  for(i=0;i<activeTags.length;i++){
    var card = document.createElement('div');
    card.setAttribute('class', 'cards');
    card.style.bottom = marginBoost + "px";
    card.style.zIndex = zIndex;
    card.style.width = cardW + "%";
    card.style.height = cardW + "%";
    card.style.left = leftPos + "%";

    sec.appendChild(card);
    marginBoost = marginBoost + 75;
    zIndex = (Number(zIndex) - 500).toString();
    cardW = (Number(cardW) - 10).toString();
    leftPos = (Number(leftPos) + 5).toString();

    var cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'cardContainer');
    card.appendChild(cardContainer);

    var cardHeader = document.createElement('div');
    cardHeader.setAttribute('class', 'cardHeader');
    cardContainer.appendChild(cardHeader);
    
    var cardHeaderImg = document.createElement('div');
    cardHeaderImg.setAttribute('class', 'cardHeaderImg');
    cardHeader.appendChild(cardHeaderImg);

    cardHeaderImg.addEventListener('click', function(){
        document.body.appendChild(getResultTestCon);
        returns();
    });
    
    var cardImgSection = document.createElement('div');
    cardImgSection.setAttribute('class', 'cardImgSection');
    cardContainer.appendChild(cardImgSection);
    
    var cardImgContainer = document.createElement('div');
    cardImgContainer.setAttribute('class', 'cardImgContainer');
    cardImgContainer.style.background = "url(" + activeTags[i].image + ") no-repeat center center";
    cardImgSection.appendChild(cardImgContainer);
    
    var cardText = document.createElement('div');
    cardText.setAttribute('class', 'cardText');
    cardContainer.appendChild(cardText);

    var text = document.createTextNode(activeTags[i].text);
    cardText.appendChild(text);
    
    var cardDecision = document.createElement('div');
    cardDecision.setAttribute('class', 'cardDecision');
    cardContainer.appendChild(cardDecision);

    var cardDecisionNoCon = document.createElement('div');
    cardDecisionNoCon.setAttribute('class', 'cardDecisionNoCon');
    cardDecision.appendChild(cardDecisionNoCon);
    cardDecisionNoCon.addEventListener('click', shift);

    var cardDecisionNo = document.createElement('div');
    cardDecisionNo.setAttribute('class', 'cardDecisionNo');
    cardDecisionNoCon.appendChild(cardDecisionNo);

    var cardDecisionYesCon = document.createElement('div');
    cardDecisionYesCon.setAttribute('class', 'cardDecisionYesCon');
    cardDecision.appendChild(cardDecisionYesCon);
     cardDecisionYesCon.addEventListener('click', filter);

    var cardDecisionYes = document.createElement('div');
    cardDecisionYes.setAttribute('class', 'cardDecisionYes');
    cardDecisionYesCon.appendChild(cardDecisionYes);

  }

    var getResultTestCon = document.createElement('div');
    getResultTestCon.setAttribute('class', 'getResultTestCon');

    var getResultTest = document.createElement('div');
    getResultTest.setAttribute('class', 'getResultTest');
    getResultTestCon.appendChild(getResultTest);

    var getReTitle = document.createElement('div');
    getReTitle.setAttribute('class', 'getReTitle');
    getResultTest.appendChild(getReTitle);

    var getReTitleText = document.createTextNode("Are you sure?");
    getReTitle.appendChild(getReTitleText);

    var getReButton1Con = document.createElement('div');
    getReButton1Con.setAttribute('class', 'resultBtn1Con');
    getResultTest.appendChild(getReButton1Con);

    var getReButton1 = document.createElement('div');
    getReButton1.setAttribute('class', 'resultBtn1');
    getReButton1Con.appendChild(getReButton1);

    var reBtnText1 = document.createTextNode("FIND MY DESTINATION");
    getReButton1.appendChild(reBtnText1);

    var getReButton2Con = document.createElement('div');
    getReButton2Con.setAttribute('class', 'resultBtn2Con');
    getResultTest.appendChild(getReButton2Con);

    var getReButton2 = document.createElement('div');
    getReButton2.setAttribute('class', 'resultBtn2');
    getReButton2Con.appendChild(getReButton2);

    var reBtnText2 = document.createTextNode("KEEP SEARCHING");
    getReButton2.appendChild(reBtnText2);

}



function filter(ev){
    console.log("workingBefore --------------------------------");
    console.log(activeTagging[0].name);
    checkTag(activeTagging[0].name);
    console.log("workingAfter ----------------------------------");
    setTimeout(function(){
        shift(ev);
    }, 200);

}

function returns(){
    var btn1 = document.querySelector(".resultBtn1Con");
    var tests = document.querySelector(".getResultTestCon");
    var resultsCon = document.querySelector('#resultsPage-wrap');
    var results = document.querySelector('.resultsPage');
    var cards = document.querySelectorAll('.cards');
    console.log(cards);

  btn1.addEventListener("click", function(){
    // getResult();
    tests.remove();
    resultsCon.style.display = "flex";
    for(i=0;i<cards.length;i++){
      cards[i].style.display = "none";
      console.log(cards[i]);
    }
  })
}


var counter = 1;
function shift(ev){

		var firstChild = ev.target.closest('.cards:first-child');
		var cardContainerFirst = ev.target.closest('.cardContainer:first-child');

		var cards = document.querySelectorAll('.cards');
		var cardsContainer = document.querySelectorAll('.cardContainer');

		firstChild.style.opacity = "0";
		setTimeout(function(){
			firstChild.remove();
			// activeTags.splice(0,3);
		}, 1000)

		switch(counter) {
			case 1:
				activeTags.splice(0,3);
        activeTagging.splice(0,1);

				if(tagsList.length != 0) {
				for(i=0; i < 3; i++) {
					randNum = Math.floor(Math.random() * tagsList.length);
					var a = tagsList.splice(randNum, 1);
					// var a = tagsList[randNum].name;
					activeTags = activeTags.concat(a);
          activeTagging = activeTagging.concat(a);
					// activeTags.push(a);
					}
				} else {}

				counter = 2;
				break;

			case 2:
				activeTags.splice(0,1);
        activeTagging.splice(0,1);

				if(tagsList.length != 0) {
				for(i=0; i < 1; i++) {
					randNum = Math.floor(Math.random() * tagsList.length);
					var a = tagsList.splice(randNum, 1);
					// var a = tagsList[randNum].name;
					activeTags = activeTags.concat(a);
          activeTagging = activeTagging.concat(a);
					// activeTags.push(a);
					}
				} else {}
				break;
		}

		setTimeout(function(){
			for(i=0; i<3; i++){
			cards[i].style.bottom = (parseInt(cards[i].style.bottom) - 75) + "px";
			cards[i].style.width = (parseInt(cards[i].style.width) + 10) + "%";
			cards[i].style.height = (parseInt(cards[i].style.height) + 10) + "%";
			cards[i].style.zIndex = (parseInt(cards[i].style.zIndex) + 500) + "";
			cards[i].style.left = (parseInt(cards[i].style.left) - 5) + "%";
			}
		}, 800)


		cardContainerFirst.style.opacity = "1";

		

		setTimeout(function(){
			var card = document.createElement('div');
			var sec = document.querySelector('#cardsContainer');
			card.setAttribute('class', 'cards');
		    card.style.bottom = "150px";
		    card.style.zIndex = "4000";
		    card.style.width = "80%";
		    card.style.height = "80%";
		    card.style.left = "10%";
		    card.style.opacity = "0";
		    sec.appendChild(card);
		    // card.addEventListener('click', shift);

		    var cardContainer = document.createElement('div');
		    cardContainer.setAttribute('class', 'cardContainer');
		    card.appendChild(cardContainer);

		    var cardHeader = document.createElement('div');
		    cardHeader.setAttribute('class', 'cardHeader');
		    cardContainer.appendChild(cardHeader);
		    
		    var cardHeaderImg = document.createElement('div');
		    cardHeaderImg.setAttribute('class', 'cardHeaderImg');
		    cardHeader.appendChild(cardHeaderImg);

        cardHeaderImg.addEventListener('click', function(){
        document.body.appendChild(getResultTestCon);
        returns();
        });
		    
		    var cardImgSection = document.createElement('div');
		    cardImgSection.setAttribute('class', 'cardImgSection');
		    cardContainer.appendChild(cardImgSection);
		    
		    var cardImgContainer = document.createElement('div');
		    cardImgContainer.setAttribute('class', 'cardImgContainer');
		    cardImgContainer.style.background = "url(" + activeTags[0].image + ") no-repeat center center";
		    cardImgSection.appendChild(cardImgContainer);
		    
		    var cardText = document.createElement('div');
		    cardText.setAttribute('class', 'cardText');
		    cardContainer.appendChild(cardText);

		    var text = document.createTextNode(activeTags[0].text);
    		cardText.appendChild(text);
		    
		    var cardDecision = document.createElement('div');
		    cardDecision.setAttribute('class', 'cardDecision');
		    cardContainer.appendChild(cardDecision);

		    var cardDecisionNoCon = document.createElement('div');
		    cardDecisionNoCon.setAttribute('class', 'cardDecisionNoCon');
		    cardDecision.appendChild(cardDecisionNoCon);
		    cardDecisionNoCon.addEventListener('click', shift);

		    var cardDecisionNo = document.createElement('div');
		    cardDecisionNo.setAttribute('class', 'cardDecisionNo');
		    cardDecisionNoCon.appendChild(cardDecisionNo);

		    var cardDecisionYesCon = document.createElement('div');
		    cardDecisionYesCon.setAttribute('class', 'cardDecisionYesCon');
		    cardDecision.appendChild(cardDecisionYesCon);
		    cardDecisionYesCon.addEventListener('click', filter)
        //   console.log("workingBefore");
        //   checkTag(activeTags[0].name);
        //   console.log("working");
        //   shift();
        // });

		    var cardDecisionYes = document.createElement('div');
		    cardDecisionYes.setAttribute('class', 'cardDecisionYes');
		    cardDecisionYesCon.appendChild(cardDecisionYes);

		    setTimeout(function(){
		    	card.style.opacity = "1";
		    }, 200);
		}, 1200);
  
    var getResultTestCon = document.createElement('div');
    getResultTestCon.setAttribute('class', 'getResultTestCon');
    // document.body.appendChild(getResultTestCon);

    var getResultTest = document.createElement('div');
    getResultTest.setAttribute('class', 'getResultTest');
    getResultTestCon.appendChild(getResultTest);

    var getReTitle = document.createElement('div');
    getReTitle.setAttribute('class', 'getReTitle');
    getResultTest.appendChild(getReTitle);

    var getReTitleText = document.createTextNode("Are you sure?");
    getReTitle.appendChild(getReTitleText);

    var getReButton1Con = document.createElement('div');
    getReButton1Con.setAttribute('class', 'resultBtn1Con');
    getResultTest.appendChild(getReButton1Con);

    var getReButton1 = document.createElement('div');
    getReButton1.setAttribute('class', 'resultBtn1');
    getReButton1Con.appendChild(getReButton1);

    var reBtnText1 = document.createTextNode("FIND MY DESTINATION");
    getReButton1.appendChild(reBtnText1);

    var getReButton2Con = document.createElement('div');
    getReButton2Con.setAttribute('class', 'resultBtn2Con');
    getResultTest.appendChild(getReButton2Con);

    var getReButton2 = document.createElement('div');
    getReButton2.setAttribute('class', 'resultBtn2');
    getReButton2Con.appendChild(getReButton2);

    var reBtnText2 = document.createTextNode("KEEP SEARCHING");
    getReButton2.appendChild(reBtnText2);

	} 
