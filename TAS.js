var ssf = Processing.getInstanceById('sesamestreetfighter');
var allCharacters = false; //change this depending on if you want all characters or any% (cookie)
var NUM_CHARACTERS = 6; //cookie, grover, oscar, ernie, bert, elmo
var ENTER = 10; //should be 13 for processing 1.4.8 (and javascript?!?!)
var RIGHT = 39;
var currentCharacter = 0;

//portmantouts for each difficulty (Thanks to tom7 for code to generate these http://www.cs.cmu.edu/~tom7/portmantout/)
var facil = "antoaduckoalarvapeagledingoatoadeeratfoxswanwolflycrabeefrogoosealionbearmoleharespiderfisharkcatsnailclamulecrowlbirdogiraffepupigsquidcowhalehawkcamelskunkotterbison";
var medio = "airiverosionimbusmoglacierdrizzlearthundergroundownburstratornadozonefloodautumnightsunamistormorningrasseasonsunsetspringcloudsummerbreezefograssnowindsnowinterpollutionpressureweatherblizzardbarometerlongitudecyclonefrostbitelakecontrails";
var alto = "arkhangelskhabarovskrasnoyarskemerovolgogradzerzhinskaliningradsmolenskvoronezhnizhnevartovsknovorossiyskmagnitogorskbelgorodcheboksaryekaterinburgnovokuznetskvolzhskyaroslavladikavkazorenburgvladivostokulyanovskcherepovetschelyabinskpetrozavodsknovosibirskastrakhanbryansk";
var madness = "abraham buschkernest beutlerichard baerwaldaniel dahmax bodensteinikolai eberhardtheodor curtiusethus calvisiuscarl boschpaul ermanfred eigenjean cabanispeter beyerudolf criegeefriedrich burmeisteralf altmeyeroland benzmartin benekefranz aepikalbert einsteinmax bornotto dielsbernhard eiteludwig aschoffriedrich boiepaul ehrlichmax delbruckjens blauertwilliam blandowskigerhard domagk";

//TODO idk why 4x for each of these seems to improve consistency but it does
// Also not sure why 4x here AND 10x in enterAllWords seems to help the way it does, maybe that can be improved
var characterDifficulty = [
	facil + facil + facil + facil,
	medio + medio + medio + medio,
	alto + alto + alto + alto,
	alto + alto + alto + alto,
	alto + alto + alto + alto,
	madness + madness + madness + madness
]

// This is the best way I could find to emulate actions in processing.js, see below references for more on how this works
// Note that these are events Processing calls (like events) not specific to SSF
// Therefore I am considering calling these to handle input "fair", whereas calling a "gameover" function would not be
// https://processing.org/reference/keyPressed_.html
// https://processing.org/reference/keyCode.html
var pressKey = function(keyCode) {
	//ssf.key = Char(keyCode); //processing 1.4.8 needed this instead
	ssf.key = keyCode;
	ssf.keyCode = keyCode;
	ssf.keyPressed();
}

// https://processing.org/reference/keyTyped_.html
// https://processing.org/reference/keyCode.html
var typeKey = function(keyCode) {
	//ssf.key = Char(keyCode); //processing 1.4.8 needed this instead
	ssf.key = keyCode;
	ssf.keyCode = keyCode;
	ssf.keyTyped();
}

var typeWord = function() {
	var str = characterDifficulty[currentCharacter];
	for(var i=0; i < str.length; i++) {
	  var keyCode = str.charCodeAt(i);
	  typeKey(keyCode);
	}
}

var enterAllWords = function() {
	typeWord();
	//Ten loops here is overkill, but we wait for the animation anyways so it doesn't matter
	for(var i = 1; i < 10; i++) {
		//type words at an interval
		setTimeout(typeWord, i * 1);
	}
}

var doFight = function() {
	pressKey(ENTER); //hit enter to start level
	//delay before entering a level
	setTimeout(enterAllWords, 10);
}

var doAllFights = function() {
	doFight();
	for(var i = 1; i < NUM_CHARACTERS; i++) {
		//delay for each fight
		setTimeout(doFight, i * 2800);
	}
}

var winAsCharacter = function () {
	pressKey(32); //hit space to select character, no idea why enter doesn't work
	//delay after selecting character
	setTimeout(doAllFights, 10);
}

var winAsNextCharacter = function () {
	pressKey(RIGHT); //hit right to select next character
	currentCharacter++;
	//delay after moving character
	setTimeout(winAsCharacter, 20);
}

var progressAndWinAsNextCharacter = function() {
	pressKey(ENTER); //leave score screen
	//delay for endgame screen
	setTimeout(winAsNextCharacter, 10);
}

pressKey(ENTER); //hit enter to pass main menu

//delay for main menu
setTimeout(winAsCharacter, 10);
if(allCharacters) {
	for(var i = 1; i < NUM_CHARACTERS; i++) {
		//delay for full fight - this is pretty tight without changing the lower level times
		setTimeout(progressAndWinAsNextCharacter, 16850 * i);
	}
}

