// i had to stringify all of these good thing that was easy
const listOfAnswers = ['abacus', 'abased', 'abated', 'abates', 'abayas', 'abbess', 'abbeys', 'abbots', 'abduct', 'abhors', 'abided', 'abides', 'abject', 'abjure', 'ablate', 'ablaze', 'aboard', 'abodes', 'aborts', 'abound', 'abrade', 
    'abroad', 'abrupt', 'absent', 'absorb', 'absurd', 'abused', 'abuser', 'abuses', 'acacia', 'accede', 'accent', 'accept', 'access', 'accord', 'accost', 'accrue', 'accuse', 'acetic', 'acetyl', 'aching', 'acidic', 'acinar', 
    'acorns', 'across', 'acting', 'action', 'active', 'actors', 'actual', 'acuity', 'acumen', 'adages', 'adagio', 'adapts', 'addend', 'adders', 'addict', 'adding', 'addled', 'adduce', 'adduct', 'adepts', 'adhere', 'adipic', 
    'adjoin', 'adjust', 'admire', 'admits', 'adobes', 'adopts', 'adored', 'adores', 'adorns', 'adrift', 'adroit', 'adsorb', 'adults', 'advent', 'adverb', 'advert', 'advice', 'advise', 'adware', 'adzuki', 'aerate', 'aerial', 
    'aeries', 'affair', 'affect', 'affine', 'affirm', 'afford', 'affray', 'afghan', 'afield', 'aflame', 'afloat', 'afraid', 'afresh', 'agates', 'agaves', 'ageism', 'agency', 'agenda', 'agents', 'aghast', 'agouti', 'agreed', 
    'agrees', 'ahimsa', 'aiders', 'aiding', 'aikido', 'ailing', 'aiming', 'airbag', 'airier', 'airily', 'airing', 'airman', 'airmen', 'airway', 'aisles', 'alarms', 'albedo', 'albeit', 'albino', 'albite', 'albums', 'alcove', 
    'alders', 'alerts', 'alibis', 'aliens', 'alight', 'aligns', 'aliyah', 'alkali', 'alkane', 'alkyds', 'allays', 'allege', 'allele', 'alleys', 'allied', 'allies', 'allots', 'allows', 'alloys', 'allude', 'allure', 'almond', 
    'almost', 'alpaca', 'alphas', 'alpine', 'altars', 'alters', 'alumna', 'alumni', 'always', 'amazed', 'amazes', 'amazon', 'ambers', 'ambled', 'ambles', 'ambush', 'amends', 'amicus', 'amidst', 'amines', 'amnion', 'amoeba', 
    'amoral', 'amount', 'amours', 'ampere', 'ampler', 'ampule', 'amtrak', 'amulet', 'amused', 'amuses', 'anally', 'analog', 'anchor', 'anemia', 'anemic', 'angels', 'angers', 'angina', 'angled', 'angler', 'angles', 'angora', 
    'angsty', 'animal', 'animus', 'anions', 'ankles', 'anklet', 'annals', 'annoys', 'annual', 'annuls', 'anodes', 'anodic', 'anoint', 'anoles', 'anomie', 'anorak', 'anoxia', 'anoxic', 'answer', 'anthem', 'anther', 'antics', 
    'antler', 'antral', 'antrum', 'anuses', 'anvils', 'anyhow', 'anyone', 'anyway', 'aorist', 'aortic', 'apache', 'apathy', 'apexes', 'aphids', 'apiary', 'apical', 'apices', 'apiece', 'aplomb', 'apneas', 'apneic', 'apnoea', 
    'apogee', 'appall', 'appeal', 'appear', 'append', 'apples', 'applet', 'aprons', 'arabic', 'arable', 'arbors', 'arcade', 'arcana', 'arcane', 'arched', 'archer', 'arches', 'archly', 'arctic', 'ardent',  'areola', 'argent', 
    'argued', 'arguer', 'argues', 'argyle', 'aright', 'arisen', 'arises', 'armada', 'armful', 'armies', 'arming', 'armlet', 'armory', 'armpit', 'arnica', 'acurromas', 'around', 'arouse', 'arrant',  'arrear', 'arrest', 'arrive', 
    'arrows', 'arroyo', 'arsons', 'artery', 'artful', 'artist', 'ascend', 'ascent', 'ashore', 'ashram', 'asides', 'asking', 'asleep', 'aspect', 'aspens', 'aspire', 'assail', 'assays', 'assent', 'assert', 'assess', 'assets', 
    'assign', 'assist', 'assize', 'assume', 'assure', 'astern', 'asters', 'asthma', 'astral', 'astray', 'astute', 'asylum', 'ataxia', 'atlatl', 'atolls', 'atomic', 'atonal', 'atopic', 'atrial', 'atrium', 'attach', 'attack', 
    'attain', 'attend', 'attest', 'attics', 'attire', 'attune', 'auburn', 'audios', 'audits', 'augers', 'augurs',  'august', 'auntie', 'aureus', 'aurora', 'auteur', 'author', 'autism', 'autumn', 'auxins', 'avails', 'avatar', 
    'avenge', 'avenue', 'averse', 'averts', 'avians', 'aviary', 'avidly', 'avoids',  'avowed', 'awaits', 'awaked', 'awaken', 'awakes', 'awards', 'awhile', 'awning', 'awoken', 'axeman', 'axilla', 'axioms', 'axions', 'axonal', 
    'azalea', 'babble', 'babied', 'babies', 'baboon', 'backed', 'backer'];

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//the left right position of the person's next letter
let col = 1;
// what row the is being typed on
let row = 0;
//what the current up down position of the person's next letter is
let typingRow = 1;
//this what the current row of letters loook like, will be all letter and not empty string when the user is done typing
let guess = [];
// same thing as guess just not the list
let sGuess = ''
//the list of words to be displayed or the words that aren't displayed for infi mode are also included
let words = [[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "]];
// sets what row for the typed letters to be put into
let rCol = 7
//this should be the longest part of the docu, maybe even a thousand lines long
document.getElementById("start").addEventListener('click', function () {
    document.getElementById("start").style.visibility = 'hidden';
    document.getElementById("normal").style.visibility = 'visible';
    document.getElementById("infinite").style.visibility = 'visible';
    reset()
});

document.getElementById("gamemode").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'visible';
    document.getElementById("infinite").style.visibility = 'visible';
    document.getElementById("table").style.visibility = 'hidden';
    reset()
});

