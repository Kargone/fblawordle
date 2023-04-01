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
let currentRowGuess = ['', '', '', '', '', ''];
let gameBoardGuesses = [currentRowGuess];
let answer = listOfAnswers[0];
document.getElementById("start").addEventListener('click', function () {
    document.getElementById("start").style.visibility = 'hidden';
    document.getElementById("normal").style.visibility = 'visible';
    document.getElementById("infinite").style.visibility = 'visible';
});

document.getElementById("normal").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'hidden';
    document.getElementById("infinite").style.visibility = 'hidden';
    document.getElementById("table").style.visibility = 'visible';
});

document.getElementById("infinite").addEventListener('click', function (){
    document.getElementById("normal").style.visibility = 'hidden';
    document.getElementById("infinite").style.visibility = 'hidden';
    document.getElementById("table").style.visibility = 'visible';
});

document.addEventListener("keydown", function(e) {
    let pressedKey = String(e.key);
    console.log(pressedKey)
    if (pressedKey === 'Enter'){
        enterKey();
    } else if (pressedKey === 'Backspace') {
        
    } else if (alphabet.includes(pressedKey)) {
        let cursorColumn = currentRowGuess.indexOf('');
        if (cursorColumn === -1) return;
        currentRowGuess[cursorColumn] = pressedKey;
        updateGameBoard();
    }
});

function enterKey() {
    if (currentRowGuess.indexOf('') != -1) {
        return 'Failed Guess, not completly done';
    }
    let guess = currentRowGuess.join('');
    if (listOfAnswers.indexOf(guess) != -1) {
        return 'Failed Guess, not a valid one';
    }
    //up the row number by one
    gameBoardGuesses[gameBoardGuesses.length - 1] = copy(currentRowGuess);
    currentRowGuess = ['', '', '', '', '', ''];
    gameBoardGuesses.push(currentRowGuess);
}

function updateGameBoard() {
    resetGameBoard();
    let rowNumber = 0;
    for (let row of gameBoardGuesses) {
        rowNumber++;
        console.log(rowNumber)
        updateRow(row, rowNumber);
    }
}

function updateRow(row, rowNumber) {
    let columnNumber = 0;
    if (row.indexOf('') != -1 || rowNumber === gameBoardGuesses.length - 1) {
        //do not color the row
        for (let letter of row) {
            columnNumber++;
            if (letter === '') break;
            document.getElementById(`${rowNumber}_${columnNumber}`).innerHTML = letter;
            document.getElementById(`${rowNumber}_${columnNumber}`).style.backgroundColor = '#070707';
        }
    } else {
        //color the row
        let compareAnswer = copy(answer);
        let fillColors = {'gray': '#121212', 'green': '#00ff00', 'yellow': 'yellow'}
        for (let letter of row) {
            columnNumber++;
            document.getElementById(`${rowNumber}_${columnNumber}`).innerHTML = letter;
            if (compareAnswer[columnNumber - 1] === letter) {
                //green
                compareAnswer[columnNumber - 1] = '';
                document.getElementById(`${rowNumber}_${columnNumber}`).style.backgroundColor = fillColors.green;
            } else if (compareAnswer.indexOf(letter) != -1) {
                //yellow
                compareAnswer[compareAnswer.indexOf(letter)] = '';
                document.getElementById(`${rowNumber}_${columnNumber}`).style.backgroundColor = fillColors.yellow;
            } else {
                //gray
                document.getElementById(`${rowNumber}_${columnNumber}`).style.backgroundColor = fillColors.gray;
            }
        }
    }
}

function resetGameBoard() {
    for (let rowNumber = 1; rowNumber < 8; rowNumber++) {
        for (let columnNumber = 1; columnNumber < 7; columnNumber++) {
            document.getElementById(`${rowNumber}_${columnNumber}`).innerHTML = ' ';
            document.getElementById(`${rowNumber}_${columnNumber}`).style.backgroundColor = 'black';
        }   
    }   
}

function copy(object) {
    return JSON.parse(JSON.stringify(object));
}

//alright this is where it goes off the deepend, i suggest just trying to start from fresh with your own demos instead of using my code
//only use my code when you know what it does, use stack overflow for any help you need