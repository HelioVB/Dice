window.addEventListener('load', focus);
    
function focus() {
    document.getElementById('numDice').focus();
}
    
function execute(number) {
    let n = parseInt(number);
    if (checkValues(n)) {
        
        let dice = generateDice(n);
        showDice(dice);
        showNumbers(dice);
        showTotal(dice);
    }
}

function checkValues(number) {
    //if number is isNaN
    if (isNaN(number)){
        //Show error "Please enter a number
        document.getElementById('insertNumbers').innerHTML = "Please enter a number ";
        focus();
        return false;
    }else if(number <= 0){
        //Show error "Please enter a number bigger than 0
        document.getElementById('insertNumbers').innerHTML = "Please enter a number bigger than 0";
        focus()
        return false;
    }else{
        document.getElementById('insertNumbers').innerHTML = "";
        return true;
    }
}

function generateDice(number) {
    let dice = [];
    let aleatory = 0;
    for(let n = 0; n < number; n ++){
        aleatory = Math.floor(Math.random() * 6) + 1;
        dice[n] = aleatory;
    }
    return dice;
}

function showDice(dice) {
    document.getElementById('results').innerHTML = " ";
    for(let n = 0; n < dice.length; n++){

        switch(dice[n]){
            case 1:
                var img = document.createElement('img');
                img.src = 'assets/images/dice1.JPG';
                results = document.getElementById('results');
                results.appendChild(img);
                break;
            case 2:
                var img = document.createElement('img');
                img.src = 'assets/images/dice2.JPG';
                results = document.getElementById('results');
                results.appendChild(img); 
                break;
            case 3:
                var img = document.createElement('img');
                img.src = 'assets/images/dice3.JPG';
                results = document.getElementById('results');
                results.appendChild(img); 
                break;
            case 4:
                var img = document.createElement('img');
                img.src = 'assets/images/dice4.JPG';
                results = document.getElementById('results');
                results.appendChild(img); 
                break;
            case 5:
                var img = document.createElement('img');
                img.src = 'assets/images/dice5.JPG';
                results = document.getElementById('results');
                results.appendChild(img); 
                break;
            case 6:
                var img = document.createElement('img');
                img.src = 'assets/images/dice6.JPG';
                results = document.getElementById('results');
                results.appendChild(img); 
                break;
        }
    }
}

function showNumbers(dice) {
    document.getElementById('numeralResults').innerHTML = "";
    var title = document.createElement('h2');
    var numbertext = document.createTextNode('Results');
    title.appendChild(numbertext);

    var element = document.getElementById('numeralResults');
    element.appendChild(title);

    var resultxt = document.createElement("p");
    var texto = "";
    for(let n = 0; n < dice.length; n++){
        texto += dice[n];
    }
    var txtResult = document.createTextNode('The values are: ' + texto);
    resultxt.appendChild(txtResult);
    element.appendChild(resultxt);
}

function showTotal(dice) {
    document.getElementById('TotalResult').innerHTML = "" ;
    let total = 0;
    for(let n = 0; n < dice.length; n++){
        total += dice[n];
    }
    var totalResult = document.createTextNode('Total: ' + total);
    var element = document.getElementById('TotalResult');
    element.appendChild(totalResult);
}