document.getElementById("normal").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'hidden';
    document.getElementById("random").style.visibility = 'hidden';
    document.getElementById("table").style.visibility = 'visible';
    document.getElementById("easy").style.visibility = 'hidden';
    gamemode = "normal";
    reset()
});

document.getElementById("random").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'hidden';
    document.getElementById("random").style.visibility = 'hidden';
    document.getElementById("table").style.visibility = 'visible';
    reset()
});

document.getElementById("easy").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'hidden';
    document.getElementById("random").style.visibility = 'hidden';
    document.getElementById("table").style.visibility = 'visible';
    reset()
});

document.getElementById("continue").addEventListener('click', function (){
    reset()
})

document.addEventListener("keydown", function(e) {
    console.log(e);
    game(e.key)
});

function game(letter) { 
    let pressedKey = String(letter);
    if(pressedKey == 'Enter' && rCol < 43){
        var testAnswer = listOfAnswers.includes(sGuess);
        if(testAnswer == true){
            if(col == rCol){
                rCol += 6;
                words[row] = guess;
                guess = [];
                sGuess = "";
            }
        }
    
    }else{
        if(pressedKey == 'Backspace' && col > 1){
            col--;
            document.getElementById(col).textContent = " ";
            if(col < 7){
                sGuess = sGuess.slice(0, (col%6)-1);
                console.log(sGuess);
            }else{
                sGuess = sGuess.slice(0, (col%6)-1);
                console.log(sGuess);
            }
        }
    }

    if(col < rCol && alphabet.includes(pressedKey) == true){
        document.getElementById(String(col)).textContent = pressedKey;
        col++;
        guess[col-(2+(row*6))] = pressedKey;
        sGuess += pressedKey;
        console.log(guess)
        console.log(sGuess)
    }
}




function reset() {
    for(var i  = 1; i < 43; i++){
        document.getElementById(i+"").style.backgroundColor = "#121213";
        document.getElementById(i+"").style.borderColor = "#2d2d2f";
        document.getElementById(i+"").textContent = " ";
    }
    document
    col = 1;
    guess = [];
    sGuess = "";
}



//alright this is where it goes off the deepend, i suggest just trying to start from fresh with your own demos instead of using my code
//only use my code when you know what it does, use stack overflow for any help you need

//tbh connor this project isn't doable, it took me months to accomplish mordle and 70+ hours, idk if you can do it here