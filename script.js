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
    'argued', 'arguer', 'argues', 'argyle', 'aright', 'arisen', 'arises', 'armada', 'armful', 'armies', 'arming', 'armlet', 'armory', 'armpit', 'arnica', 'aromas', 'around', 'arouse', 'arrant',  'arrear', 'arrest', 'arrive', 
    'arrows', 'arroyo', 'arsons', 'artery', 'artful', 'artist', 'ascend', 'ascent', 'ashore', 'ashram', 'asides', 'asking', 'asleep', 'aspect', 'aspens', 'aspire', 'assail', 'assays', 'assent', 'assert', 'assess', 'assets', 
    'assign', 'assist', 'assize', 'assume', 'assure', 'astern', 'asters', 'asthma', 'astral', 'astray', 'astute', 'asylum', 'ataxia', 'atlatl', 'atolls', 'atomic', 'atonal', 'atopic', 'atrial', 'atrium', 'attach', 'attack', 
    'attain', 'attend', 'attest', 'attics', 'attire', 'attune', 'auburn', 'audios', 'audits', 'augers', 'augurs',  'august', 'auntie', 'aureus', 'aurora', 'auteur', 'author', 'autism', 'autumn', 'auxins', 'avails', 'avatar', 
    'avenge', 'avenue', 'averse', 'averts', 'avians', 'aviary', 'avidly', 'avoids',  'avowed', 'awaits', 'awaked', 'awaken', 'awakes', 'awards', 'awhile', 'awning', 'awoken', 'axeman', 'axilla', 'axioms', 'axions', 'axonal', 
    'azalea', 'babble', 'babied', 'babies', 'baboon', 'backed', 'backer'];

//the left right position of the person's next letter
let col = 1;
//either the most down row number or the top row number, helps determine when to start looking at the word list
//ex if the bottom row is 1 that means for infi mode i look at the second word in the words list and keep going down the list from there to display the rest of the words in the output
let bottomRow = 0;
//what the current up down position of the person's next letter is
let typingRow = 1;
//the seed is the number from the list of answers that is randomly generted for a random word
//you will also need to copy the get random int func from my code
let seed = getRandomInt(listOfAnswers.length);
//this what the current row of letters loook like, will be all letter and not empty string when the user is done typing
let guess = [" "," "," "," "," "," "];
//the list of words to be displayed or the words that aren't displayed for infi mode are also included
let words = [[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "],[" "," "," "," "," "," "]];
//this should be the longest part of the docu, maybe even a thousand lines long
document.getElementById("start").addEventListener('click', function () {
    document.getElementById("start").style.visibility = 'hidden';
    document.getElementById("normal").style.visibility = 'visible';
    document.getElementById("infinite").style.visibility = 'visible';
});

document.getElementById("gamemode").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'visible';
    document.getElementById("infinite").style.visibility = 'visible';
});

document.getElementById("normal").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'hidden';
    document.getElementById("infinite").style.visibility = 'hidden';
    mode = 'normal'
});

document.getElementById("infinite").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'hidden';
    document.getElementById("infinite").style.visibility = 'hidden';
    mode - 'InfiniMode'
});

function game () {
    document.addEventListener("keydown", (e) => {
        let pressedKey = String(e.key);
        //letters need to be define with all of the different letters
        if (letters.includes(pressedKey)) {
          letterPress(pressedKey, pressedKey);
        } else if (pressedKey === "Backspace") {
          backspace();
        } else if (pressedKey === "Enter") {
          enter();
        }
    });
}

//alright this is where it goes off the deepend, i suggest just trying to start from fresh with your own demos instead of using my code
//only use my code when you know what it does, use stack overflow for any help you need
function letterPress(letter) {
    if ((col > 42) && (col <= typingRow*6) && (roundWon === false) && (roundLost === false) && (keyboardStart)){
      while (col > 42) {
          bottomRow++;
          typingRow--;
          col = col - 5;
          updateBoard();
      }
    }
    if ((col <= typingRow*6) && (roundWon === false) && (roundLost === false) && (keyboardStart)) {
      cl("letterPressed: " + letter);
      var id = col + "";
      document.getElementById(id).textContent = letter;
      document.getElementById(id).style.borderColor = '#404142';
      guess[col-1-((typingRow-1)*6)] = letter;
      col++;
    }
  }

//tbh connor this project isn't doable, it took me months to accomplish mordle and 70+ hours, idk if you can do it here